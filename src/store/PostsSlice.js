import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {},
    reducers: {
        postUser: async (state, action) => {
            const user = action.payload;
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }
            await fetch('https://jsonplaceholder.typicode.com/users', options)
        }
    }
})
export const { postUser } = postSlice.actions;
export default postSlice.reducer;
