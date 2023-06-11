import './search_bar.css'
import close from './../images/close.png'



const Search = ({ localClose }) => {

    const handleClose = () => {
        localClose()
    }

    return (
        <div>
            <div className="search_bar_contaner ">
                <input type="text" placeholder="Type to search" className="input-search-field"></input>
                <button className='search-bar-close-button' onClick={handleClose}><img src={close} alt='' className='search-bar-close-icon'></img></button>
            </div>
        </div>
    )
}
export default Search