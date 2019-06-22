import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ClickerGame from './ClickerGame';
import GameViewPort from './components/GameViewPort';

describe('ClickerGame', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => wrapper = shallow(<ClickerGame />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the GameViewport Component', () => {
    expect(wrapper.containsMatchingElement(<GameViewPort />)).toEqual(true);
  });
});