import React, { Component } from 'react';
import { Card } from '../../components/Card/Card';
import { connect } from 'react-redux';

class CardContainer extends Component {
  render(){
    const displayCards = this.props.houses.map(house => {
      return( <Card {...house}
                    key={house.id}
            />
      )})
    return (<div>{displayCards}</div>)
  }
}

export const mapStateToProps = ({houses}) => ({houses})

export default connect(mapStateToProps, undefined)(CardContainer)