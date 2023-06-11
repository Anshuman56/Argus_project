import facebook from '../images/facebook.png'
import inst from '../images/instagram.png'
import tweet from '../images/twitter.png'
import pintrest from '../images/pinterest.png'
import apple from '../images/apple-n.png'
import playstor from '../images/playstore.png'
import play from '../images/play.png'
import './headerTop.css'
import Moment from 'moment'
import Weather from './weather'



const HeaderTop = () => {
    const formatDate = Moment().format('MMMM Do YYYY')

    return (
        <section className='contenar'>
            <div className='date-time'>
                <h1>{formatDate}</h1>
                <h4><Weather /></h4>

            </div>
            <div className='app-button'>
                <p> Downlod Now</p>
                <button className='app first'><img className='image' src={apple} alt=''></img></button>
                <button className='app second'><img className='image' src={playstor} alt=''></img></button>
                <button className=' app liveTv'>
                    <img className='image' src={play} alt=''></img>
                    Live
                </button>
            </div>
            <div className='social-media'>
                <p>Follow Us</p>
                <img className='icon' src={facebook} alt=''></img>
                <img className='icon' src={inst} alt=''></img>
                <img className='icon' src={tweet} alt=''></img>
                <img className='icon' src={pintrest} alt=''></img>
            </div>
        </section>
    );
}
export default HeaderTop;