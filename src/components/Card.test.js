import { shallow, mount, render } from 'enzyme'
import React from 'react'
import Card from './Card'

it('expect to render Card component', () => {
    // Example usage of some functions from Enzyme
    console.log(shallow(<div><Card /></div>).find(Card).dive().getElement())
    // Example Enzyme assertions
    expect(shallow(<Card />).length).toEqual(1)
    expect(shallow(<Card />).contains(<Card />))
})