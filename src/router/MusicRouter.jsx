import {Navigate, Route, Routes} from 'react-router-dom'
import {PlayerRouter} from '../player/routes'

export const MusicRouter = () => {
    return (
        <Routes>
            <Route path='browse/*' element={<PlayerRouter />} />
            <Route path='*' element={<Navigate to='/browse' />} />
        </Routes>
    )
}
