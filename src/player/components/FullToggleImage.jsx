import PropTypes from 'prop-types'
import {AnimatePresence, motion} from 'framer-motion'

export const FullToggleImage = ({small = false, image, play, handleOnSmall}) => {

    const handleClick = () => {
        if(small){
            handleOnSmall && handleOnSmall()
        }
    }

    return (
            <AnimatePresence>
                <motion.div
                    layoutId='player-album-image'
                    onClick={handleClick}
                    className={`${small ? 'h-16 w-16 cursor-pointer': (play ? 'w-full md:w-11/12': 'w-10/12 md:w-10/12')} rounded-lg shrink-0`}
                >
                    <img
                        style={{borderRadius: '0.375rem'}}
                        src={image}
                        alt="album-artist"
                    />
                </motion.div>
            </AnimatePresence>
    )
}

FullToggleImage.propTypes = {
    small: PropTypes.bool,
    image: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired,
    handleOnSmall: PropTypes.func
}