import React, { Component } from 'react';
import { Card } from '../../components/Card/Card';
import { connect } from 'react-redux';

class CardContainer extends Component {
  membersFetch = (id) => {
    const unresolvedMembers = this.props.houses.members.map(async member => { 
      const response = await fetch(member);
      const data = await response.json()
      return (
        {name: data.name, died: data.died, id: data.id}
      )
    })
    const resolvedMembers = Promise.all(unresolvedMembers)
    this.props.addMembers(resolvedMembers)
  }

  render(){
    const displayCards = this.props.houses.map(house => {
      return( <Card {...house}
                    key={house.id}
                    toggleHomies={this.membersFetch}
            />
      )})
    return (
      <div className="Container">
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = ({houses}) => ({houses})

export default connect(mapStateToProps, undefined)(CardContainer)