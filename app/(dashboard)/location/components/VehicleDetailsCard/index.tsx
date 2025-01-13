import Image from 'next/image'

import Badge from '@/components/common/Badge'
import SquareButton from '@/components/common/Button/SquareButton'

import * as styles from './styles.css'

const VehicleDetailsCard = () => {
    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Badge shape='rectangle' variant='운행중' />
                    <h2 className={styles.vehicleNumber}>54하 2902</h2>
                </div>
                <button aria-label='차량 상세 정보 닫기'>
                    <Image src={'/icons/clear-icon.svg'} width={32} height={32} alt='닫기 버튼' />
                </button>
            </header>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                조직명
                            </th>
                            <td className={styles.tableCell}>04/09 조직</td>
                            <th scope='row' className={styles.tableHeader}>
                                운전자명
                            </th>
                            <td className={styles.tableCell}>테스트</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                운행상태
                            </th>
                            <td className={styles.tableCell}>운행중</td>
                            <th scope='row' className={styles.tableHeader}>
                                속도
                            </th>
                            <td className={styles.tableCell}>0 km/h</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 ON
                            </th>
                            <td className={styles.tableCell}>2021.06.11 16:50:13</td>
                            <th scope='row' className={styles.tableHeader}>
                                최근시동 OFF
                            </th>
                            <td className={styles.tableCell}>2021.06.11 16:50:13</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행시간
                            </th>
                            <td className={styles.tableCell}>97분</td>
                            <th scope='row' className={styles.tableHeader}>
                                당일주행거리
                            </th>
                            <td className={styles.tableCell}>49.7 km</td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종수신
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                2021.06.11 16:50:13
                            </td>
                        </tr>
                        <tr>
                            <th scope='row' className={styles.tableHeader}>
                                최종위치
                            </th>
                            <td colSpan={3} className={styles.tableCell}>
                                대구광역시 동구 효목동 209
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <SquareButton>경로보기</SquareButton>
        </article>
    )
}

export default VehicleDetailsCard
