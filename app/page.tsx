import BaseInput from '@/components/common/Input/BaseInput'
import Message from '@/components/common/Message'
import Header from '@/components/layout/Header'

const HomePage = () => {
    return (
        <div>
            <div>HI</div>
            <Header title='asdfasd' isBackButton />
            <BaseInput />
            <Message message='이미 등록된 차량입니다.' />
        </div>
    )
}

export default HomePage
