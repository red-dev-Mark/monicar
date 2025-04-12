'use client'

import { DatePickerInput } from '@mantine/dates'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

import ExcelButton from '@/components/common/Button/ExcelButton'
import LinkButton from '@/components/common/Button/LinkButton'
import { RoundButton } from '@/components/common/Button/RoundButton'
import ControlLayout from '@/components/common/ControlLayout'
import ErrorMessage from '@/components/common/ErrorMessage'
import Modal from '@/components/common/Modal'
import { ModalMessageType } from '@/components/common/Modal/types'
import DetailSkeleton from '@/components/common/Skeleton/DetailSkeleton'
import { API_ENDPOINTS } from '@/constants/api'
import { vehicleAPI } from '@/lib/apis'
import { addSpaceVehicleNumber } from '@/lib/utils/string'
import { CalendarIcon } from '@/public/icons'
import { breakPoints } from '@/styles/theme.css'
import '@mantine/dates/styles.css'
import 'dayjs/locale/ko'

import BusinessInfoTable from './components/BusinessInfoTable'
import DrivingInfoTable from './components/DrivingInfoTable'
import Header from './components/Header'
import TotalTable from './components/TotalTable'
import VehicleInfoTable from './components/VehicleInfoTable'
import { useDetailData } from './hooks/useDetailData'
import { useDetailModal } from './hooks/useDetailModal'
import { useSearchDate } from './hooks/useSearchDate'
import * as styles from './styles.css'
import { downloadExcel } from './utils/excel'

