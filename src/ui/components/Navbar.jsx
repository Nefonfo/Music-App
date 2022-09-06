import {MenuLayout} from './MenuLayout'
import {MusicBar} from './'

export const Navbar = () => {

    return (
        <div className="w-full fixed bottom-0">
            <MusicBar />
            <MenuLayout />
        </div>
    )
}
