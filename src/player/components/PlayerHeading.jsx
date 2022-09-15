import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

export const PlayerHeading = ({name, author, explicit = false, small = false}) => {

    return (
        <motion.div
            layoutId='player-heading'
            className='w-full md:grow flex justify-between items-start gap-x-3'
        >
            <div className={`flex flex-col justify-center ${small ? 'text-base md:text-xl' : 'text-xl'} overflow-hidden`}>
                <h3
                    className='grow truncate text-cupertino-label-dark'
                >
                    {name}
                    {explicit && <i className="ml-2 fa-solid fa-exclamation-circle fa-lg text-cupertino-label-dark opacity-70"></i>}
                </h3>
                <span className='text-cupertino-label-dark text-opacity-60 truncate'>{author}</span>
            </div>
            <div className='shrink-0 h-7 w-7 flex flex-wrap items-center justify-center bg-white bg-opacity-30 text-white rounded-full cursor-pointer'>
                <i className='fill-current fa-solid fa-ellipsis-vertical fa-md'></i>
            </div>
        </motion.div>
    )
}

PlayerHeading.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    explicit: PropTypes.bool,
    small: PropTypes.bool
}