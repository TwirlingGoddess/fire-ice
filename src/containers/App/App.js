import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/houses')
    const data = await response.json();
    const houses = await data.map(async (house, index) => {
    const filteredMembers = await this.membersFetch(house.swornMembers)
      return(
        {name: house.name, founded: house.founded, seats: house.seats,
          titles: house.titles, ancestralWeapons: house.ancestralWeapons,
          coatOfArms: house.coatOfArms, members: filteredMembers, id: index}
      )
    })
    const resolvedHouses = await Promise.all(houses)
    this.props.addHouses(resolvedHouses)
  }

  membersFetch = (members) => {
    const unresolvedMembers = members.map(async member => { 
      const response = await fetch(member);
      const data = await response.json()
      return (
        {name: data.name, died: data.died}
      )
    })
    return Promise.all(unresolvedMembers)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addHouses: PropTypes.func.isRequired
};

export const mapStateToProps = ({ houses }) => ({ houses });

export const mapDispatchToProps = dispatch => ({ 
  addHouses: (houses) => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);