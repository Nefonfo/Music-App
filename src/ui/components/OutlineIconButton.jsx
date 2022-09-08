import Ripples from 'react-ripples'

export const OutlineIconButton = ({
                                      iconClass,
                                      innerExtraClass = 'p-3',
                                      iconSizeClass,
                                      rippleColor,
                                      handleClick
}) => {
    return (
        <Ripples onClick={() => handleClick && handleClick()} className='rounded-full cursor-pointer' color={rippleColor}>
            <div className={`${innerExtraClass}`}>
                <i className={`${iconClass} ${(iconSizeClass) ? iconSizeClass : ''}`}></i>
            </div>
        </Ripples>
    )
}
