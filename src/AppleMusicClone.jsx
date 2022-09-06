import {Navigate, Route, Routes} from 'react-router-dom'
import {
    CollectionPage,
    ExplorePage,
    ListenPage,
    RadioPage,
    SearchPage
} from './player/pages'
import {MusicRouter} from './router'

export const AppleMusicClone = () => {
    return (
        <MusicRouter />
    )
}
