import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import ActionsProps from "../interfaces/ActionsProps";
import Actions from "./Actions";

describe("Actions", () => {
  let wrapper: ShallowWrapper;
  let actionsProps: ActionsProps;

  beforeEach(() => {
    actionsProps = {
      resetGameHandler: jest.fn()
    };
    wrapper = shallow(<Actions {...actionsProps} />);
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button#reset-btn").length).toEqual(1);
  });

  it("should call resetGameHandler on button click", () => {
    const btn = wrapper.find("button#reset-btn");
    btn.simulate("click");
    expect(actionsProps.resetGameHandler).toHaveBeenCalled();
  });
});
