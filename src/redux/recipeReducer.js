const initialState = {
    recipes: [],
    isRequestingRecipes: true,
    selectedRecipe: null,
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return { ...state, recipes: action.payload, isRequestingRecipes: false }
        case "SELECT_RECIPE":
            return { ...state, selectedRecipe: action.payload }
        default:
            return state;
    }
}

export default recipeReducer;