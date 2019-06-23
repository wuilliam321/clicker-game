import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GameViewPort from './GameViewPort';
import CreatePlayer from './CreatePlayer';
import GameContainer from './GameContainer';
import Player from '../interfaces/Player';

describe('GameViewPort', () => {
  let wrapper: ShallowWrapper
  let player: Player
  let setPlayerNameHandler: (name: string) => void

  describe('When no player setted', () => {
    beforeEach(() => {
      player = {name: "", score: 0}
      setPlayerNameHandler = (name: string) => {}
      wrapper = shallow(<GameViewPort {...player} setPlayerNameHandler={setPlayerNameHandler} />)
    })

    it('should render the Create Player Component', () => {
      const element = <CreatePlayer setPlayerNameHandler={setPlayerNameHandler} />
      expect(wrapper.containsMatchingElement(element)).toEqual(true);
    })
  })

  describe('When player is setted', () => {
    beforeEach(() => {
      player = {name: "Test", score: 0}
      wrapper = shallow(<GameViewPort {...player} setPlayerNameHandler={setPlayerNameHandler} />)
    })

    it('should render the Game Container Component', () => {
      const element = <GameContainer name={player.name} score={player.score} />
      expect(wrapper.containsMatchingElement(element)).toEqual(true);
    })
  })
})