import './card.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-imgage-container">

            </div>
            <div className="card-news-container">
                <h3>{props.category}</h3>
                <h2>{props.news}</h2>
            </div>
        </div>
    )
}
export default Card