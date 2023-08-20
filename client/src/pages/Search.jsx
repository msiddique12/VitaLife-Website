import React, { useState, useEffect } from 'react';
import { Recipe } from '../components';
import axios from 'axios'


const Search = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const getRecipes = async () => {
    const response = await axios.get(
      `http://localhost:3000/recipes/${query}`
    )
    //console.log(response.data)
    setRecipes(response.data)
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
 

  return (
    <div className='bg-[C23373] h-screen mt-20'>
      <form onSubmit={getSearch} className="search-form min-h-[10vh] flex justify-center items-center">
        <input className='search-bar w-1/2 border-none p-5 mt-5' type='text' value={search} onChange={e => setSearch(e.target.value)}/>
        <button className='search-button bg-[#FFBA86] border-none p-5 space-x-20 text-white mt-5' type='submit'>Search</button>
      </form>
      <div className='flex justify-around flex-wrap'>
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.title}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
