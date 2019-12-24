import styled from 'styled-components';

const lightModeBackground = "hsl(0, 0%, 98%)";
const lightModeElements = "hsl(0, 0%, 100%)"
const lightModeText = "hsl(200, 15%, 8%)";

/*
- Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
- Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
- Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
- Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
- Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
- White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
*/

export const Wrapper = styled.div`
  background-color: ${lightModeBackground};
  color: ${lightModeText};
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 10%);
  background-color: ${lightModeElements};
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 5%);
  align-items: center;
  justify-content: space-around;
`

export const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 24px;
`

export const ThemeSwap = styled.div`
  font-weight: 600;
`

export const searchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3em 0 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 3em 0 0 3em;
  }
`

export const Input = styled.input`
  height: 50px;
  width: 400px;
  padding-left: 20px;
  border: none;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0, 5%);

  @media (max-width: 768px) {
    margin-bottom: 25px;
    max-width: 90%;
  }
`

export const Select = styled.select`
  height: 50px;
  padding: 0 20px 0 20px;
  text-indent: 5px;
  border: none;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0, 5%);

  @media (max-width: 768px) {
    width: 50%;
  }
`

export const countriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 150px 0 150px;
`

export const Card = styled.div`
  height: 400px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0, 20%);
  flex: 0 1 23%;
  margin: 55px 35px 0 0;
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;

  &:hover {
    box-shadow: 4px 4px 15px 4px rgba(0,0,0, 30%);
    cursor: pointer;
  }
`

export const cardImg = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

export const cardContent = styled.div`
  margin-left: 15px;
`

export const cardTitle = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
`

export const cardP = styled.p`

`

export const Span = styled.span`
  padding: 15px;
`

export const Footer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  
  a {
    text-decoration: none;
    color: #000;
  }
`

export const loadMoreButton = styled.button`

  border: 2px solid #4189DD;
  border-radius: 5px;
  padding: 15px;
  color: #000;
  background-color: ${lightModeElements};
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`