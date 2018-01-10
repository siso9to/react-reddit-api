import shim from './../shim.js'
import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './../app.js'

configure({ adapter: new Adapter() });

describe('test', () => {
  const app = shallow(<App />)

  it('items', () =>{
    expect(app.props().children.length).toBeGreaterThan(0);
  })
})
