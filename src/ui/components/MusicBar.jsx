import {useNavigate} from 'react-router-dom'

import {OutlineIconButton} from './OutlineIconButton'

export const MusicBar = () => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate('/player')}
            className="flex items-center px-3 py-2 border-t-1 border-cupertino-system-grey-200 cursor-pointer"
        >
            <img
                className='w-12 rounded-md'
                src={`${process.env.PUBLIC_URL}/images/albums_images/ye.jpg`}
                alt="Ye"
            />
            <h3 className='grow px-2 truncate'>I Thought About Killing You</h3>
            <OutlineIconButton iconClass='fa-solid fa-play' innerExtraClass='p-2' rippleColor='rgba(174, 174, 178, 0.5)' />
            <OutlineIconButton iconClass='fa-solid fa-forward' innerExtraClass='p-2' rippleColor='rgba(174, 174, 178, 0.5)' />
        </div>
    )
}
