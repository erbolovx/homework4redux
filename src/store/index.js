// import { configureStore } from "@reduxjs/toolkit";
// import postsSlice from './PostsSlice'
//
// export const store = configureStore({
//     reducer:{
//         postsSlice
//     },
// })

import {configureStore} from "@reduxjs/toolkit";
import postSlice from './PostsSlice'

export const store=configureStore({
    reducer:{
        postSlice
    },
})