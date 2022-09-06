import {NavLink} from 'react-router-dom'

export const IconNavbar = ({iconClass, text, link, selected}) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) => (`flex flex-col items-center justify-center gap-1 font-medium text-sm cursor-pointer ${isActive ? 'text-cupertino-pink-400': 'text-cupertino-system-grey-200'}`)}
        >
            <div><i className={`${iconClass} fa-lg`}></i></div>
            <p>{text}</p>
        </NavLink>
    )
}
