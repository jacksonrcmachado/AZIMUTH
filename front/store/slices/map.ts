import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getBuoys from "../../services/asyncThunk/getBuoys"
import LocationData from "../../types/LocationData.type"
import getLocationHistory from "../../services/asyncThunk/getLocationHistory"

interface MapState {
    locations: LocationData[]
    locationsHistory?: { latitude: number, longitude: number }[]
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
        clearHistory: (state) => {
            state.locationsHistory = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBuoys.pending, (state) => {
            state.loading = true
            state.error = null
        }),
        builder.addCase(getBuoys.fulfilled, (state, action: PayloadAction<LocationData[]>) => {
            state.locations = action.payload
            state.loading = false
            state.error = null
        }),
        builder.addCase(getBuoys.rejected, (state) => {
            state.locations = []
            state.loading = false
            state.error = "Error fetching buoys"
        }),
        builder.addCase(getLocationHistory.fulfilled, (state, action: PayloadAction<{latitude: number, longitude: number}[]>) => {
            state.locationsHistory = action.payload
            state.loading = false
            state.error = null
        })
        builder.addCase(getLocationHistory.rejected, (state) => {
            state.locationsHistory = []
            state.loading = false
            state.error = "Error fetching location history"
        })
    }
})

export const { clearHistory } = mapSlice.actions
export default mapSlice.reducer