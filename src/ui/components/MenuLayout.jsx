import {NavbarIcon} from './NavbarIcon'

export const MenuLayout = () => {

    return (
        <nav className="flex flex-wrap justify-around items-center border-t-1 border-cupertino-system-grey-200 dark:border-cupertino-system-grey-600 bg-white dark:bg-cupertino-basic-background-darkalt">
            <NavbarIcon link='/browse/listen' text='Listen' iconClass='fa-sharp fa-solid fa-circle-play' />
            <NavbarIcon link='/browse/explore' text='Explore' iconClass='fa-regular fa-window-restore' />
            <NavbarIcon link='/browse/radio' text='Radio' iconClass='fa-sharp fa-solid fa-radio' />
            <NavbarIcon link='/browse/collection' text='Collection' iconClass='fa-sharp fa-solid fa-music' />
            <NavbarIcon link='/browse/search' text='Search' iconClass='fa-sharp fa-solid fa-magnifying-glass' />
        </nav>
    )
}
