import {OutlineIconButton} from '../../ui/components'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'

export const PlayerControls = ({playAction}) => {

    const rippleColor = 'rgba(174, 174, 178, 0.5)'
    const {playMusic, nextMusic, lastMusic, playing} = usePlayerStore()
    const {play} = playing

    return (
        <>
            <div className='w-full flex justify-around items-center text-white text-5xl my-8'>
                <OutlineIconButton handleClick={lastMusic} iconClass='fa-solid fa-backward' rippleColor={rippleColor} />
                <OutlineIconButton handleClick={playMusic} iconClass={`fa-solid ${!play ? 'fa-play': 'fa-pause'}`} rippleColor={rippleColor} />
                <OutlineIconButton handleClick={nextMusic} iconClass='fa-solid fa-forward' rippleColor={rippleColor} />
            </div>
            <div className='w-full flex justify-around items-center text-white opacity-90 text-2xl'>
                <OutlineIconButton iconClass='fa-solid fa-message text-white opacity-40' rippleColor={rippleColor} />
                <OutlineIconButton iconClass='fa-brands fa-chromecast' rippleColor={rippleColor} />
                <OutlineIconButton iconClass='fa-solid fa-list' rippleColor={rippleColor} />
            </div>
        </>
    )
}
