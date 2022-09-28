import { createSlice } from '@reduxjs/toolkit';
import {playingMusicList} from './fixtures/queue'



export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        queue: {
            historical: [],
            current: playingMusicList,
        },
        play: true,

    },
    reducers: {
        playToggle: (state) => {
            state.play = !state.play
        },
        nextSong: (state, action) => {
            if(state.queue.current.length > 1){
                state.queue.historical.push(state.queue.current.shift())
                state.play = true
            }
        },
        lastSong: (state, action) => {
            if(state.queue.historical.length >= 1){
                state.queue.current.unshift(state.queue.historical.pop())
                state.play = true
            }
        },
        reorderQueue: (state, action) => {
            state.queue.current = action.payload
        },
        deleteSongFromQueue: (state, action) => {
            state.queue.current = state.queue.current.filter((song) => song.id !== action.payload)
        }
    }
});


// Action creators are generated for each case reducer function
export const { playToggle, nextSong, lastSong, reorderQueue, deleteSongFromQueue } = playerSlice.actions;