import {Navigate, Route, Routes} from 'react-router-dom'
import {BrowserRoutes} from '../browser/routes'
import {PlayerRoutes} from '../player/routes'

export const MusicRouter = () => {
    return (
            <Routes>
                <Route path='browse/*' element={<BrowserRoutes />} />
                <Route path='player/*' element={<PlayerRoutes />} />
                <Route path='*' element={<Navigate to='/browse' />} />
            </Routes>
    )
}
