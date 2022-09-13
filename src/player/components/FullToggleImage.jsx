import PropTypes from 'prop-types'

export const FullToggleImage = ({small = false, image, play, handleOnSmall}) => {

    const handleClick = () => {
        if(small){
            handleOnSmall && handleOnSmall()
        }
    }

    return (
            <div
                onClick={handleClick}
                className={`${small ? 'h-16 w-16 cursor-pointer': (play ? 'w-full': 'w-10/12')} rounded-lg shrink-0`}
            >
                <img
                    style={{borderRadius: '0.375rem'}}
                    src={image}
                    alt="album-artist"
                />
            </div>
    )
}

FullToggleImage.propTypes = {
    small: PropTypes.bool,
    image: PropTypes.string.isRequired,
    play: PropTypes.bool.isRequired,
    handleOnSmall: PropTypes.func
}