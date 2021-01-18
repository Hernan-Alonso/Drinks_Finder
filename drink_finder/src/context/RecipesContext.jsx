import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

const presetValues={
    name: '',
    category: ''
}
export const RecipesContext = createContext();

const RecipesProvider = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState(presetValues);
    const [query, setQuery] = useState(false);

    const {name, category} = recipe;

    useEffect(()=>{
        if(query){
            const getRecipes = async()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const result = await axios.get(url);

                setRecipes(result.data.drinks);
            }
            getRecipes();
        }
        
    },[category, name, query, recipe])

    return ( 
        <RecipesContext.Provider
            value={{
                setRecipe,
                setQuery,
                recipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
     );
}
 
export default RecipesProvider;