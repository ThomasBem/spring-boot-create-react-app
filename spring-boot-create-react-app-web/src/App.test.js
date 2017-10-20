// @flow
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as AppService from './AppService';

it('renders Create-React-App logo', () => {
  jest.spyOn(AppService, 'default').mockImplementationOnce(() => Promise.resolve('Spring-Boot-Create-React-App'));
  const app = shallow(<App />);
  expect(app.find('.App')).toHaveLength(1);
  expect(app.find('Header')).toHaveLength(1);
});
