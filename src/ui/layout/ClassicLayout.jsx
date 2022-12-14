import PropTypes from 'prop-types'
import {Navbar} from '../components'

export const ClassicLayout = ({children}) => {

    return (
        <main
            className="w-full flex flex-col">
            <section className="flex flex-wrap">
                {children}
            </section>
            <Navbar/>
        </main>
    )
}

ClassicLayout.propTypes = {
    children: PropTypes.element.isRequired
}

