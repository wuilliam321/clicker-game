import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import GameProps from "../interfaces/GameProps";
import GameContainer from "./GameContainer";
import GameViewPort from "./GameViewPort";

describe("GameViewPort", () => {
  let wrapper: ShallowWrapper;
  let gameProps: GameProps;

  beforeEach(() => {
    gameProps = {
      name: "",
      score: 0,
      setPlayerNameHandler: (name: string) => {},
      setPlayerScoreHandler: () => {},
      resetGameHandler: () => {}
    };
  });

  describe("When no player setted", () => {
    beforeEach(() => {
      wrapper = shallow(<GameViewPort {...gameProps} />);
    });

    it("should render the Create Player Component", () => {
      expect(wrapper.find("CreatePlayer").length).toEqual(1);
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
