import { beforeEach, describe, expect, test, vi } from 'vitest'
import roomService from '../rooms'
import axios from 'axios'
import testData from '../../testData.json'

vi.mock('axios')

describe('Rooms Service', () => {
  beforeEach(() => {
    axios.get.mockReset()
    axios.post.mockReset()
    axios.put.mockReset()
    axios.delete.mockReset()
  })

  test('get all rooms', async () => {
    const roomsMock = testData

    axios.get.mockResolvedValue({
      data: roomsMock,
    })

    const rooms = await roomService.getAll()

    expect(axios.get).toHaveBeenCalledWith('/api/rooms')
    expect(rooms).toStrictEqual(roomsMock)
  })

  test('get one room', async () => {
    const roomMock = testData[0]

    axios.get.mockResolvedValue({
      data: roomMock,
    })

    const room = await roomService.getById(testData[0]._id)

    expect(axios.get).toHaveBeenCalledWith(`/api/rooms/${testData[0]._id}`)
    expect(room).toStrictEqual(roomMock)
  })

  test('post new room', async () => {
    const newRoomMock = { ...testData[0] }
    const mockToken = 'mockToken'

    roomService.setToken(mockToken)

    axios.post.mockResolvedValue({
      data: newRoomMock,
    })

    delete newRoomMock._id

    const newRoom = await roomService.create(newRoomMock)

    expect(axios.post).toHaveBeenCalledWith(
      '/api/rooms',
      newRoomMock,
      expect.objectContaining({
        headers: { Authorization: `Bearer ${mockToken}` },
      })
    )
    expect(newRoom).toStrictEqual(newRoomMock)
  })

  test('update room', async () => {
    const updatedRoomMock = { ...testData[0], Price: 150 }
    const mockToken = 'mockToken'
    const roomId = testData[0]._id

    roomService.setToken(mockToken)

    axios.put.mockResolvedValue({
      data: updatedRoomMock,
    })

    const updatedRoom = await roomService.update(roomId, updatedRoomMock)

    expect(axios.put).toHaveBeenCalledWith(
      `/api/rooms/${roomId}`,
      updatedRoomMock,
      expect.objectContaining({
        headers: { Authorization: `Bearer ${mockToken}` },
      })
    )
    expect(updatedRoom).toStrictEqual(updatedRoomMock)
  })


  test('delete room', async () => {
    const roomId = testData[0]._id
    const mockToken = 'mockToken'

    roomService.setToken(mockToken)

    axios.delete.mockResolvedValue({
      data: { message: 'Room deleted' },
    })

    const response = await roomService.remove(roomId)

    expect(axios.delete).toHaveBeenCalledWith(
      `/api/rooms/${roomId}`,
      expect.objectContaining({
        headers: { Authorization: `Bearer ${mockToken}` },
      })
    )
    expect(response).toStrictEqual({ message: 'Room deleted' })
  })
})
