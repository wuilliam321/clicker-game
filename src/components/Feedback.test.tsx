import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Feedback from "./Feedback";
import { WinnerScore } from "../shared/constants";

describe("Feedback", () => {
  let wrapper: ShallowWrapper;
  let score: number;

  beforeEach(() => {
    wrapper = shallow(<Feedback score={score} />);
  });

  describe(`When score < than ${WinnerScore}`, () => {
    beforeEach(() => (score = 9));

    it("should render a <div />", () => {
      expect(wrapper.find("div").length).toEqual(1);
    });

    it("should not render a <p />", () => {
      expect(wrapper.find("p").length).toEqual(0);
    });
  });

  describe(`When score == than ${WinnerScore}`, () => {
    beforeEach(() => (score = 10));

    it("should render a <div />", () => {
      expect(wrapper.find("div").length).toEqual(1);
    });

    it("should render a <p />", () => {
      expect(wrapper.find("span").text()).toEqual("You have won!");
    });
  });
});
