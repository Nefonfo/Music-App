import PropTypes from 'prop-types'
import {NavLink, useLocation} from 'react-router-dom'
import Ripples from 'react-ripples'

export const NavbarIcon = ({iconClass, text, link}) => {

    const {pathname} = useLocation()

    return (

            <NavLink
                to={link}
                className={({isActive}) => (`rounded grow flex flex-wrap text-sm cursor-pointer ${isActive ? 'text-cupertino-pink-400': 'text-cupertino-system-grey-200'}`)}
            >
                <Ripples
                    className='rounded-xl grow flex flex-col items-center justify-center py-2' color={(pathname === link) ? 'rgba(255, 100, 131, 0.5)' : 'rgba(174, 174, 178, 0.5)'}>
                    <div><i className={`${iconClass} fa-lg`}></i></div>
                    <p>{text}</p>
                </Ripples>
            </NavLink>

    )
}

NavbarIcon.propTypes = {
    iconClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
