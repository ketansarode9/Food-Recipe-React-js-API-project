import Axios from "axios";
import React , {useState , useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';

function App() {

  const APP_ID = ''; // put your api id
  const  APP_KEY = ''	; // put your api key
  const [search, setSerach] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const onInputChange = e => {
    setSerach(e.target.value);
  };
  const onSearchClick = ()=>{
    getRecipes();
  };
    return (
      
      <div style={{backgroundImage: `url("https://previews.123rf.com/images/kesu87/kesu871907/kesu87190700007/127038773-asian-food-background-with-various-ingredients-on-rustic-wooden-table-top-view-.jpg")` , backgroundRepeat: 'no-repeat',
      width: '100%' , height: '100%' ,  backgroundSize: 'cover'}} >
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      
          <div className="container">
            <Recipes recipes={recipes} />
          </div>
    
    </div>
  );
}

export default App;
