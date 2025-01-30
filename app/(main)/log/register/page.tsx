'use client'

import { Select } from '@mantine/core'
import { useEffect, useState } from 'react'

import VehicleRegisterForm from '@/app/(main)/log/components/VehicleRegisterForm'
import Breadcrumb from '@/components/common/Breadcrumb'
import SquareButton from '@/components/common/Button/SquareButton'
import BaseInput from '@/components/common/Input/BaseInput'
import SearchInput from '@/components/common/Input/SearchInput'
import { registerAPI } from '@/lib/apis/register'

import * as styles from './styles.css'

interface VehicleTypeModel {
    id: number
    vehicleName: string
}

// TODO: 공통 에러처리
// interface CommonError {
//     isSuccess: boolean
//     errorMessage: string[]
//     errorCode: number
//     timestamp: number
// }

const RegisterPage = () => {
    const [vehicleType, setVehicleType] = useState<VehicleTypeModel[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getVehicleType = async () => {
            try {
                setIsLoading(true)
                const vehicleType = await registerAPI.getVehicleType()
                console.log(vehicleType)
                setVehicleType(vehicleType)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        getVehicleType()
    }, [])

    if (isLoading || !vehicleType) return

    const formFields = [
        {
            id: 'vehicleNumber',
            label: '차량번호',
            component: <SearchInput icon={''} />,
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
            component: <BaseInput />,
            isError: false,
        },
        {
            id: 'releaseDate',
            label: '출고일',
            component: <BaseInput />,
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
                <SquareButton color={'white'}>취소</SquareButton>
                <SquareButton color={'dark'}>등록</SquareButton>
            </div>
        </div>
    )
}

export default RegisterPage
