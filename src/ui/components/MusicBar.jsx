import {useNavigate} from 'react-router-dom'

import {OutlineIconButton} from './OutlineIconButton'
import {usePlayerStore} from '../../hooks/store/usePlayerStore'

export const MusicBar = () => {

    const navigate = useNavigate()
    const { playing, playMusic, nextMusic } = usePlayerStore()
    const {play, song} = playing
    const {name, explicit, image} = song

    return (
        <div
            onClick={() => navigate('/player')}
            className="flex items-center px-3 py-2 border-t-1 bg-white dark:bg-cupertino-basic-background-darkalt dark:border-t-0 border-cupertino-system-grey-200 cursor-pointer text-cupertino-label dark:text-cupertino-label-dark transition-all duration-300 ease-in-out"
        >
            <img
                className='w-12 rounded-md'
                src={image}
                alt="Ye"
            />
            <h3 className='grow px-2 truncate'>
                {name}
                {explicit && <i className="ml-2 fa-solid fa-exclamation-circle fa-lg text-cupertino-label dark:text-cupertino-label-dark opacity-70"></i>}
            </h3>
            <OutlineIconButton handleClick={playMusic} iconClass={`fa-solid ${!play ? 'fa-play': 'fa-pause'}`} innerExtraClass='p-2' rippleColor='rgba(174, 174, 178, 0.5)' />
            <OutlineIconButton handleClick={nextMusic} iconClass='fa-solid fa-forward' innerExtraClass='p-2' rippleColor='rgba(174, 174, 178, 0.5)' />
        </div>
    )
}