import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GameViewPort from './GameViewPort';
import CreatePlayer from './CreatePlayer';
import GameContainer from './GameContainer';

describe('GameViewPort', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => wrapper = shallow(<GameViewPort />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  describe('When no player setted', () => {
      it('should render the Create Player Component', () => {
        expect(wrapper.containsMatchingElement(<CreatePlayer />)).toEqual(true);
      });
  });

  describe('When player is setted', () => {
    it('should render the Game Container Component', () => {
        expect(wrapper.containsMatchingElement(<GameContainer />)).toEqual(true);
    });
  });
});