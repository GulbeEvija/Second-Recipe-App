// import { useNavigate, useParams } from "react-router-dom";

// function EachRecipe({label, image, calories, ingredients, cuisine, type, link, portions}) {

// const navigate = useNavigate();
// const { label } = useParams();

//   return (
//       <div className="recipe">
//           <div>
//               <h2>{label}</h2>
//           </div>

//           <div className="labels">
//               <p className="info">{cuisine}</p>
//               <p className="info">{type}</p>
//               <p className="info">{portions} portions</p>
//               <p className="info">{calories.toFixed()} calories</p>
//           </div>

//           <div>
//               <img className="image" src={image} alt="Recipe" />
//           </div>

//       <div>
//           <h3>Ingredients:</h3>
//       </div>

//           <div className="ingredientCont">
//               <ul>
//                   {ingredients.map((ingredient, index) => (
//                       <li key={index}>
//                       {ingredient}</li>
//                   ))}
//               </ul>
//               <p className="linkMore">Full recipe <a href={link} target="_blank" rel="noreferrer" className="moviePlot">HERE</a></p>
//           </div>

//           <button onClick={() => navigate(-1)}>
//             Go Back
//           </button>
//       </div>
//   )
// }

// export default EachRecipe;