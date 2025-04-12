import { Skeleton } from '@mantine/core'

import * as styles from '@/styles/table.css'

import { Table } from '../../Table'
import { TableCell } from '../../TableCell'
import TableHeader from '../../TableHeader'

const DetailSkeleton = () => {
    return (
        <div className={styles.tableWrapper} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Table>
                <tr>
                    <TableHeader>자동차 등록번호</TableHeader>
                    <TableHeader>차량종류</TableHeader>
                </tr>
                <tr>
                    <TableCell>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Skeleton height={20} width='10%' radius='sm' />
                        </div>
                    </TableCell>
                    <TableCell>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Skeleton height={20} width='10%' radius='sm' />
                        </div>
                    </TableCell>
                </tr>
            </Table>

            <Table>
                <tr>
                    <TableHeader rowSpan={3}>과세기간</TableHeader>
                    <TableCell rowSpan={3}>
                        <Skeleton height={24} width='100%' radius='sm' />
                    </TableCell>
                    <TableHeader rowSpan={2}>업무승용차 운행기록부</TableHeader>
                    <TableHeader>상호명</TableHeader>
                    <TableCell>
                        <Skeleton height={24} width='80%' radius='sm' />
                    </TableCell>
                </tr>
                <tr>
                    <TableHeader>사업자 등록번호</TableHeader>
                    <TableCell>
                        <Skeleton height={24} width='80%' radius='sm' />
                    </TableCell>
                </tr>
            </Table>

            <Table>
                <tr>
                    <TableHeader rowSpan={2}>사용일자</TableHeader>
                    <TableHeader colSpan={8}>운행내역</TableHeader>
                </tr>
                <tr>
                    <TableHeader>부서</TableHeader>
                    <TableHeader>성명</TableHeader>
                    <TableHeader>전 계기판 거리</TableHeader>
                    <TableHeader>후 계기판 거리</TableHeader>
                    <TableHeader>주행거리</TableHeader>
                    <TableHeader>출근용</TableHeader>
                    <TableHeader>일반업무용</TableHeader>
                    <TableHeader>비고</TableHeader>
                </tr>
                {[1, 2, 3].map((i) => (
                    <tr key={i}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((j) => (
                            <TableCell key={j}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Skeleton height={20} width='80%' radius='sm' />
                                </div>
                            </TableCell>
                        ))}
                    </tr>
                ))}
            </Table>

            <Table>
                <tr>
                    <TableHeader>과세기간 총 주행 거리</TableHeader>
                    <TableCell>
                        <Skeleton height={24} width='60%' radius='sm' />
                    </TableCell>
                    <TableHeader>과세기간 업무용 사용 거리</TableHeader>
                    <TableCell>
                        <Skeleton height={24} width='60%' radius='sm' />
                    </TableCell>
                    <TableHeader>업무사용비율</TableHeader>
                    <TableCell>
                        <Skeleton height={24} width='40%' radius='sm' />
                    </TableCell>
                </tr>
            </Table>
        </div>
    )
}

export default DetailSkeleton
