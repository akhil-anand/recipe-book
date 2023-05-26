import { createSlice } from "@reduxjs/toolkit";

export const CollectionSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [
        //     { recipeName: 'Hot Water', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},           
        //     { recipeName: 'Hot Water', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},           
        //     { recipeName: 'Hot Water', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},           
        //     { recipeName: 'Hot Water', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},           
        //     { recipeName: 'Hot Water', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},        
        //     { recipeName: 'Hot Water 1', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},        
        //     { recipeName: 'Hot Water 2', rating: 3, steps:[ 
        //         {stepName: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        //         {stepName: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        // ]},        
          
        ]
    },
    reducers: {
        SET_RECIPE_LIST: (state, action) => {
            const newState = {
                ...state,
                collections: action.payload
            }
            return newState;
        }
    }
})

export const { SET_RECIPE_LIST } = CollectionSlice.actions

export default CollectionSlice.reducer

