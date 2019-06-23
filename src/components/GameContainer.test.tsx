import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import GameProps from "../interfaces/GameProps";
import Actions from "./Actions";
import Clicker from "./Clicker";
import Feedback from "./Feedback";
import GameContainer from "./GameContainer";
import ClickerProps from "../interfaces/ClickerProps";

describe("GameContainer", () => {
  let gameProps: GameProps;
  let clickerProps: ClickerProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    gameProps = {
      name: "Test",
      score: 0,
      setPlayerNameHandler: (name: string) => {},
      setPlayerScoreHandler: () => {}
    };
    clickerProps = {
      score: gameProps.score,
      setPlayerScoreHandler: gameProps.setPlayerScoreHandler
    };
    wrapper = shallow(<GameContainer {...gameProps} />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the Feedback Component", () => {
    const element = <Feedback />;
    expect(wrapper.containsMatchingElement(element)).toEqual(true);
  });

  it("should render the Clicker Component", () => {
    const element = <Clicker {...clickerProps} />;
    expect(wrapper.containsMatchingElement(element)).toEqual(true);
  });

  it("should render the Actions Component", () => {
    const element = <Actions />;
    expect(wrapper.containsMatchingElement(element)).toEqual(true);
  });
});
