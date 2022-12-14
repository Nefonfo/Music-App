import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

export const FullToggleImage = ({small = false, image, play, handleOnSmall}) => {

    const handleClick = () => {
        if(small){
            handleOnSmall && handleOnSmall()
        }
    }

    return (
            <motion.img
                layoutId='player-album-image'
                onClick={handleClick}
                src={image}
                alt="album-artist"
                className={`${small ? 'h-16 w-16 cursor-pointer': (play ? 'w-full md:w-11/12': 'w-10/12 md:w-10/12')} rounded-lg shrink-0`}
            />
    )
}

FullToggleImage.propTypes = {
    small: PropTypes.bool,
    image: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired,
    handleOnSmall: PropTypes.func
}