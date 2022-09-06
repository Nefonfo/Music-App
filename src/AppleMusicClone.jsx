import {Navbar} from './player/components/Navbar'
import {Route, Routes} from 'react-router-dom'
import {ListenPage} from './player/pages/ListenPage'
import {ExplorePage} from './player/pages/ExplorePage'
import {RadioPage} from './player/pages/RadioPage'
import {CollectionPage} from './player/pages/CollectionPage'
import {SearchPage} from './player/pages/SearchPage'

export const AppleMusicClone = () => {
    return (
        <main className="w-full flex flex-col">
            <section className='flex flex-wrap'>
                <Routes>
                    <Route path='/' element={<ListenPage />} />
                    <Route path='/explore' element={<ExplorePage />} />
                    <Route path='/radio' element={<RadioPage />} />
                    <Route path='/collection' element={<CollectionPage />} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </section>
            <Navbar />
        </main>
    )
}
