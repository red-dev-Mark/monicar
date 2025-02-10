'use client'

import { Select } from '@mantine/core'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import Breadcrumbs from '@/components/common/Breadcrumbs'
import ExcelButton from '@/components/common/Button/ExcelButton'
import ErrorMessage from '@/components/common/ErrorMessage'
import PageLoader from '@/components/common/PageLoader'
import ListHeader from '@/components/domain/vehicle/ListHeader'
import { API_ENDPOINTS } from '@/constants/api'
import { DAILY_TITLES, HOURLY_TITLES } from '@/constants/listHeader'

import { default as ControlBox } from './components'
import DailyListItem from './components/DailyListItem'
import { useDailyData } from './hooks/useDailyData'
import * as styles from './styles.css'

const DailyPage = () => {
    const { id } = useParams()
    const [period, setPeriod] = useState<string>('WEEK')
    const { dailyData, isLoading, error } = useDailyData({ url: `${API_ENDPOINTS.DAILY}/${id}`, period })
    // const [selectedDate, setSelectedDate] = useState<string>('')

    if (isLoading) {
        return <PageLoader />
    }
    if (error) {
        return <ErrorMessage />
    }

    return (
        <div className={styles.container}>
            <Breadcrumbs
                breadcrumbsData={[
                    { title: '운행기록', isActive: false },
                    { title: '운행일지', isActive: false },
                    { title: '일별 및 시간별 운행기록', isActive: true },
                ]}
            />

            <div className={styles.contents}>
                <div className={styles.leftSection}>
                    <ControlBox
                        hasVehicleNumber={true}
                        title={'일별 운행기록'}
                        control={
                            <Select
                                value={period}
                                onChange={(value) => setPeriod(value || 'WEEK')}
                                placeholder='1주일'
                                data={['WEEK', 'MONTH', 'THREE_MONTHS']}
                                size='md'
                                radius='xl'
                            />
                        }
                        button={<ExcelButton />}
                        vehicleNumber={'33가 1234'}
                    >
                        <div className={styles.listContents}>
                            <ListHeader headerTitles={DAILY_TITLES} />
                            {dailyData?.map((log) => (
                                <DailyListItem
                                    key={log.drivingDate}
                                    data={log}
                                    onClick={() => {
                                        console.log(log.drivingDate)
                                        // setSelectedDate(log.drivingDate)
                                    }}
                                />
                            ))}
                        </div>
                    </ControlBox>
                </div>

                <div className={styles.rightSection}>
                    <ControlBox title={'시간별 운행기록'} button={<ExcelButton />}>
                        <ListHeader headerTitles={HOURLY_TITLES} />

                        {/* {selectedDate && ( )} */}
                    </ControlBox>
                </div>
            </div>
        </div>
    )
}

export default DailyPage
