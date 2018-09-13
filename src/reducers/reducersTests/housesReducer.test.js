import React from 'react'
import {housesReducer} from './housesReducer';
import {combineReducers} from 'react-redux';

describe('housesReducer', () => {
  it('should return the initial state', () => {
    const expected = []
    const result = housesReducer(undefined, {})
    expect(result).toEqual(expected)
  })
  
  it('should return a new state that is an array of houses ', () => 
    const initialState = []
    const mockHouse = {name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3}
    const expected = [{name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3}]
    const result = housesReducer(initialState, mockhouses)
    const mockRootReducer = combineReducers(housesReducer)
    expect(result)toEqual(expected)
  })

