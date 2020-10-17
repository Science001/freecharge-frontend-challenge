import axios from 'axios';

export const setRecipes = (recipes) => ({
    type: "SET_RECIPES",
    payload: recipes,
})

export const selectRecipe = (recipe) => ({
    type: "SELECT_RECIPE",
    payload: recipe,
})

export const getRecipes = () => {
    return (dispatch) => {
        axios.get('http://starlord.hackerearth.com/recipe')
            .then(res => dispatch(setRecipes(res.data)))
            .catch(console.error)
    }
}