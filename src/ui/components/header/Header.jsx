import PropTypes from 'prop-types'

export const Header = ({title, leftIcons, rightIcons}) => {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-full flex justify-end items-center px-2 text-cupertino-pink-400">
                    { leftIcons }
                    {
                        title &&
                            <h1 className='grow px-1 text-cupertino-label' style={{opacity: 0}}>Listen</h1>
                    }
                    { rightIcons }
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    leftIcons: PropTypes.element,
    rightIcons: PropTypes.element
}
