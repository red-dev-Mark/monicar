import BaseInput from '@/components/common/Input/BaseInput'
import SignInInput from '@/components/common/Input/SignInInput'
import Header from '@/components/layout/Header'

const HomePage = () => {
    return (
        <>
            <Header title='asdfasd' isBackButton />
            <SignInInput icon={'/icons/sign-in-user-icon.svg'} />
            <SignInInput icon={'/icons/sign-in-lock-icon.svg'} type='password' />
            <BaseInput />
        </>
    )
}

export default HomePage
