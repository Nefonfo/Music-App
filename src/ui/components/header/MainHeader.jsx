import {Header} from './Header'
import {OutlineIconButton} from '../OutlineIconButton'
import {HeaderTitle} from './HeaderTitle'
import PropTypes from 'prop-types'

export const MainHeader = ({pageTitle}) => {

    const rippleColor = 'rgba(174, 174, 178, 0.5)'

    return (
        <>
            <Header
                title={pageTitle}
                rightIcons={
                    <>
                        <OutlineIconButton iconClass='fa-brands fa-chromecast' iconSizeClass='fa-xl' rippleColor={rippleColor} />
                        <OutlineIconButton iconClass='fa-solid fa-ellipsis-vertical' iconSizeClass='fa-xl' rippleColor={rippleColor} />
                    </>
                }
            />
            <HeaderTitle title={pageTitle} />
        </>
    )
}

MainHeader.propTypes = {
    pageTitle: PropTypes.string.isRequired
}