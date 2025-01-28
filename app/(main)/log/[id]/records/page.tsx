'use client'

import { Select } from '@mantine/core'
import Image from 'next/image'

import Breadcrumb from '@/components/common/Breadcrumb'
import { RoundButton } from '@/components/common/Button/RoundButton'
import ListHeader from '@/components/domain/vehicle/ListHeader'

import RecordsBox from './components'
import * as styles from './styles.css'

const RecordsPage = () => {
    return (
        <div className={styles.container}>
            <Breadcrumb type={'일별 및 시간별 운행기록'} />

            <div className={styles.contents}>
                <div className={styles.leftSection}>
                    <RecordsBox
                        title={'일별 운행기록'}
                        control={<Select />}
                        button={
                            <RoundButton color='secondary' size={'small'}>
                                <div className={styles.button}>
                                    <Image src='/icons/green-excel-icon.svg' alt='excel' width={16} height={16} />
                                    엑셀
                                </div>
                            </RoundButton>
                        }
                    >
                        <ListHeader headerTitles={[]}></ListHeader>
                    </RecordsBox>
                </div>

                <div className={styles.rightSection}>
                    <RecordsBox
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
                        <ListHeader headerTitles={[]}></ListHeader>
                    </RecordsBox>
                </div>
            </div>
        </div>
    )
}

export default RecordsPage
