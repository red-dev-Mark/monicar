'use client'

import { Select } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import VehicleRegisterForm from '@/app/(main)/log/components/VehicleRegisterForm'
import Breadcrumb from '@/components/common/Breadcrumb'
import SquareButton from '@/components/common/Button/SquareButton'
import BaseInput from '@/components/common/Input/BaseInput'
import SearchInput from '@/components/common/Input/SearchInput'
import { registerAPI } from '@/lib/apis/register'

import * as styles from './styles.css'
import { VehicleTypeModel } from './types'

const RegisterPage = () => {
    const router = useRouter()

    const [vehicleType, setVehicleType] = useState<VehicleTypeModel[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [vehicleNumber, setVehicleNumber] = useState<string>('')
    const [vehicleTypeId, setVehicleTypeId] = useState<number>()
    const [deliveryDate, setDeliveryDate] = useState<string>('1995-11-02')
    const [drivingDistance, setDrivingDistance] = useState<number>(1)

    useEffect(() => {
        const getVehicleType = async () => {
            try {
                setIsLoading(true)
                const vehicleType = await registerAPI.getVehicleType()
                setVehicleType(vehicleType)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleType()
    }, [])

    const postRegisterVehicle = async () => {
        // TODO: 유효성검사
        if (!vehicleTypeId || !drivingDistance) {
            return
        }

        try {
            await registerAPI.postRegisterVehicle({
                vehicleNumber,
                vehicleTypeId,
                deliveryDate,
                drivingDistance,
            })
            router.push('/log')
        } catch (error) {
            console.error(error)
        }
    }

    if (isLoading || !vehicleType) return

    const handleCancelButtonClick = () => {
        router.push('/log')
    }

    const formFields = [
        {
            id: 'vehicleNumber',
            label: '차량번호',
            component: <SearchInput onChange={(event) => setVehicleNumber(event.target.value)} icon={''} />,
            isError: false,
        },
        {
            id: 'vehicleType',
            label: '차량종류',
            component: (
                <Select
                    placeholder='차량종류를 선택하세요.'
                    data={
                        vehicleType?.map((item) => ({
                            value: item.id.toString(),
                            label: item.vehicleName,
                        })) || []
                    }
                    onChange={(event) => {
                        setVehicleTypeId(Number(event))
                    }}
                    size='md'
                    radius='xl'
                    checkIconPosition='right'
                />
            ),
            isError: false,
        },
        {
            id: 'mileage',
            label: '운행거리',
            component: <BaseInput onChange={(event) => setDeliveryDate(event.target.value)} />,
            isError: false,
        },
        {
            id: 'releaseDate',
            label: '출고일',
            component: <BaseInput onChange={(event) => setDrivingDistance(Number(event))} />,
            isError: false,
        },
    ]

    return (
        <div className={styles.container}>
            <Breadcrumb type={'차량등록'} />
            <div className={styles.title}>차량등록📝</div>
            <div className={styles.formWrapper}>
                <VehicleRegisterForm fields={formFields} />
            </div>

            <div className={styles.buttonsWrapper}>
                <SquareButton color={'white'} onClick={handleCancelButtonClick}>
                    취소
                </SquareButton>
                <SquareButton color={'dark'} onClick={postRegisterVehicle}>
                    등록
                </SquareButton>
            </div>
        </div>
    )
}

export default RegisterPage
