import PropTypes from 'prop-types'

export const LyricRow = ({text, active = false }) => {
    return (
        <p className={`pt-8 text-4xl md:text-5xl text-cupertino-label-dark ${!active ? 'text-opacity-50' : ''} font-bold`}>
            {text}
        </p>
    )
}

LyricRow.propTypes = {
    text: PropTypes.string.isRequired,
    active: PropTypes.bool
}