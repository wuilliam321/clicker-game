import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import CreatePlayerProps from "../interfaces/CreatePlayerProps";
import CreatePlayer from "./CreatePlayer";

describe("GameViewPort", () => {
  let wrapper: ShallowWrapper;
  let createPlayerProps: CreatePlayerProps;

  beforeEach(() => {
    createPlayerProps = {
      setPlayerNameHandler: jest.fn()
    };
    wrapper = shallow(<CreatePlayer {...createPlayerProps} />);
  });

  it("should render a input with name id", () => {
    expect(wrapper.find("input#name").length).toEqual(1);
  });

  it("should call setPlayerNameHandler on click", () => {
    const btn = wrapper.find("button#start-btn");
    btn.simulate("click");
    expect(createPlayerProps.setPlayerNameHandler).toHaveBeenCalled();
  });

  it("should call setNameHandler on change player name", () => {
    const input = wrapper.find("input#name");
    input.simulate("change", { target: { value: "Test" } });
    wrapper.update();
    expect(wrapper.find("input#name").props().value).toEqual("Test");
  });
});
