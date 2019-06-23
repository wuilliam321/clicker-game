import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ClickerGame from "./ClickerGame";
import GameViewPort from "./components/GameViewPort";
import Player from "./interfaces/Player";
import GameProps from "./interfaces/GameProps";

describe("ClickerGame", () => {
  let wrapper: ShallowWrapper;
  let player: Player;
  let gameProps: GameProps;

  beforeEach(() => {
    player = { name: "", score: 0 };
    gameProps = {
      ...player,
      setPlayerNameHandler: (name: string) => {},
      setPlayerScoreHandler: () => {}
    };
    wrapper = shallow(<ClickerGame />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  // it('should render the GameViewport Component', () => {
  //   const element = <GameViewPort {...gameProps} />
  //   expect(wrapper.containsMatchingElement(element)).toEqual(true)
  // })
});
