// import { Group, Pagination } from '@mantine/core'
// import {  useState } from 'react'

// import Accordion from '@/components/common/Accordion'
// // import { routeService } from '@/lib/apis'
// import { vars } from '@/styles/theme.css'

// import * as styles from './styles.css'

// const RouteTimelineSection = () => {
//     const [activePage, setActivePage] = useState(1)
//     const [routeData, setRouteData] = useState()
//     const [vehicleNumber, setVehicleNumber] = useState('')
//     console.log(vehicleNumber)
//     // useEffect(() => {
//     //     const getPaginationDetail = async () => {
//     //         const paginationData = await routeService.getVehicleRoutesDetail(
//     //             '1',
//     //             '2025-01-27T22:00:00',
//     //             '2025-01-28T00:00:00',
//     //             activePage,
//     //         )

//     //         setRouteData(paginationData)
//     //         setVehicleNumber(paginationData.content.vehicleNumber)
//     //     }

//     //     getPaginationDetail()
//     // }, [activePage])

//     console.log(routeData)

//     // if (!routeData?.content.routes) return

//     return (
//         <Accordion variant='secondary' title='경로 상세목록'>
//             <div className={styles.container}>
//                 <div className={styles.tableHeader}>
//                     <p className={styles.timestamp}>시간</p>
//                     <p className={styles.speed}>속도</p>
//                     <p className={styles.location}>위치</p>
//                 </div>

//                 <div className={styles.tableList}>
//                     {/* {routeData.content.routes.map((route, index) => {
//                     return (
//                         <div key={route.timestamp} className={styles.tableItem}>
//                             <p className={styles.index}>{index + 1}</p>
//                             <p className={styles.timestamp}>{route.timestamp}</p>
//                             <p className={styles.vehicleNumber}>{vehicleNumber}</p>
//                             <p className={styles.speed}>{route.spd} km</p>
//                             <p className={styles.location}>
//                                 {route.lat} {route.lng}
//                             </p>
//                         </div>
//                     )
//                 })} */}
//                     <div className={styles.tableItem}>
//                         <p className={styles.timestamp}>2024-09-01 13:24</p>
//                         <p className={styles.speed}>213km</p>
//                         <p className={styles.location}>경북 구미시 신평동 168-54</p>
//                     </div>
//                     <div className={styles.tableItem}>
//                         <p className={styles.timestamp}>2024-09-01 13:24</p>
//                         <p className={styles.speed}>213km</p>
//                         <p className={styles.location}>경북 구미시 신평동 168-54</p>
//                     </div>
//                     <div className={styles.tableItem}>
//                         <p className={styles.timestamp}>2024-09-01 13:24</p>
//                         <p className={styles.speed}>213km</p>
//                         <p className={styles.location}>경북 구미시 신평동 168-54</p>
//                     </div>
//                     <div className={styles.tableItem}>
//                         <p className={styles.timestamp}>2024-09-01 13:24</p>
//                         <p className={styles.speed}>213km</p>
//                         <p className={styles.location}>경북 구미시 신평동 168-54</p>
//                     </div>
//                     <div className={styles.tableItem}>
//                         <p className={styles.timestamp}>2024-09-01 13:24</p>
//                         <p className={styles.speed}>213km</p>
//                         <p className={styles.location}>경북 구미시 신평동 168-54</p>
//                     </div>
//                 </div>

//                 <div className={styles.pagination}>
//                     <Pagination.Root
//                         // total={routeData?.totalPages}
//                         total={100}
//                         value={activePage}
//                         onChange={setActivePage}
//                         color={vars.colors.primary}
//                         boundaries={0}
//                     >
//                         <Group gap={5} justify='center'>
//                             <Pagination.First />
//                             <Pagination.Previous />
//                             <Pagination.Items />
//                             <Pagination.Next />
//                             <Pagination.Last />
//                         </Group>
//                     </Pagination.Root>
//                 </div>
//             </div>
//         </Accordion>
//     )
// }

// export default RouteTimelineSection
