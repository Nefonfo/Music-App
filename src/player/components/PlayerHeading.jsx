import {motion} from 'framer-motion'
import * as PropTypes from 'prop-types'

export const PlayerHeading = ({songTitle, songAuthor, songExplicit, rightActions, leftActions, textLayoutId}) => {
    return (
        <div className="w-full flex justify-center items-center gap-x-5">
            {leftActions}
            {
                textLayoutId ? (
                    <motion.div
                        layoutId={textLayoutId}
                        className="grow flex flex-col text-white"
                    >
                        <h3 className="text-xl">{songTitle} {songExplicit && <i className="fa-sharp fa-solid fa-circle-exclamation opacity-60"></i>}</h3>
                        <h4 className="text-base opacity-60">{songAuthor}</h4>
                    </motion.div>
                ) : (
                    <div className="grow flex flex-col text-white">
                        <h3 className="text-xl">{songTitle} {songExplicit && <i className="fa-sharp fa-solid fa-circle-exclamation opacity-60"></i>}</h3>
                        <h4 className="text-base opacity-60">{songAuthor}</h4>
                    </div>
                )
            }
            { rightActions }
        </div>
    )
}

PlayerHeading.propTypes = {
    songTitle: PropTypes.string.isRequired,
    songAuthor: PropTypes.string.isRequired,
    songExplicit: PropTypes.bool.isRequired,
    rightActions: PropTypes.element,
    leftActions: PropTypes.element,
    textLayoutId: PropTypes.string
}
