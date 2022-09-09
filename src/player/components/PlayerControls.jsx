import PropTypes from 'prop-types'

import {OutlineIconButton} from '../../ui/components'

export const PlayerControls = ({
                                   playing,
                                   handlePlayClick,
                                   handleBackClick,
                                   handleNextClick,
                                   handleLyricsClick,
                                   handleListClick
                               }) => {

    const rippleColor = 'rgba(174, 174, 178, 0.5)'


    return (
        <div className="w-full flex flex-col gap-y-6 md:gap-y-10">
            <div className="w-full flex justify-around items-center text-white text-4xl md:text-5xl">
                <OutlineIconButton
                    handleClick={handleBackClick}
                    iconClass="fa-solid fa-backward"
                    rippleColor={rippleColor}
                />
                <OutlineIconButton
                    handleClick={handlePlayClick}
                    iconClass={`fa-solid ${!playing ? 'fa-play' : 'fa-pause'}`}
                    rippleColor={rippleColor}
                />
                <OutlineIconButton
                    handleClick={handleNextClick}
                    iconClass="fa-solid fa-forward"
                    rippleColor={rippleColor}
                />
            </div>
            <div className="w-full flex justify-around items-center text-white opacity-90 text-xl md:text-2xl">
                <OutlineIconButton
                    handleClick={handleLyricsClick}
                    iconClass="fa-solid fa-message text-white opacity-40"
                    rippleColor={rippleColor}
                />

                <OutlineIconButton
                    handleClick={handleListClick}
                    iconClass="fa-solid fa-list"
                    rippleColor={rippleColor}
                />
            </div>
        </div>
    )
}

PlayerControls.propTypes = {
    playing: PropTypes.bool.isRequired,
    handlePlayClick: PropTypes.func.isRequired,
    handleBackClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
    handleLyricsClick: PropTypes.func.isRequired,
    handleListClick: PropTypes.func.isRequired
}
