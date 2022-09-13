import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {extractColorsFromSrc} from 'extract-colors'

export const useGradient = (image) => {

    const [gradientColors, setGradientColors] = useState([])

    const getColors = async () => {
        let colorData = await extractColorsFromSrc(image)
        colorData = colorData.sort((a,b) => (b.area-a.area))
        colorData = colorData.slice(0, 3)
        setGradientColors(colorData)
    }

    useEffect(() => {
        getColors()
    }, [image])

    return gradientColors
}

useGradient.propTypes = {
    image: PropTypes.string.isRequired
}
