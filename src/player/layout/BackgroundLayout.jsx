import PropTypes from 'prop-types'
import styled from 'styled-components'

export const BackgroundLayout = styled.div`
  
  min-height: 100vh;
  min-height: fill-available;
  &:before {
    content: "";
    position: fixed;
    z-index: -1;   
    background-color: ${({gradientColors}) => gradientColors.length === 3 ? gradientColors[0].hex : '#000000'};
    background-image: ${
        ({gradientColors}) => gradientColors.length === 3 && `
                radial-gradient(at 0% 0%, ${gradientColors[0].hex} 0px, transparent 80%), 
                radial-gradient(at 100% 0%, ${gradientColors[1].hex} 0px, transparent 80%), 
                radial-gradient(at 0% 100%, ${gradientColors[2].hex} 0px, transparent 80%)`
        };
    animation: spin 80s infinite ease-in-out alternate;
    transition: all 3s linear;
    width: 100%;
    height: 100%;
  }
  @keyframes spin {
    from {
      transform: scale(2) rotate(0deg);
    }
    to {
      transform: scale(4) rotate(360deg);
    }
  }
`

BackgroundLayout.propTypes = {
        gradientColors: PropTypes.array
}
