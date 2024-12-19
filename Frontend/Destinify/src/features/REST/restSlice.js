import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../services/apiService";

// Async actions
export const fetchItems = createAsyncThunk('REST/fetchItems', async () => {
    const response = await apiService.get('/todo.json'); // Replace with your endpoint
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
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchItems.fulfilled, (state, action) => {
          state.items = action.payload;
        })
        .addCase(addItem.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })
        .addCase(deleteItem.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        });
    },
  });
  
  export default restSlice.reducer;


  