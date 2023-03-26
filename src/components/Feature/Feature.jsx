import "./feature.scss"

/**
 * Display the feature component
 * @param { string } image - path of the image
 * @param { string } description - description of alt attribute
 * @param { string } title - title of the feature 
 * @param { string } text - content text of the feature
 * @returns { JSX } component React
 */
const Feature = ({image, description, title, text }) => {
    return (
        <div className="feature-item">
            <img 
                src={ image }
                alt={ description } 
                className="feature-icon" 
            />
            <h3 className="feature-item-title">{ title }</h3>
            <p>
                { text }
            </p>
        </div>
    )
}

export default Feature;