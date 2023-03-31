import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../http-common";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post('/user/login', {
            email: user.email,
            password: user.password
        });
        localStorage.setItem('user', JSON.stringify(response));
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


export const findNotesByTitle = createAsyncThunk(
    "user/findByTitle",
    async ({ title }) => {
      const res = await axios.get(`/notes/find-all-notes?title=${title}`);
      return res.data;
    }
  );

export const LogOut = createAsyncThunk("user/LogOut", async() => {
    await axios.delete('/user/logout');
    localStorage.removeItem('user');
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginUser.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Get User Login
        

        builder.addCase(findNotesByTitle.fulfilled, (state, action) => {
            state.isSuccess = action.payload;
          });
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;