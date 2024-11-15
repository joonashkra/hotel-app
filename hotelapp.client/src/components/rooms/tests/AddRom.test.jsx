import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AddRoom } from '../AddRoom'
import { RoomsList } from '../RoomsList'
import testData from './testData.json'

const setRooms = vi.fn()

test('adds room', async () => {
    const rooms = testData

    render(
        <BrowserRouter>
            <AddRoom rooms={rooms} setRooms={setRooms} />
            <RoomsList rooms={rooms} setRooms={setRooms} />
        </BrowserRouter>
    )

    const locationInput = screen.getByPlaceholderText('Type location...')
    const featureInput = screen.getByPlaceholderText('Type new feature...')
    const priceInput = screen.getByPlaceholderText('Give price...')
    const addRoomBtn = screen.getByTestId("addRoomBtn")
    const addFeatureBtn = screen.getByTestId("addFeatureBtn")

    fireEvent.change(locationInput, {target: {value: 'testLocation'}})
    fireEvent.change(featureInput, {target: {value: 'testFeature'}})
    fireEvent.click(addFeatureBtn)
    fireEvent.change(priceInput, {target: {value: '123'}})
    fireEvent.click(addRoomBtn)

    const roomList = screen.getByTestId('roomList')
    expect(roomList).toBeDefined()

    await waitFor(() => {
        expect(setRooms).toHaveBeenCalled()
    })
})