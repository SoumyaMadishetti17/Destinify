import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/apiService";

// Async actions
export const fetchItems = createAsyncThunk('REST/fetchItems', async ({url}) => {
    const response = await apiService.get(url); // Replace with your endpoint
    return response.data;
  });
  
  export const addItem = createAsyncThunk('REST/addItem', async ({url,item}) => {
    const response = await apiService.post(`/${url}`, item);
    return response.data;
  });
  
  export const deleteItem = createAsyncThunk('REST/deleteItem', async (id) => {
    await apiService.delete(`/items/${id}`);
    return id;
  });
  
  // Slice
  const restSlice = createSlice({
    name: 'example',
    initialState: {
      items: [],
      status: 'idle',
      loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchItems.pending,(state)=>{
        state.loading = true
      })
        .addCase(fetchItems.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false
        })
        .addCase(fetchItems.rejected,(state)=>{
          state.loading = false
        })
        .addCase(addItem.pending,(state)=>{
          state.loading = true
        })
        .addCase(addItem.fulfilled, (state, action) => {
          state.items.push(action.payload);
          state.loading=false
        })
        .addCase(addItem.rejected,(state)=>{
          state.loading = false
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        });
    },
  });
  
  export default restSlice.reducer;


  