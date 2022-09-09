import PropTypes from 'prop-types'
import styled from 'styled-components'

export const BackgroundPage = styled.div`
  position: fixed;
  z-index: 25;
  -webkit-transition: background-image 0.5s ease-in-out;
  transition: background-image 0.5s ease-in-out;
  background-image: url(${(props) => props.coverImage});
  background-position: center;
  background-size: cover;
  filter: blur(50px) brightness(70%);
  transform: scale(2);
  animation: spin 120s infinite;
  width: 100%;
  height: 100%;
  

  @keyframes spin {
    from {
      transform: scale(2) rotate(0deg);
    }
    to {
      transform: scale(2.5) rotate(360deg);
    }
  }
`

BackgroundPage.propTypes = {
    coverImage: PropTypes.string.isRequired
}