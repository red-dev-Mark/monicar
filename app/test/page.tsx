import React from 'react';
import { container, title } from '@/styles/styles.css';
import Link from 'next/link';

const VanillaExtract = () => {
    return (
        <div className={container}>
            <h1 className={title}>Hello Vanilla Extract!</h1>
            <Link href={'/'}>Go To Test</Link>
        </div>
    );
};

export default VanillaExtract;
