import './adv.css'
import like from '../../images/like.png'
import tweet from '../../images/twitterWhite.png'
import youtube from '../../images/youtubeWhite.png'
import arrow from '../../images/right-arrow.png'

const Adv = () => {
    return (
        <section className="right-aside-adv">
            <div className="adv">adv</div>
            <section className='social-media-connection'>
                <h3>Stay Connected</h3>
                <div className='social-media-button-contener'>
                    <button className='fb'><img className='social-media-buttons-icons' src={like} alt=''></img>Like 3.1m</button>
                    <button className='tweet'><img className='social-media-buttons-icons' src={tweet} alt=''></img>Follow</button>
                    <button className='youtube'><img className='social-media-buttons-icons' src={youtube} alt=''></img>YouTube</button>
                </div>
                <div className='newsletter-contenar'>
                    <h2 className='newsletter-heading'>Subscribe to out <br></br> Newsletter!</h2>
                    <div className='newsletter-contener-form'>
                        <input className='newsletter-input-field' type="text" placeholder="Enter email..."></input>
                        <button className='newsletter-button'><img src={arrow} alt='' className='newsletter-button-icon'></img></button>
                    </div>
                </div>

            </section>
        </section>
    )
}
export default Adv