import * from '../actions';

describe('actions', () => {
  
  it('should have a type of ADD_HOUSES' => {
    const mockHouse = {name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3}
    const expectedAction = {
      type: 'ADD_HOUSES',
      mockHouse
    }
    const result = actions.addHouses(mockHouse)
    expect(result).toEqual(expectedAction)
  })


  it('should have a type of ADD_MEMBERS' => {
    const mockMembers = {name: "The Rock", died: "The othe day" id: 27 }
    const expectedAction = {
      type: 'ADD_MEMBERS',
      mockMembers
    }
    const result = actions.addMembers(mockMembers)
    expect(result).toEqual(expectedAction)
  })

})