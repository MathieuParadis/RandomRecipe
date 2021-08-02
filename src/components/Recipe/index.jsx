import React from 'react';
import './Recipe.css';

    const Recipe = () => {
      const [hasError, setErrors] = React.useState(false);
      const [recipe, setRecipe] = React.useState({});
    
      function fetchRecipe() {
        const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

        fetch(url,  {
          method: "GET",
        })
          .then((response) => response.json())
          .then(response => setRecipe(response.meals[0]))
          .catch(error => setErrors(error));
      }
    
      // React.useEffect(() => {
      //   fetchRecipe();
      // });
          
      return (
        <div className="Recipe">
          <button onClick={fetchRecipe} className="button mb-3">Suggest a recipe</button>

          { recipe.strMealThumb &&
            <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={recipe.strMealThumb}></img>
              <div className="card-body">
                <h3>{recipe.strMeal}</h3>
                <a href={recipe.strSource} target="blank">Tell me more</a>
              </div>
            </div>
          </div>
          }

          { hasError && 
            <p>Has error: {JSON.stringify(hasError)}</p>
          }

            

            



          

        </div>
      );
    };
  

export default Recipe;
