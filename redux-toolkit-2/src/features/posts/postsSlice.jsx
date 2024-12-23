import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'I"ve heard good things'},
    {id: '2', title: 'Slices ....', content: 'The more I say slice, the more I want pizza'}
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

// if the shape of the state ever changes we wont have to change it in all files that reference it
// we only change it here in the slice
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer