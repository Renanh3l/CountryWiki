import React, { Component } from 'react';

import * as styles from './styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      maxLoaded: 16
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => this.setState({countries: json}))
  }

render() {
  return (
    <styles.Wrapper>
      <styles.Header>
        <styles.Title>Where in the world?</styles.Title>

        <styles.ThemeSwap>
          <FontAwesomeIcon icon={faMoon}/>Dark Mode
        </styles.ThemeSwap>
        
      </styles.Header>

      <styles.searchWrapper>
        <styles.Input placeholder="Search for a country...">

        </styles.Input>

        <styles.Select>
          <option hidden={true}>Filter by region...</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </styles.Select>
      </styles.searchWrapper>

      <styles.countriesWrapper>
        { (this.state.countries.length > 0) ? this.state.countries.slice(0, this.state.maxLoaded).map((country, index) => {
          return (
            <styles.Card>
              <styles.cardImg src={country.flag}/>

              <styles.cardContent>
                <styles.cardTitle>{country.name}</styles.cardTitle>
                <styles.cardP>Population: {country.population.toLocaleString()}</styles.cardP>
                <styles.cardP>Region: {country.region}</styles.cardP>
                <styles.cardP>Capital: {country.capital}</styles.cardP>
              </styles.cardContent>
              
            </styles.Card>
          )
        }) : <span>Carregando...</span> }
        
      </styles.countriesWrapper>

      <styles.Footer>
        <styles.loadMoreButton>
          LOAD MORE...
        </styles.loadMoreButton>
        <p><a href="https://github.com/renanh3l" target="_blank">Criado por Renan Henrique</a></p>
      </styles.Footer>
    </styles.Wrapper>
  );
}
}

export default App;
