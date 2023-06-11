import AsideLeft from './asideLeft/asideLeft.js'
import AsideRight from './asideRight/asideRight.js'
import Main from './main/main.js'
import './midSection.css'

const MidSection = () => {
    return (
        <div className='mid-row'>
            <AsideLeft />
            <Main />
            <AsideRight />
        </div>
    )
}
export default MidSection