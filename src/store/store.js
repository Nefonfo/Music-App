import {configureStore} from '@reduxjs/toolkit'
import {playerSlice} from './player/playerSlice'

export const store = configureStore({
    reducer: {
        player: playerSlice.reducer
    }
})
