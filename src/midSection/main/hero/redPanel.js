import './redPanel.css'


const RedPanel = (props) => {

    return (
        <div className="redPanel-container">
            <div className="redPanel-image-container">

            </div>
            <div className="redPanel-news-container">
                <h2>{props.story}</h2>
                <h1>{props.news}</h1>
            </div>
        </div>
    )
}
export default RedPanel