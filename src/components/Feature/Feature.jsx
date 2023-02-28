import "./feature.scss"
import photo from "../../assets/icon-chat.png"
const Feature = ({image, description, title, text }) => {
    return (
        <div className="feature-item">
            <img 
                src={image}
                alt={description} 
                className="feature-icon" 
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Feature;