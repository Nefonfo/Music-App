import PropTypes from 'prop-types'
import CrossfadeImage from 'react-crossfade-image'

export const FullToggleImage = ({image, play}) => {

    const classWidth = play ? 'w-10/12 md:w-1/3 lg:w-3/12 max-w-md' : 'w-8/12 md:w-2/12 lg:w-2/12 max-w-sm'

    return (
        <div className={`${classWidth} rounded-lg transition-all duration-300 ease-in-out`}>
            <CrossfadeImage
                style={{borderRadius: '0.375rem'}}
                src={image}
                duration={1000}
                timingFunction={"ease-out"}
                alt="album-artist"
            />
        </div>
    )
}

FullToggleImage.propTypes = {
    image: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired
}