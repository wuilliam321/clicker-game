import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Actions from "./Actions";

describe("Actions", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Actions />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
