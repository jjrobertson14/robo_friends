import { shallow, mount, render } from 'enzyme'
import React from 'react'
import Card from './Card.js'

const mockRobot = {
    id: 1,
    name: 'Perfect Machine',
    username: 'robot_1',
    email: 'mail@org.org'
}

describe('Card component tests', () => {
    it('renders a Card component', () => {
        // Example usage of some functions from Enzyme
        // console.log(shallow(<div><Card /></div>).find(Card).dive().getElement())
        // Example Enzyme assertions
        expect(shallow(<Card />).length).toEqual(1)
        expect(shallow(<Card />).contains(<Card />))
    })

    it('s render output has not changed', () => {
        expect(shallow(<Card />)).toMatchSnapshot()
    })

    it('shows the property values of the robot prop', () => { 
        const valueList = [ mockRobot.name, mockRobot.email ]
        const wrapper = shallow(<Card id={mockRobot.id} robot={mockRobot} />)
        valueList.map( (value) => {
            expect(wrapper.find('.Robot').text().includes(value))
        })
    })
})