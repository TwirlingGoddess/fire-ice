import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';

class App extends Component {

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/houses')
    const data = await response.json();
    const houses = await data.map(house => house.name)
    this.props.addHouses(houses)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addHouses: PropTypes.func.isRequired
};

const mapStateToProps = ({ houses }) => ({ houses });
const mapDispatchToProps = dispatch => ({ addHouses:
  (houses) => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
