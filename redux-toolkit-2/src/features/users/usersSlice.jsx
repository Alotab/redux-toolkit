import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '0', name: 'Dude Lubrisky'},
    {id: '1', name: 'Niel Amstrong'},
    {id: '2', name: 'Dave Banana'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export const selectAllUsers = (state) => state.users;

export default userSlice.reducer