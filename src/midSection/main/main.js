import BalckPanel from './hero/blackPanel'
import RedPanel from './hero/redPanel'
import Card from './card/card'
import './main.css'

const Main = () => {
    return (
        <main className="main-section">
            < RedPanel story='Top Stories' news='Kill 11 in chatisgad' />
            <section className='blackPanel-section'>
                <BalckPanel catagori='eleplan' news='elepant kill 3' />
                <BalckPanel catagori='eleplan' news='elepant kill 3' />
            </section>
            <section className='card-section'>
                <Card category='Spots' news='IPL cricket is ban in odisha.' />
                <Card category='Spots' news='IPL cricket is ban in odisha.' />
                <Card category='Spots' news='IPL cricket is ban in odisha.' />
            </section>
        </main>
    )
}
export default Main