import React from 'react'

import * as styles from './styles.css'

const VehicleStatus = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.circle} />
                    <div className={styles.title}>전체차량</div>
                </div>

                <div className={styles.count}>30</div>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.circle} />
                    <div className={styles.title}>주행중</div>
                </div>

                <div className={styles.count}>30</div>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.circle} />
                    <div className={styles.title}>미주행</div>
                </div>

                <div className={styles.count}>30</div>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.itemContainer}>
                <div className={styles.titleWrapper}>
                    <div className={styles.circle} />
                    <div className={styles.title}>미관제</div>
                </div>

                <div className={styles.count}>30</div>
                <div className={styles.bar}></div>
            </div>
        </div>
    )
}

export default VehicleStatus
