import styled from 'styled-components'
import {motion} from 'framer-motion'

export const BackgroundPage = styled(motion.div)`
  &:before {
    content: "";
    position: fixed;
    z-index: -1;
    background-image: url(${(props) => props.backgroundImage});
    background-position: bottom center;
    background-size: cover;
    filter: blur(50px) brightness(150%);
    animation: spin 120s infinite;
    width: 100%;
    height: 100%;
  }
  
  @keyframes spin {
    from {
      transform: scale(2) rotate(0deg);
    }
    to {
      transform: scale(2.5) rotate(360deg);
    }
  }
  
`