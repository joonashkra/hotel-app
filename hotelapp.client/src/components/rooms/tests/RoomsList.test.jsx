import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RoomsList } from '../RoomsList'
import testData from '../../../testData.json';

const setRooms = vi.fn()

test('renders all rooms', () => {
    const rooms = testData

    render(
        <BrowserRouter>
            <RoomsList rooms={rooms} setRooms={setRooms} />
        </BrowserRouter>
    )

    const element = screen.getByTestId('roomsList')
    expect(element).toBeDefined()

    expect(element.children).toHaveLength(rooms.length)
})