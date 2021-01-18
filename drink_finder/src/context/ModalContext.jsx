import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idRecipe, setIdRecipe] = useState(null);
    const [infoRecipe, setRecipe] = useState({})


    useEffect(()=>{
        const getRecipe = async()=>{
            if(!idRecipe) return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

            const result = await axios.get(url);

            setRecipe(result.data.drinks[0]);
        }
        getRecipe();
    },[idRecipe]);


    return ( 
        <ModalContext.Provider
            value={{
                infoRecipe,
                setIdRecipe,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;