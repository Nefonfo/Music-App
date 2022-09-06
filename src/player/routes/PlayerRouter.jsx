import {Navigate, Route, Routes} from 'react-router-dom'
import {CollectionPage, ExplorePage, ListenPage, RadioPage, SearchPage} from '../pages'
import {ClassicLayout} from '../../ui/layout'

export const PlayerRouter = () => {
    return (
        <ClassicLayout>
            <Routes>
                <Route path='listen' element={<ListenPage />} />
                <Route path='explore' element={<ExplorePage />} />
                <Route path='radio' element={<RadioPage />} />
                <Route path='collection' element={<CollectionPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='*' element={<Navigate to='/browse/listen' />} />
            </Routes>
        </ClassicLayout>
    )
}
