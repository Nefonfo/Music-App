import PropTypes from 'prop-types'

export const HeaderTitle = ({title}) => {
    return (
        <div className="w-full flex flex-wrap pb-3 mx-3 text-cupertino-label dark:text-cupertino-label-dark border-b-1 border-cupertino-system-grey-200 dark:border-cupertino-system-grey-600">
            <h1 className="font-bold text-4xl">{title}</h1>
        </div>
    )
}

HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
}