import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getBuoys from "../../services/asyncThunk/getBuoys"
import LocationData from "../../types/LocationData.type"

interface MapState {
    locations: LocationData[]
    loading: boolean
    error: string | null
}

const initialState: MapState = {
    locations: [],
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
            state.locations = action.payload
            state.loading = false
            state.error = null
        }),
        builder.addCase(getBuoys.rejected, (state) => {
            state.locations = []
            state.loading = false
            state.error = "Error fetching buoys"
        })
    }
})

// export const { } = mapSlice.actions
export default mapSlice.reducer