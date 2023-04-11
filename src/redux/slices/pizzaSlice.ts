import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import { CartItem } from './cartSlice';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const {category, title, currentPage, sortType} = params;
    const {data} = await axios.get(`https://640f2555cde47f68db42ee23.mockapi.io/items?page=${currentPage}&limit=4&title=${title}&category=${category}&sortBy=${sortType}&order=desc&`);
    return data;
  }
)

type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
}

interface PizzaSliceState {
  items: Pizza[];
  status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading', //loading, success, error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
      setItems(state, action) {
          state.items = action.payload;
      },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },

    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    }
  }
})


export const {
  setItems
} = pizzaSlice.actions;

export default pizzaSlice.reducer