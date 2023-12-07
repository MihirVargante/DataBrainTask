import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts ,fetchAllCategories,fetchProductsByCategory,fetchProductsByPage,fetchProductsBysearch} from './productAPI';

const initialState = {
  products: [],
  categories:[],
  status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllCategoriesAsync = createAsyncThunk(
  'product/fetchAllCategories',
  async () => {
    const response = await fetchAllCategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByCategoryAsync = createAsyncThunk(
  'product/fetchProductsByCategory',
  async (category) => {
    const response = await fetchProductsByCategory(category);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsByPageAsync = createAsyncThunk(
  'product/fetchProductsByPage',
  async (page) => {
    const response = await fetchProductsByPage(page);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchProductsBysearchAsync = createAsyncThunk(
  'product/fetchProductsBysearch',
  async (page) => {
    const response = await fetchProductsBysearch(page);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductsByCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByPageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByPageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsBysearchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsBysearchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const selectAllProducts= (state) => state.product.products;
export const selectAllCategories= (state) => state.product.categories;


export default productSlice.reducer;
