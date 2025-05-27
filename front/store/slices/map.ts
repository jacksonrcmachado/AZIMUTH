import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getBuoys from "../../services/asyncThunk/getBuoys"
import BuoyProps from "../../types/BuoyProps.type"

interface MapState {
    buoys: BuoyProps[]
    loading: boolean
    error: string | null
}

const initialState: MapState = {
    buoys: [],
    loading: true,
    error: null
}

const mapSlice = createSlice({
    name: 'maps',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBuoys.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(getBuoys.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.buoys = action.payload
            state.loading = false
            state.error = null
        }),
        builder.addCase(getBuoys.rejected, (state) => {
            state.buoys = []
            state.loading = false
            state.error = "Error fetching buoys"
        })
    }
})

// export const { } = mapSlice.actions
export default mapSlice.reducer