import { createSlice } from '@reduxjs/toolkit';

const playingMusicList = [
    {
        name: 'I Thought About Killing You',
        image: `${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`,
        author: 'Kanye West',
        explicit: true
    },
    {
        name: 'Una Soga',
        image: `${process.env.PUBLIC_URL}/images/albums_images/viva.jpg`,
        author: 'Viva Belgrado',
        explicit: true
    },
    {
        name: 'Industrial Baby',
        image: `${process.env.PUBLIC_URL}/images/albums_images/lil.jpg`,
        author: 'Lil Nas X',
        explicit: true
    }
]

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        playing: {
            play: true,
            trackItem: 0,
            song: playingMusicList[0]
        }
    },
    reducers: {
        playToggle: (state) => {
            state.playing.play = !state.playing.play
        },
        nextSong: (state) => {

            if(state.playing.trackItem + 1 === playingMusicList.length){
                state.playing.trackItem = 0
            } else {
                state.playing.trackItem++
            }
            state.playing.song = playingMusicList[state.playing.trackItem]
        },
        lastSong: (state) => {

            if (state.playing.trackItem === 0){
                state.playing.trackItem = playingMusicList.length - 1
            } else {
                state.playing.trackItem--
            }

            state.playing.song = playingMusicList[state.playing.trackItem]
        }
    }
});


// Action creators are generated for each case reducer function
export const { playToggle, nextSong, lastSong } = playerSlice.actions;