import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ClickerGame from './ClickerGame';
import GameViewPort from './components/GameViewPort';
import Player from './interfaces/Player';

describe('ClickerGame', () => {
  let wrapper: ShallowWrapper
  let player: Player
  let setPlayerName: (name: string) => void
  
  beforeEach(() => {
    wrapper = shallow(<ClickerGame />)
  })

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  });

  it('should render the GameViewport Component', () => {
    const element = <GameViewPort {...player} setPlayerNameHandler={setPlayerName} />
    expect(wrapper.containsMatchingElement(element)).toEqual(true)
  })
})