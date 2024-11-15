import { render, screen, assert } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RoomsList } from '../RoomsList'
import testData from './testData.json'

const setRooms = vi.fn()

test('renders all rooms', () => {
    const rooms = testData

    render(
        <BrowserRouter>
            <RoomsList rooms={rooms} setRooms={setRooms} />
        </BrowserRouter>
    )

    const element = screen.getByTestId('roomList')
    expect(element).toBeDefined()

    expect(element.children).toHaveLength(rooms.length)
})