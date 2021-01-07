import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Button } from 'react-materialize';
import './styles.css';
import comida_1 from '../../assets/imgs/comida_1.svg'
import comida_2 from '../../assets/imgs/comida_2.svg'
import comida_3 from '../../assets/imgs/comida_3.svg'
import comida_4 from '../../assets/imgs/comida_4.svg'

function Recipes() {

   let recipes = [
      {
         id: 1,
         name: "Broccoli Saladwith Bacon",
         img: comida_1
      },
      {
         id: 2,
         name: "Classic Beef Burgers",
         img: comida_2
      },
      {
         id: 3,
         name: "Classic Potato Salad",
         img: comida_3
      },
      {
         id: 4,
         name: "Cherry Cobbleron the Grill",
         img: comida_4
      },
   ]

   return (
      <div className="recipes">
         <h2>Our Best Recipes</h2>
         <p>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts
         </p>
         <div className="RecipesContainer">
            <div className="row center-align">

               {recipes.map(recipe => {
                  return (

                     <div key={recipe.id} className="col s12 m6 l6 content">
                        <img src={recipe.img} alt={recipe.name} />
                        <div className="recipesDesc">
                           <p>{recipe.name}</p>
                           <Button
                              node="a"
                              waves="light"
                           >
                              See Recipe
                           </Button>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>

   );
}

export default Recipes;