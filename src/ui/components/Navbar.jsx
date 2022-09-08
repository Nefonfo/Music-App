import {MenuLayout} from './MenuLayout'
import {MusicBar} from './'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'

export const Navbar = () => {

    const { playing } = usePlayerStore()

    return (
        <div className="w-full fixed bottom-0">
            {playing ? <MusicBar /> : null}
            <MenuLayout />
        </div>
    )
}
