import { createSlice } from "@reduxjs/toolkit";

export const CollectionSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [
            { recipeName: 'Hot Water', rating: 3, steps:[ 
                {mainStep: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        ]},           
            { recipeName: 'Hot Water', rating: 3, steps:[ 
                {mainStep: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        ]},           
            { recipeName: 'Hot Water', rating: 3, steps:[ 
                {mainStep: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        ]},           
            { recipeName: 'Hot Water', rating: 3, steps:[ 
                {mainStep: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        ]},           
            { recipeName: 'Hot Water', rating: 3, steps:[ 
                {mainStep: 'Add Hot Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add Cold Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
                {mainStep: 'Add normal Water', instructions: ['see that the water is luke warm', 'see that the water is mineral water']},
        ]},        
          
        ]
    },
    reducers: {}
})

export default CollectionSlice.reducer

