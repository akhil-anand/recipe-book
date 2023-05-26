import axios from "axios"
import { store } from "../Store/store"
import { SET_RECIPE_LIST } from "../Store/collections/collections"

export const getAllExistingRecipes = () => {
    return axios.get('https://drab-cyan-jellyfish-wrap.cyclic.app/api/allRecipes')
        .then((response) => {
            if (response.status === 200) {
                store.dispatch(SET_RECIPE_LIST(response.data.reverse()))
            }
        })
        .catch(error => console.log(`Error retrieving data: ${error}`))
}