const DetailPage = () => {
    const { id } = useParams()
    const router = useRouter()
    const { dateRange, handleDateRangeChange, getFormattedDates, isDateRangeValid } = useSearchDate()
    const dates = getFormattedDates()
    const isMobile = useMediaQuery(`(max-width: ${breakPoints.mobile}px)`)

    const { detailData, isLoading, error } = useDetailData({
        url: `${API_ENDPOINTS.LOG}/${id}`,
        startDate: dates?.startDate,
        endDate: dates?.endDate,
        enabled: isDateRangeValid,
    })

    const formattedVehicleNumber = detailData?.vehicleInfo.vehicleNumber
        ? addSpaceVehicleNumber(detailData.vehicleInfo.vehicleNumber)
        : ''

    const {
        isConfirmModalOpen,
        confirmModalMessage,
        closeConfirmModal,
        showConfirmMessage,
        isAlertModalOpen,
        alertModalMessage,
        closeAlertModal,
        showAlertMessage,
    } = useDetailModal()

    const handleExcelButtonClick = async () => {
        try {
            await downloadExcel(detailData)
        } catch (error) {
            console.error('엑셀 다운로드 에러', error)
            showAlertMessage('엑셀 다운로드에 실패했습니다')
        }
    }

    const handleDeleteButtonClick = () => {
        showConfirmMessage('선택한 차량을 삭제하시겠습니까?')
    }

    const handleDeleteVehicle = async (id: number) => {
        try {
            await vehicleAPI.deleteVehicle(id)
            router.replace('/log')
        } catch (error) {
            console.error('차량 삭제 실패', error)
            showAlertMessage('차량 삭제에 실패했습니다')
        }
    }

    const confirmDeleteVehicle = () => {
        if (!id) return
        handleDeleteVehicle(Number(id))
    }

    if (error) {
        return <ErrorMessage />
    }

    if (isLoading) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                    <ControlLayout
                        control={
                            <div className={styles.datePickerInputWrapper}>
                                <DatePickerInput
                                    locale='ko'
                                    leftSection={
                                        <div style={{ width: '24px', height: '24px' }}>
                                            <CalendarIcon size={16} stroke={1} />
                                        </div>
                                    }
                                    leftSectionPointerEvents='none'
                                    maxDate={new Date()}
                                    size={isMobile ? 'md' : 'lg'}
                                    type='range'
                                    radius='xl'
                                    placeholder='과세기간 범위 선택'
                                    value={dateRange}
                                    onChange={handleDateRangeChange}
                                    valueFormat='YYYY년 MM월 DD일'
                                    clearable={true}
                                />
                            </div>
                        }
                        primaryButton={
                            <div className={styles.excelButtonWrapper}>
                                <ExcelButton onClick={handleExcelButtonClick} />
                            </div>
                        }
                        secondaryButton={
                            detailData?.vehicleInfo.status !== 'IN_OPERATION' ? (
                                <div className={styles.deleteButtonWrapper}>
                                    <RoundButton color='primary' size='small' onClick={handleDeleteButtonClick}>
                                        <div className={styles.deleteButton}>
                                            <Image src='/icons/white-trash-icon.svg' alt='add' width={18} height={18} />
                                            차량삭제
                                        </div>
                                    </RoundButton>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    />
                </div>

                <div className={styles.tableWrapper}>
                    <VehicleInfoTable
                        vehicleNumber={formattedVehicleNumber}
                        vehicleModel={detailData?.vehicleInfo.vehicleModel}
                        isLoading={true}
                    />
                    <DetailSkeleton />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />

                <ControlLayout
                    control={
                        <div className={styles.datePickerInputWrapper}>
                            <DatePickerInput
                                locale='ko'
                                leftSection={
                                    <div style={{ width: '24px', height: '24px' }}>
                                        <CalendarIcon size={16} stroke={1} />
                                    </div>
                                }
                                leftSectionPointerEvents='none'
                                maxDate={new Date()}
                                size={isMobile ? 'md' : 'lg'}
                                type='range'
                                radius='xl'
                                placeholder='과세기간 범위 선택'
                                value={dateRange}
                                onChange={handleDateRangeChange}
                                valueFormat='YYYY년 MM월 DD일'
                                clearable={true}
                                allowSingleDateInRange
                            />
                        </div>
                    }
                    primaryButton={
                        <div className={styles.excelButtonWrapper}>
                            <ExcelButton onClick={handleExcelButtonClick} />
                        </div>
                    }
                    secondaryButton={
                        detailData?.vehicleInfo.status !== 'IN_OPERATION' ? (
                            <div className={styles.deleteButtonWrapper}>
                                <RoundButton color='primary' size='small' onClick={handleDeleteButtonClick}>
                                    <div className={styles.deleteButton}>
                                        <Image src='/icons/white-trash-icon.svg' alt='add' width={18} height={18} />
                                        차량삭제
                                    </div>
                                </RoundButton>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                />
            </div>

            <Modal
                isOpen={isConfirmModalOpen}
                message={confirmModalMessage as ModalMessageType}
                variant={{ variant: 'confirm', confirmButton: '확인', cancelButton: '취소' }}
                onClose={closeConfirmModal}
                onConfirm={confirmDeleteVehicle}
            />
            <Modal
                isOpen={isAlertModalOpen}
                message={alertModalMessage as ModalMessageType}
                variant={{ variant: 'alert', confirmButton: '확인' }}
                onClose={closeAlertModal}
            />

            <div className={styles.tableWrapper}>
                <VehicleInfoTable
                    vehicleNumber={formattedVehicleNumber}
                    vehicleModel={detailData?.vehicleInfo.vehicleModel}
                    isLoading={false}
                />

                <BusinessInfoTable
                    taxStartPeriod={detailData?.taxStartPeriod}
                    taxEndPeriod={detailData?.taxEndPeriod}
                    businessName={detailData?.businessInfo.businessName}
                    businessRegistrationNumber={detailData?.businessInfo.businessRegistrationNumber}
                />

                <DrivingInfoTable records={detailData?.records} />

                <TotalTable
                    taxPeriodDistance={detailData?.taxPeriodDistance}
                    taxPeriodBusinessDistance={detailData?.taxPeriodBusinessDistance}
                    businessUseRatio={detailData?.businessUseRatio}
                />
            </div>

            {(detailData?.records.length ?? 0) > 0 && (
                <LinkButton href={`/log/${id}/daily`} className={styles.linkButton}>
                    일별 및 시간별 조회
                </LinkButton>
            )}
        </div>
    )
}

export default DetailPage
