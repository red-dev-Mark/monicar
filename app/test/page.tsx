import Link from 'next/link';
import React from 'react';

import { container, title } from '@/app/test/styles.css';

const VanillaExtract = () => {
    return (
        <div className={container}>
            <h1 className={title}>Hello Vanilla Extract!</h1>
            <Link href={'/'}>Go To Test</Link>
        </div>
    );
};

export default VanillaExtract;
