import React from 'react'
import {membersReducer} from './membersReducer';
import {combineReducers} from 'react-redux';

describe('membersReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = membersReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  
  it('should return a new state that is an array of members ', () => 
    const initialState = []
    const mockMembers = {name: "The Rock", died: "The othe day" id: 27 }
    const expected = [{name: "The Rock", died: "The othe day" id: 27 }]
    const result = membersReducer(initialState, mockMembers)
    const mockRootReducer = combineReducers(membersReducer)
    expect(result)toEqual(expected)
  })

})
