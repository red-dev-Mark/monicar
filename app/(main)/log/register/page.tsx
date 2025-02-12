'use client'

import { CheckIcon, Select } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

import SquareButton from '@/components/common/Button/SquareButton'
import ErrorMessage from '@/components/common/ErrorMessage'
import BaseInput from '@/components/common/Input/BaseInput'
import SearchInput from '@/components/common/Input/SearchInput'
import Message from '@/components/common/Message'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import { useModal } from '@/hooks/useModal'
import { vehicleService } from '@/lib/apis'
import { removeSpaces } from '@/lib/utils/string'
import { isValidVehicleNumberFormat, validateDrivingDistance } from '@/lib/utils/validation'
import { CalendarIcon } from '@/public/icons'

import '@mantine/dates/styles.css'
import 'dayjs/locale/ko'

import VehicleRegisterForm from './components/VehicleRegisterForm'
import * as styles from './styles.css'
import { VehicleTypeModel } from './types'

const RegisterPage = () => {
    const [vehicleType, setVehicleType] = useState<VehicleTypeModel[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [value, setValue] = useState<Date | null>(null)
    const [vehicleNumber, setVehicleNumber] = useState('')
    const [vehicleTypeId, setVehicleTypeId] = useState<number>()
    const [deliveryDate, setDeliveryDate] = useState<string | null>(null)
    const [drivingDistance, setDrivingDistance] = useState('')
    const { isModalOpen, message, openModalWithMessage, closeModal } = useModal()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState<string>('')

    const router = useRouter()

    useEffect(() => {
        const getVehicleType = async () => {
            try {
                setIsLoading(true)
                const vehicleType = await vehicleService.getAvailableVehicleTypes()
                setVehicleType(vehicleType)
            } catch (error) {
                console.error(error)
                setError(error as Error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleType()
    }, [])

    const checkVehicleNumber = async () => {
        try {
            await vehicleService.getAvailableVehicleNumber(vehicleNumber)
            setShowSuccessMessage(true)
            setShowErrorMessage('')
        } catch (error) {
            console.error(error)
            setShowErrorMessage(error as string)
            setShowSuccessMessage(false)
        }
    }

    const handleCancelButtonClick = () => {
        router.back()
    }

    const postVehicleInfo = async () => {
        setIsSubmitting(true)

        if (!vehicleNumber) {
            openModalWithMessage('차량번호를 입력해주세요.')
            setIsSubmitting(false)
            return
        }

        if (!showSuccessMessage) {
            openModalWithMessage('차량번호 중복확인은 필수입니다.')
            setIsSubmitting(false)
            return
        }

        if (showErrorMessage) {
            openModalWithMessage('올바른 차량번호를 입력해주세요.')
            setIsSubmitting(false)
            return
        }

        if (!vehicleTypeId) {
            openModalWithMessage('차량 종류를 선택해주세요.')
            setIsSubmitting(false)
            return
        }

        if (!validateDrivingDistance(drivingDistance)) {
            openModalWithMessage('운행거리를 입력해주세요.')
            setIsSubmitting(false)
            return
        }

        if (!deliveryDate) {
            openModalWithMessage('출고일을 선택해주세요.')
            setIsSubmitting(false)
            return
        }

        setIsSubmitting(true)

        const response = await vehicleService.registerVehicle({
            vehicleNumber,
            vehicleTypeId,
            deliveryDate,
            drivingDistance: drivingDistance as string,
        })

        setIsLoading(false)

        if (!response.isSuccess) {
            openModalWithMessage(response.errorMessage)
            setIsSubmitting(false)
            return
        }

        router.push('/log')
        notifications.show({
            message: '차량이 성공적으로 등록되었습니다.',
            autoClose: 1200,
            withCloseButton: false,
            radius: 'sm',
            icon: <CheckIcon size={18} />,
            style: {
                width: '400px',
                height: '70px',
                border: 'solid 1px #f7f7f7',
                fontWeight: 'bold',
            },
        })
    }

    const formFields = [
        {
            id: 'vehicleNumber',
            label: '차량 번호',
            component: (
                <div className={styles.searchInputWrapper}>
                    <SearchInput
                        icon='/icons/search-icon.svg'
                        onChange={(event) => {
                            setVehicleNumber(event.target.value)
                            setShowSuccessMessage(false)
                            setShowErrorMessage('')
                        }}
                        onSubmit={() => {
                            if (isValidVehicleNumberFormat(removeSpaces(vehicleNumber))) {
                                checkVehicleNumber()
                            } else {
                                setShowErrorMessage('차량번호 형식이 맞지 않습니다.')
                                setShowSuccessMessage(false)
                            }
                        }}
                    />
                    {showSuccessMessage && (
                        <div className={styles.messageWrapper}>
                            <Message message={'등록 가능한 차량번호입니다.'} isError={false} />
                        </div>
                    )}
                    {showErrorMessage && (
                        <div className={styles.messageWrapper}>
                            <Message message={showErrorMessage} isError={true} />
                        </div>
                    )}
                </div>
            ),
        },
        {
            id: 'vehicleType',
            label: '차량 종류',
            component: (
                <Select
                    placeholder='차량 종류를 선택하세요.'
                    data={
                        vehicleType?.map((item) => ({
                            value: item.id.toString(),
                            label: item.vehicleName,
                        })) || []
                    }
                    onChange={(event) => {
                        setVehicleTypeId(Number(event))
                    }}
                    size='lg'
                    radius='xl'
                    checkIconPosition='right'
                />
            ),
        },
        {
            id: 'mileage',
            label: '운행 거리',
            component: (
                <div className={styles.inputWrapper}>
                    <BaseInput
                        placeholder={'운행 거리를 입력하세요.'}
                        value={drivingDistance}
                        onChange={(event) => {
                            const value = event.target.value
                            if (validateDrivingDistance(value)) {
                                setDrivingDistance(value)
                            }
                        }}
                    />
                    <div className={styles.km}>km</div>
                </div>
            ),
        },
        {
            id: 'releaseDate',
            label: '차량 출고',
            component: (
                <DatePickerInput
                    locale='ko'
                    rightSection={
                        <div style={{ width: '24px', height: '24px' }}>
                            <CalendarIcon size={16} stroke={1} />
                        </div>
                    }
                    maxDate={new Date()}
                    valueFormat='YYYY년 MM월 DD일'
                    rightSectionPointerEvents='none'
                    size='lg'
                    radius='xl'
                    placeholder='출고일을 선택하세요.'
                    styles={{
                        input: {
                            color: '#222222',
                        },
                    }}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                        setDeliveryDate(newValue ? newValue.toISOString().slice(0, 10) : null)
                    }}
                />
            ),
        },
    ]

    if (error) {
        return <ErrorMessage />
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>차량등록📝</div>

            <div className={styles.formWrapper}>
                {error ? <ErrorMessage /> : <VehicleRegisterForm fields={formFields} />}
            </div>

            <div className={styles.buttonsWrapper}>
                <SquareButton color={'white'} onClick={handleCancelButtonClick}>
                    취소
                </SquareButton>
                <SquareButton color={'dark'} onClick={postVehicleInfo} disabled={isLoading}>
                    {isSubmitting ? (
                        <ColorRing
                            visible={true}
                            height='40'
                            width='40'
                            ariaLabel='color-ring-loading'
                            wrapperStyle={{}}
                            wrapperClass='color-ring-wrapper'
                            colors={['#ff385c', '#cf6b81', '#fdced4', '#00b087', '#ed9684']}
                        />
                    ) : (
                        '등록'
                    )}
                </SquareButton>
            </div>

            <Modal
                isOpen={isModalOpen}
                message={message as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeModal}
            />
        </div>
    )
}

export default RegisterPage
