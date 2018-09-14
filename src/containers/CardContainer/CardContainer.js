import React, { Component } from 'react';
import { Card } from '../../components/Card/Card';
import { connect } from 'react-redux';
import { addMembers } from '../../actions';

class CardContainer extends Component {

  membersFetch = async (members) => {
    const foundMembers = members.map(async member => {
        let memberId = await member.split('')
        for(var i = 0; i < 49; i++) {
          await memberId.shift()
        }
        const response = await fetch(`http://localhost:3001/api/v1/character/${memberId.join([])}`);
        const data = await response.json()
          const newMember = await {name: data.name, died: data.died, key: memberId.join([])}
          console.log(newMember)
        return newMember
      })

      const resolvedMembers = await Promise.all(foundMembers)
      return this.props.addMembers(resolvedMembers)
  }

  render(){
    const displayCards = this.props.houses.map(house => {
      return( <Card {...house}
                    key={house.id}
                    onClick={this.membersFetch(house.members)}
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