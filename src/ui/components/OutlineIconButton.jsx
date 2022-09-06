import Ripples from 'react-ripples'

export const OutlineIconButton = ({
                                      iconClass,
                                      iconSizeClass = 'fa-xl',
                                      innerExtraClass = 'p-3',
                                      rippleColor,
                                      handleClick
}) => {
    return (
        <Ripples onClick={() => handleClick && handleClick()} className='rounded-full cursor-pointer' color={rippleColor}>
            <div className={`${innerExtraClass}`}>
                <i className={`${iconClass} ${iconSizeClass}`}></i>
            </div>
        </Ripples>
    )
}
