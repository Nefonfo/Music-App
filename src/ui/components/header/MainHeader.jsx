import {Header} from './Header'
import {OutlineIconButton} from '../OutlineIconButton'
import {HeaderTitle} from './HeaderTitle'

export const MainHeader = ({pageTitle}) => {

    const rippleColor = 'rgba(174, 174, 178, 0.5)'

    return (
        <>
            <Header
                title={pageTitle}
                rightIcons={
                    <>
                        <OutlineIconButton iconClass='fa-brands fa-chromecast' rippleColor={rippleColor} />
                        <OutlineIconButton iconClass='fa-solid fa-ellipsis-vertical' rippleColor={rippleColor} />
                    </>
                }
            />
            <HeaderTitle title={pageTitle} />
        </>
    )
}
