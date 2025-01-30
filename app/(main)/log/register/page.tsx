import { Select } from '@mantine/core'

import VehicleRegisterForm from '@/app/(main)/log/components/VehicleRegisterForm'
import Breadcrumb from '@/components/common/Breadcrumb'
import SquareButton from '@/components/common/Button/SquareButton'
import BaseInput from '@/components/common/Input/BaseInput'
import SearchInput from '@/components/common/Input/SearchInput'

import * as styles from './styles.css'

const RegisterPage = () => {
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
                    data={['그랜저', '쏘나타', '싼타페', '아반떼']}
                    size='md'
                    radius='xl'
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
