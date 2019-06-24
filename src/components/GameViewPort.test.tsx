import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import GameViewPort from "./GameViewPort";
import CreatePlayer from "./CreatePlayer";
import GameContainer from "./GameContainer";
import GameProps from "../interfaces/GameProps";
import CreatePlayerProps from "../interfaces/CreatePlayerProps";

describe("GameViewPort", () => {
  let wrapper: ShallowWrapper;
  let gameProps: GameProps;
  let createPlayerProps: CreatePlayerProps;

  beforeEach(() => {
    gameProps = {
      name: "",
      score: 0,
      setPlayerNameHandler: (name: string) => {},
      setPlayerScoreHandler: () => {},
      setPlayerWonHandler: () => {}
    };
    createPlayerProps = {
      setPlayerNameHandler: gameProps.setPlayerNameHandler
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
