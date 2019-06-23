import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import GameViewPort from "./GameViewPort";
import CreatePlayer from "./CreatePlayer";
import GameContainer from "./GameContainer";
import Player from "../interfaces/Player";
import GameProps from "../interfaces/GameProps";

describe("GameViewPort", () => {
  let wrapper: ShallowWrapper;
  let player: Player;
  let gameProps: GameProps;

  beforeEach(() => {
    player = { name: "", score: 0 };
    gameProps = {
      name: player.name,
      score: player.score,
      setPlayerNameHandler: (name: string) => {},
      setPlayerScoreHandler: () => {}
    };
  });

  describe("When no player setted", () => {
    beforeEach(() => {
      wrapper = shallow(<GameViewPort {...gameProps} />);
    });

    it("should render the Create Player Component", () => {
      const element = (
        <CreatePlayer setPlayerNameHandler={gameProps.setPlayerNameHandler} />
      );
      expect(wrapper.containsMatchingElement(element)).toEqual(true);
    });
  });

  describe("When player is setted", () => {
    beforeEach(() => {
      gameProps.name = "Test";
      wrapper = shallow(<GameViewPort {...gameProps} />);
    });

    it("should render the Game Container Component", () => {
      const element = <GameContainer {...gameProps} />;
      expect(wrapper.containsMatchingElement(element)).toEqual(true);
    });
  });
});
