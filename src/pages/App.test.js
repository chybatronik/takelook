/**
 * @jest-environment node
 */
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import expect from 'expect'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const output = shallow(
    <App />
  )
  expect(shallowToJson(output)).toMatchSnapshot()
})
