import { createSlice } from '@reduxjs/toolkit';

const playingMusicList = [
    {
        id: 1,
        name: 'HUMBLE.',
        author: 'Kendrick Lamar',
        explicit: true,
        album: {
            id: 1,
            image: `${process.env.PUBLIC_URL}/images/albums_images/kendrick.jpg`,
            name: 'DAMN.',
            author: 'Kendrick Lamar',
            explicit: true
        }
    },
    {
        id: 2,
        name: 'I Thought About Killing You',
        author: 'Kanye West',
        explicit: true,
        album: {
            id: 2,
            image: `${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`,
            name: 'Ye',
            author: 'Kanye West',
            explicit: true
        }
    },
    {
        id: 3,
        name: 'Una Soga',
        author: 'Viva Belgrado',
        explicit: true,
        album: {
            id: 3,
            image: `${process.env.PUBLIC_URL}/images/albums_images/viva.jpg`,
            name: 'Bellavista',
            author: 'Viva Belgrado',
            explicit: true
        }
    },
    {
        id: 4,
        name: 'Industrial Baby',
        author: 'Lil Nas X',
        explicit: true,
        album: {
            id: 4,
            image: `${process.env.PUBLIC_URL}/images/albums_images/lil.jpg`,
            name: 'Montero',
            author: 'Lil Nas X',
            explicit: true
        }
    },
    {
        id: 5,
        name: 'Santeria',
        author: 'Pusha T',
        explicit: true,
        album: {
            id: 5,
            image: `${process.env.PUBLIC_URL}/images/albums_images/pusha.jpg`,
            name: 'DAYTONA',
            author: 'Pusha T',
            explicit: true
        }
    },
]

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        queue: {
            current: playingMusicList,
            actualItem: 0,
            nextItemExists: true,
            lastItemExists: false
        },
        playing: {
            play: true,
            song: playingMusicList[0]
        }
    },
    reducers: {
        playToggle: (state) => {
            state.playing.play = !state.playing.play
        },
        updatePlayer: (state) => {
            state.queue.nextItemExists = state.queue.actualItem < state.queue.current.length - 1
            state.queue.lastItemExists = (state.queue.actualItem > 0) && (state.queue.current.length > 1)
            state.playing.play = true
            state.playing.song = state.queue.current[state.queue.actualItem]
        },
        nextSong: (state, action) => {
            if(state.queue.nextItemExists) {
                state.queue.actualItem++
                console.log('entro')
                playerSlice.caseReducers.updatePlayer(state, action)
            }
        },
        lastSong: (state, action) => {
            if(state.queue.lastItemExists) {
                state.queue.actualItem--
                playerSlice.caseReducers.updatePlayer(state, action)
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { playToggle, nextSong, lastSong } = playerSlice.actions;