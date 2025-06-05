import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getBuoys from "../../services/asyncThunk/getBuoys"
import LocationData from "../../types/LocationData.type"
import getLocationHistory from "../../services/asyncThunk/getLocationHistory"

interface MapState {
    locations: LocationData[]
    locationsHistory?: { latitude: number, longitude: number }[]
    filterDays: number
    loading: boolean
    error: string | null
}

const initialState: MapState = {
    locations: [],
    filterDays: 15,
    loading: true,
    error: null
}

const mapSlice = createSlice({
    name: 'maps',
    initialState,
    reducers: {
        clearHistory: (state) => {
            state.locationsHistory = []
        },
        setFilter15: (state) => {
            state.filterDays = 15
            state.locationsHistory = []
        },
        setFilter7: (state) => {
            state.filterDays = 7
            state.locationsHistory = []
        },
        setFilter3: (state) => {
            state.filterDays = 3
            state.locationsHistory = []
        },
        setFilter0: (state) => {
            state.filterDays = 0
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

export const { clearHistory, setFilter0, setFilter3, setFilter7, setFilter15 } = mapSlice.actions
export default mapSlice.reducer