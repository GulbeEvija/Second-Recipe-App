import { Link } from 'react-router-dom';

function Recipes({label, image, cuisine, type, portions}) {

    return (
        <div className="recipe">
            <div>
                <Link to={`/RecipeSearch/${label}`}>
                    <h2>{label}</h2>
                </Link>
            </div>

            <div className="labels">
                <p className="info">{cuisine}</p>
                <p className="info">{type}</p>
                <p className="info">{portions} portions</p>

            </div>

            <div>
                <img className="image" src={image} alt="Recipe" />
            </div>
        </div>
    )
}

export default Recipes;