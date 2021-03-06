/* eslint-disable no-undef */
import React from 'react';
import Select from '../../src/Select';
import Option from '../../src/Option';
import { shallow, render } from 'enzyme';

export default function maxTagTextLengthTest(mode) {
  describe('render', () => {
    it('truncates values by maxTagTextLength', () => {
      const wrapper = render(
        <Select
          {...{ [mode]: true } }
          value={['one', 'two']}
          maxTagTextLength={2}
        >
          <Option value="one">One</Option>
          <Option value="two">Two</Option>
        </Select>
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('render animation', () => {
      const wrapper = shallow(
        <Select
          {...{ [mode]: true } }
          choiceTransitionName="slide-up"
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
        </Select>
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
}
