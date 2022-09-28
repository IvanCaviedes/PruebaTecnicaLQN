import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import starWarsService from '../services/starwarsService'

export const getCharacters = createAsyncThunk("starwars/getCharacters", async ({ }, thunkAPI) => {
    try {
        let response = await starWarsService.getCharacters()
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getSpeciesOrLocations = createAsyncThunk("starwars/getSpeciesOrLocations", async ({ type }, thunkAPI) => {
    try {
        let response = await starWarsService.getData(type)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getCharactersByid = createAsyncThunk("starwars/getCharactersByid", async ({ id }, thunkAPI) => {
    try {
        let response = await starWarsService.getCharactersByid(id)
        console.log(response.data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export interface CounterState {
    data: [];
    Character: [];
    isloading: boolean;
    error?: string
}

const initialState: CounterState = {
    data: [],
    Character: [],
    isloading: false,
    error: ''
}

const counterSlice = createSlice({
    name: 'starwars',
    initialState,
    extraReducers: {
        [getCharacters.fulfilled]: (state: any, action: PayloadAction<number>) => {
            state.data = action.payload;
        },
        [getCharacters.rejected]: (state: any, action: PayloadAction<number>) => {
            state.error = action.payload;
        },
        [getSpeciesOrLocations.fulfilled]: (state: any, action: PayloadAction<number>) => {
            state.data = action.payload;
        },
        [getSpeciesOrLocations.rejected]: (state: any, action: PayloadAction<number>) => {
            state.error = action.payload;
        },
        [getCharactersByid.fulfilled]: (state: any, action: PayloadAction<number>) => {
            state.Character = action.payload;
        },
        [getCharactersByid.rejected]: (state: any, action: PayloadAction<number>) => {
            state.error = action.payload;
        },
    },
    reducers: {}
})

// Action creators are generated for each case reducer function
export const { reducer } = counterSlice

export default reducer