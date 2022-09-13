import {MenuLayout} from './MenuLayout'
import {MusicBar} from './'
import {usePlayerStore} from '../../hooks'

export const Navbar = () => {

    const { playingNow, play, playMusic, nextMusic, nextItemExists} = usePlayerStore()
    const { name, explicit, album} = playingNow || {}

    return (
        <div
            className="w-full fixed bottom-0"
        >

            {playingNow ?
                <MusicBar
                    explicit={explicit}
                    image={album.image}
                    name={name}
                    isPlaying={play}
                    playMusic={playMusic}
                    nextMusic={nextMusic}
                    nextItemExists={nextItemExists}
                />
                : null
            }
            <MenuLayout />
        </div>
    )
}
