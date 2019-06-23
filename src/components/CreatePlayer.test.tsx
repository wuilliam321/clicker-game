import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CreatePlayer from './CreatePlayer';

describe('GameViewPort', () => {
  let wrapper: ShallowWrapper
  let setPlayerNameHandler: (name: string) => void
  beforeEach(() => wrapper = shallow(<CreatePlayer setPlayerNameHandler={setPlayerNameHandler} />))

  it('should render a input with name id', () => {
    expect(wrapper.find('input#name').length).toEqual(1)
  })
})