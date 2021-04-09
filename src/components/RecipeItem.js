  
import React from "react";
import './Recipe.css';
const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
      <div >
        <div class="card py-2 text-center" >
                <div style={{ backgroundColor: "black"}}>
                    <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
                    <div class="card-body" style={{color: "white"}}>
                    <h5>{name}</h5>
                    </div>
                </div>
                
                    <ul class="list-group list-group-flush"  >
                    {ingredientLines.map(ingredient => (
                        <li style={{ backgroundColor: "PaleGoldenRod"}} className="list-group-item">{ingredient}</li>
                    ))}
                    </ul>
            
        </div>
      </div>
  );
};

export default RecipeItem;