import { useEffect } from "react";
import { useState } from "react";
import video from './fishing.mp4';
import Recipes from "./Recipes";

function RecipeSearch() {

    const MY_ID = "291ae361";
    const MY_KEY = "35d147f3476e2082319231c2cec8974d";

    const [mySearch, setMySearch] = useState("");
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("lemon");
  
    useEffect(() => {
      const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
        const data = await response.json();
        setMyRecipes(data.hits);
      }
      getRecipe()
    }, [wordSubmitted])


    const myRecipeSearch = (e) => {
        setMySearch(e.target.value)
      }
    
    const finalSearch = (e) => {
      e.preventDefault()
      setWordSubmitted(mySearch)
    }
  

    return (
      <div className="project">

        <div className="cont">
          <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
          </video>
        </div>


        <div className="contTwo">
            <form onSubmit={finalSearch}>
                <input className="searchBar" onChange={myRecipeSearch} value={mySearch} placeholder="Enter ingredient(s)..."></input>
                <button className="searchBtn">Search</button>
            </form>
        </div>

        <div className="allRecipes">
            {myRecipes.map((element, index) => (
                <Recipes key={index}
                label={element.recipe.label} 
                image={element.recipe.image} 
                calories={element.recipe.calories} 
                ingredients={element.recipe.ingredientLines}
                cuisine={element.recipe.cuisineType}
                type={element.recipe.dishType}
                link={element.recipe.url}
                portions={element.recipe.yield}/>
            ))}
        </div>
      </div>
    );
  }
  
  export default RecipeSearch;
  