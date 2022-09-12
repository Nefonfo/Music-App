import {motion} from 'framer-motion'
import PropTypes from 'prop-types'

export const PlayerHeading = ({name, author, explicit = false, lyricsHeading = false}) => {

    const variants = {
        'normal': {
            width: '100%',
            transition: {
                type: "spring",
                duration: 0.25
            }
        },
        'lyrics': {
            width: 'auto',
            transition: {
                type: "spring",
                duration: 0.25
            }
        }
    }

    return (
        <div
            className='w-full md:grow flex justify-between items-start gap-x-3'
        >

            <div className={`flex flex-col justify-center ${lyricsHeading ? 'text-base md:text-xl' : 'text-xl'} overflow-hidden`}>
                <h1 className='text-white truncate flex gap-1 items-center truncate'>
                    {name}
                    {explicit && <i className="fa-solid fa-exclamation-circle fa-sm text-white text-opacity-70"></i>}
                </h1>
                <span className='text-white text-opacity-60 truncate'>{author}</span>
            </div>
            <div className='shrink-0 h-7 w-7 flex flex-wrap items-center justify-center bg-white bg-opacity-30 text-white rounded-full'>
                <i className='fill-current fa-solid fa-ellipsis-vertical fa-md'></i>
            </div>
        </div>
    )
}

PlayerHeading.propTypes = {
    lyricsHeading: PropTypes.bool,
    customWidth: PropTypes.string,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    explicit: PropTypes.bool
}