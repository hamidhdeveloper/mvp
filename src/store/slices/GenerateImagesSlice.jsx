import {createSlice, createAction} from '@reduxjs/toolkit'

const gerenatedImagesSlice = createSlice({
    name: 'images',
    initialState:[],
    reducers:{
        geneatedImages(state,action){
          state.push(action.payload)
        //   console.log('the action'+action.payload)
        },
        selectedFrameImage(state,action){
          state.push(action.payload)
        },

    }
})
// console.log(gerenatedImagesSlice.actions)

export default gerenatedImagesSlice.reducer
export const {geneatedImages,selectedFrameImage} = gerenatedImagesSlice.actions