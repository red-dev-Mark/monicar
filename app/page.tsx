import Link from 'next/link'

const HomePage = () => {
    return (
        <div>
            <h1>HI</h1>
            <Link href={'/test'}>Go To Test</Link>
        </div>
    )
}

export default HomePage
