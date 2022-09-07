import {Navigate, Route, Routes} from 'react-router-dom'
import {PlayerPage} from '../pages/PlayerPage'

export const PlayerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PlayerPage />} />
            <Route path='*' element={<Navigate to='/player' />} />
        </Routes>
    )
}
