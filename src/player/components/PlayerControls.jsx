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
    const backExtraClasses = !handleBackClick ? 'text-white opacity-30': ''
    const nextExtraClasses = !handleNextClick ? 'text-white opacity-30': ''


    return (
        <div className="w-full flex flex-col gap-y-6 md:gap-y-10 mt-4">
            <div className="w-full flex justify-around items-center text-cupertino-label-dark text-5xl">
                <OutlineIconButton
                    handleClick={handleBackClick}
                    iconClass={`${backExtraClasses} fa-solid fa-backward`}
                    rippleColor={rippleColor}
                />
                <OutlineIconButton
                    handleClick={handlePlayClick}
                    iconClass={`fa-solid ${!playing ? 'fa-play' : 'fa-pause'}`}
                    rippleColor={rippleColor}
                />
                <OutlineIconButton
                    handleClick={handleNextClick}
                    iconClass={`${nextExtraClasses} fa-solid fa-forward`}
                    rippleColor={rippleColor}
                />
            </div>
            <div className="w-full flex justify-around items-center text-white opacity-90 text-2xl">
                <OutlineIconButton
                    handleClick={handleLyricsClick}
                    iconClass="fa-solid fa-message"
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
    handleBackClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handleLyricsClick: PropTypes.func.isRequired,
    handleListClick: PropTypes.func.isRequired
}
