import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import ClickerGame from "./ClickerGame";

describe("ClickerGame", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<ClickerGame />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <GameViewPort />", () => {
    expect(wrapper.find("GameViewPort").length).toEqual(1);
  });
});
