import { shallow, mount, render } from 'enzyme'
import React from 'react'
import CardList from './CardList.js'

const mockRobots = [{
    id: 1,
    name: 'Perfect Machine',
    username: 'robot_1',
    email: 'mail@org.org'
}]

describe('CardList testing', () => {
    it('expect to render CardList component', () => {
        // Example usage of some functions from Enzyme
        // console.log(shallow(<div><CardList robots={mockRobots}/></div>).find(CardList).dive().getElement())
        // Example Enzyme assertions
        expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1)
        expect(shallow(<CardList robots={mockRobots}/>).contains(<CardList robots={mockRobots}/>))
    })

    it('must not be touched', () => {
        expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
    })
})