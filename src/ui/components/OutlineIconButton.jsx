import Ripples from 'react-ripples'
import PropTypes from 'prop-types'

export const OutlineIconButton = ({
                                      iconClass,
                                      innerExtraClass = 'p-3',
                                      iconSizeClass,
                                      rippleColor,
                                      handleClick
                                  }) => {
    return (
        <Ripples onClick={() => handleClick && handleClick()} className="rounded-full cursor-pointer"
                 color={rippleColor}>
            <div className={`${innerExtraClass}`}>
                <i className={`${iconClass} ${(iconSizeClass) ? iconSizeClass : ''}`}></i>
            </div>
        </Ripples>
    )
}

OutlineIconButton.propTypes = {
    iconClass: PropTypes.string.isRequired,
    innerExtraClass: PropTypes.string,
    iconSizeClass: PropTypes.string,
    rippleColor: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}