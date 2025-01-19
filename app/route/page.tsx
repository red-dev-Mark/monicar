import dynamic from 'next/dynamic'

const RoutePage = dynamic(() => import('./RoutePage'), {
    ssr: false,
})

export default RoutePage
