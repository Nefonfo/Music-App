import styled from 'styled-components'

export const BackgroundPage = styled.div`
  &:before {
    content: "";
    position: fixed;
    z-index: -1;
    background-image: url(${(props) => props.coverImage});
    background-position: center;
    background-size: cover;
    filter: blur(50px) brightness(95%);
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