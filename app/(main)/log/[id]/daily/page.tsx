'use client'

import { Select } from '@mantine/core'
import Image from 'next/image'

import Breadcrumb from '@/components/common/Breadcrumb'
import { RoundButton } from '@/components/common/Button/RoundButton'
import ListHeader from '@/components/domain/vehicle/ListHeader'

import { default as ControlBox } from './components'
import * as styles from './styles.css'

const DailyPage = () => {
    return (
        <div className={styles.container}>
            <Breadcrumb type={'일별 및 시간별 운행기록'} />

            <div className={styles.contents}>
                <div className={styles.leftSection}>
                    <ControlBox
                        hasVehicleNumber={true}
                        title={'일별 운행기록'}
                        control={
                            <Select
                                placeholder='1주일'
                                data={['1주일', '1개월', '3개월']}
                                size='md'
                                radius='xl'
                                searchable
                            />
                        }
                        button={
                            <RoundButton color='secondary' size={'small'}>
                                <div className={styles.button}>
                                    <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                                    엑셀
                                </div>
                            </RoundButton>
                        }
                        vehicleNumber={'33가 1234'}
                    >
                        <ListHeader headerTitles={[]}></ListHeader>
                    </ControlBox>
                </div>

                <div className={styles.rightSection}>
                    <ControlBox
                        title={'시간별 운행기록'}
                        button={
                            <RoundButton color='secondary' size={'small'}>
                                <div className={styles.button}>
                                    <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                                    엑셀
                                </div>
                            </RoundButton>
                        }
                    >
                        <ListHeader headerTitles={[]} />
                    </ControlBox>
                </div>
            </div>
        </div>
    )
}

export default DailyPage
