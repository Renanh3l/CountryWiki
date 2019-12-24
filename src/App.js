import React, { Component } from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components'

import * as styles from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';

// CSS Global
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

  body {
    margin: 0;
    background-color: ${styles.backgroundColor};
    font-family: 'Nunito Sans', sans-serif;
    color: ${styles.textColor};
  }
`

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      countries: [],
      maxLoaded: 16,
      loadingString: 'Loading...',
      region: ''
    }
  }

  componentDidMount() {
    this.setState({maxLoaded: 16});
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => this.setState({countries: json}))
  }

  loadMoreCountries = (e) => {
    e.preventDefault();
    
    this.setState({maxLoaded: this.state.maxLoaded+8});
  };

  loadCountryDetails = (index) => {
    alert(this.state.countries[index].name)
  }

  searchCountry = (e) => {
    let searchValue = e.target.value

    if (searchValue.length > 0) {
      this.setState({loadingString: 'No countries finded.'});
      fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
        .then(res => res.json())
        .then(json => this.setState({countries: json}));
    } else {
      this.setState({loadingString: 'Loading...'});
      this.componentDidMount();
    }
  }

  filterByRegion = (e) => {
    let region = e.target.value;

    console.log(region);
    if (region.length > 0) {
      this.setState({loadingString: 'No countries finded.'});
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(json => this.setState({countries: json}));
    } else {
      this.setState({loadingString: 'Loading...'});
      this.componentDidMount();
    }
    
  }

  changeTheme = (e) => {
    if (this.state.theme === "light") {
      this.setState({theme: 'dark'});
  
    } else {
      this.setState({theme: 'light'});
    }
  }

render() {
  return (
    <ThemeProvider theme={{mode: this.state.theme}}>
    <GlobalStyle />
      <styles.Wrapper>
        <styles.Header>
          <styles.Title>Where in the world?</styles.Title>

          <styles.ThemeSwap>
            <a onClick={this.changeTheme}><FontAwesomeIcon icon={faMoon}/> {this.state.theme === "light" ? ("Dark Mode") : ("Light Mode")}</a>
          </styles.ThemeSwap>
          
        </styles.Header>

        <styles.searchWrapper>
          <styles.Input placeholder="Search for a country..." onChange={this.searchCountry}>

          </styles.Input>

          <styles.Select onChange={this.filterByRegion}>
            <option hidden={true}>Filter by region...</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </styles.Select>
        </styles.searchWrapper>

        <styles.countriesWrapper>
          { (this.state.countries.length > 0) ? this.state.countries.slice(0, this.state.maxLoaded).map((country, index) => {
            return (
              <styles.Card onClick={()=>{this.loadCountryDetails(index)}}>
                <styles.cardImg src={country.flag}/>

                <styles.cardContent>
                  <styles.cardTitle>{country.name}</styles.cardTitle>
                  <styles.cardP>Population: {country.population.toLocaleString()}</styles.cardP>
                  <styles.cardP>Region: {country.region}</styles.cardP>
                  <styles.cardP>Capital: {country.capital}</styles.cardP>
                </styles.cardContent>
                
              </styles.Card>
            )
          }) : <span>{this.state.loadingString}</span> }
          
        </styles.countriesWrapper>

        <styles.Footer>
          <styles.loadMoreButton onClick={this.loadMoreCountries}>
            LOAD MORE...
          </styles.loadMoreButton>
          <p><a href="https://github.com/renanh3l" target="_blank">Criado por Renan Henrique</a></p>
        </styles.Footer>
      </styles.Wrapper>
    </ThemeProvider>
  );
}
}

export default App;
