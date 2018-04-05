/**
 * @jest-environment node
 */
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import expect from 'expect'
import { DefaultListContainer } from './DefaultList'

Enzyme.configure({ adapter: new Adapter() })

it('DefaultListContainer isFetch false', () => {
  const config = {isFetch: false}
  const shows = {
    shows: {},
    config
  }
  const output = shallow(
    <DefaultListContainer shows={shows} />
  )
  expect(shallowToJson(output)).toMatchSnapshot()
})

it('DefaultListContainer isFetch true', () => {
  const config = {isFetch: true}
  const shows = {
    shows: {},
    config
  }
  const output = shallow(
    <DefaultListContainer shows={shows} />
  )
  expect(shallowToJson(output)).toMatchSnapshot()
})
