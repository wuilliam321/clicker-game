import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Clicker from "./Clicker";
import ClickerProps from "../interfaces/ClickerProps";

describe("Clicker", () => {
  let clickerProps: ClickerProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    clickerProps = {
      score: 0,
      setPlayerScoreHandler: () => {}
    };
    wrapper = shallow(<Clicker {...clickerProps} />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("button#clicker-btn").length).toEqual(1);
  });
});
