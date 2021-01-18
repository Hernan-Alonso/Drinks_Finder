import React, {useContext, useState} from 'react';
import {CategoryContext} from '../context/CategoryContext';
import {RecipesContext} from '../context/RecipesContext';

const presetValues = {
    name: '',
    category: ''
}

const Form = () => {
    const [search, setSearch] = useState(presetValues);
    const {categories} = useContext(CategoryContext);
    const {setRecipe, setQuery} = useContext(RecipesContext);

    const handleInputChange = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <form className="col-12" onSubmit={e=>{
            e.preventDefault();
            setRecipe(search);
            setQuery(true)
        }}>
            <fieldset className="text-center">
                <legend>Search by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input name="name" className="form-control" type="text" placeholder ="Search by ingredient" onChange={handleInputChange}/>
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="category" onChange={handleInputChange}>
                        <option value="">-- Select category</option>
                        {categories.map(category =>(
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-primary btn-block" value="Go Find!"/>
                </div>
            </div>
        </form>
    );
}
 
export default Form;