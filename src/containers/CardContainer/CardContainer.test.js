import React from 'react';
import {  mapStateToProps, mapDispatchToProps } from './CardContainer';
import { addMembers } from '../../actions';

  describe('mapStateToProps', () => {
    it('should return an object with the members array', () => {
      const mockMembers = {name: "The Rock", died: "The othe day" id: 27 }
      const expected = {
        members: [{name: "The Rock", died: "The othe day" id: 27 }]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a addMembers Action when addMembers is called', () => {
      const mockMembers = {name: "The Rock", died: "The othe day" id: 27 }
      const mockDispatch = jest.fn();
      const actionToDispatch = addMembers(mockMembers);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMembers(mockMembers);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });