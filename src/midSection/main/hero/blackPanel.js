import './blackPanel.css'

const BalckPanel = (props) => {
    return (
        <div className="blackPanel-container">
            <div className="blackPanel-image-container">

            </div>
            <div className="blackPanel-news-container">
                <h3>{props.catagori}</h3>
                <h2>{props.news}</h2>
            </div>
        </div>
    )
}
export default BalckPanel