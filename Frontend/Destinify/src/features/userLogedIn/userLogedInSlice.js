import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/apiService";


// Actions
export const loginCall = createAsyncThunk('userLogedIn/loginCall', async ({url,item}) => {
    const response = await apiService.post(`/${url}`, item);
    console.log(response.data.user)
    return response.data;
  });

export const logoutCall = createAsyncThunk('userLogedIn/logoutCall', async () => {
    return;
});

export const signUpCall = createAsyncThunk('userLogedIn/signUpCall', async ({url,item}) => {
    const response = await apiService.post(`/${url}`, item);
    debugger;
    console.log(response.data.user)
    return response.data;
  });
// Slice

const userSlice = createSlice({
    name: 'userSlice',
    initialState : {
        user: {},
        status: false,
        signUpStatus: false,
        loading: false
    },
    reducers: {
        // logedIn : (state,action) => {
        //     state.user = action.payload.user,
        //     state.status = true
        // },
        // logedOut : (state) => {
        //     state.user = null,
        //     state.status = false
        // }

    },
    extraReducers : (builder) => {
        builder.addCase(loginCall.fulfilled, (state,action) => {
            state.user = action.payload.user,
            state.status = true
            state.loading = false
        })
        .addCase(loginCall.pending, (state) => {
            
            state.loading = true;
        })
        .addCase(loginCall.rejected, (state) => {
            state.loading = false;
        })
        .addCase(logoutCall.fulfilled, (state) => {
            state.user = {}; // Reset user state
            state.status = false; // Reset status
            state.loading = false
        })
        .addCase(signUpCall.fulfilled, (state) => {
            state.signUpStatus = true;
            state.loading = false
        })
        .addCase(signUpCall.pending, (state) => {
            state.loading = true
        })
        .addCase(signUpCall.rejected, (state) => {
            state.loading = false;
        });
    }
})

export default userSlice.reducer;