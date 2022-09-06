import {IconNavbar} from './IconNavbar'


export const Navbar = () => {

    return (
        <nav className="w-full fixed bottom-0 flex flex-wrap justify-around items-center border-t-1 border-cupertino-system-grey-200">

            <IconNavbar link='/' text='Listen' iconClass='fa-sharp fa-solid fa-circle-play' />
            <IconNavbar link='/explore' text='Explore' iconClass='fa-regular fa-window-restore' />
            <IconNavbar link='/radio' text='Radio' iconClass='fa-sharp fa-solid fa-radio' />
            <IconNavbar link='/collection' text='Collection' iconClass='fa-sharp fa-solid fa-music' />
            <IconNavbar link='/search' text='Search' iconClass='fa-sharp fa-solid fa-magnifying-glass' />
        </nav>
    )
}
