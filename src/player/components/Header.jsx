import Ripples from 'react-ripples'

import {HeaderTitle} from './HeaderTitle'

export const Header = ({title}) => {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-full flex justify-end px-2 text-cupertino-pink-400">
                    <h1 className='grow text-cupertino-label' style={{opacity: 0}}>Listen</h1>
                    <Ripples className='rounded-full' color='rgba(174, 174, 178, 0.5)'>
                        <div className='py-3 mx-3'>
                            <i className="fa-brands fa-chromecast fa-xl"></i>
                        </div>
                    </Ripples>
                    <Ripples className='rounded-full' color='rgba(174, 174, 178, 0.5)'>
                        <div className='py-3 mx-4'>
                            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
                        </div>
                    </Ripples>
                </div>
            </div>
            <HeaderTitle title={title} />
        </>
    )
}
