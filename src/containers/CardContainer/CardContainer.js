import React, { Component } from 'react';
import { Card } from '../../components/Card/Card';
import { connect } from 'react-redux';
import { addMembers } from '../../actions';

class CardContainer extends Component {

  membersFetch = (members) => {
    console.log(members)
    const foundMembers = members.map(async member => {
        const response = await fetch(member);
        const data = await response.json()
        return (
          {name: data.name, died: data.died, id: data.id}
        )
      })
      const resolvedMembers = Promise.all(foundMembers)
      return this.props.addMembers(resolvedMembers)
  }

  render(){
    const displayCards = this.props.houses.map(house => {
      console.log(house)
      const newId = house.name
      return( <Card {...house}
                    key={house.id}
                    toggleHomies={this.membersFetch(house.members)}
            />
      )})
    return (
      <div className="Container">
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  members: state.members
})


export const mapDispatchToPorps = (dispatch) => ({
  addMembers: (members) => (dispatch(addMembers(members)))
})

export default connect(mapStateToProps, mapDispatchToPorps)(CardContainer)