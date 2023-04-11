import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';

type Sort = {
    name: string;
    sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price';
}
interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    pageCount: number;
    sort: Sort;
}

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSort(state, action:PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setPageCount(state, action:PayloadAction<number>) {
            state.pageCount = action.payload
        },
        setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue = action.payload
        }
    }
})


export const {
    setCategoryId,
    setSort,
    setPageCount,
    setSearchValue
} = filterSlice.actions;

export default filterSlice.reducer