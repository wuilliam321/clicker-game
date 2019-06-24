import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import ClickerProps from "../interfaces/ClickerProps";
import { WinnerScore } from "../shared/constants";
import Clicker from "./Clicker";

describe("Clicker", () => {
  let clickerProps: ClickerProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    clickerProps = {
      score: 0,
      setPlayerScoreHandler: jest.fn()
    };
    wrapper = shallow(<Clicker {...clickerProps} />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("button#clicker-btn").length).toEqual(1);
  });

  it("should show the score as button text", () => {
    wrapper.setProps({ score: 5 });
    expect(wrapper.find("button#clicker-btn").text()).toEqual("5");
  });

  it("should call setPlayerScoreHandler on click", () => {
    const btn = wrapper.find("button#clicker-btn");
    btn.simulate("click");
    expect(clickerProps.setPlayerScoreHandler).toHaveBeenCalled();
  });

  it(`should not prevent click when score < ${WinnerScore}`, () => {
    wrapper.setProps({ score: 5 });
    expect(wrapper.find("button#clicker-btn").prop("disabled")).toEqual(false);
  });

  it(`should prevent click when score = ${WinnerScore}`, () => {
    wrapper.setProps({ score: 10 });
    expect(wrapper.find("button#clicker-btn").prop("disabled")).toEqual(true);
  });
});
