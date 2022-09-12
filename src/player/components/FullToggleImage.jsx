import PropTypes from 'prop-types'
import {AnimatePresence, motion} from 'framer-motion'
import CrossfadeImage from 'react-crossfade-image'

export const FullToggleImage = ({lyricsImage = false, image, play, handleOnLyricsMode}) => {

    const variants={
        play: {
            scale: 1,
            height: '100%',
            width: '100%',
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.35,
                delay: 0.05,
            },
        },
        pause: {
            scale: 0.73,
            height: '100%',
            width: '100%',
            transition: {
                type: "spring",
                duration: 0.7,
                bounce: 0,
                delay: 0.05,
            },
        },
        lyrics: {
            scale: 1,
            height: '4rem',
            width: '4rem',
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0,
                delay: 0.05,
            }
        }
    }

    const handleClick = () => {
        if(lyricsImage){
            handleOnLyricsMode()
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                layoutId='music-player-album'
                onClick={handleClick}
                initial={'play'}
                animate={ !lyricsImage ? (play ? 'play': 'pause'): 'lyrics'}
                variants={variants}
                className={`rounded-lg shrink-0`}
            >
                <CrossfadeImage
                    style={{borderRadius: '0.375rem'}}
                    src={image}
                    duration={1000}
                    timingFunction={"ease-out"}
                    alt="album-artist"
                />
            </motion.div>
        </AnimatePresence>
    )
}

FullToggleImage.propTypes = {
    lyricsImage: PropTypes.bool,
    image: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired
}