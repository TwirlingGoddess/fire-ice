import React from 'react';
import {  mapStateToProps, mapDispatchToProps } from './App';
import { addHouses } from '../../actions';

   describe('mapStateToProps', () => {
    it('should return an object with the houses array', () => {
      const mockHouse = {
        name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3
      }
      
      const expected = {
        houses: [{
          name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3
        }]
      }
      const mappedProps = mapStateToProps(mockHouse)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a addHouses Action when addHouses is called', () => {
      const mockHouse = {name: "The Cow Jumped Over the Moon", founded: "Before the 3rd of Yore", id: 3}
      const mockDispatch = jest.fn();
      const actionToDispatch = addHouses(mockHouse);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addHouses(mockHouse);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });