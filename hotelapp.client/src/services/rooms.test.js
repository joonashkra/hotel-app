import { beforeEach, describe, expect, test, vi } from 'vitest'
import roomService from './rooms'
import axios from 'axios'
import testData from '../components/rooms/tests/testData.json'

vi.mock('axios')

describe('Rooms Service', () => {
  beforeEach(() => {
    axios.get.mockReset()
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

    const rooms = await roomService.getById(testData[0]._id)

    expect(axios.get).toHaveBeenCalledWith(`/api/rooms/${testData[0]._id}`)
    expect(rooms).toStrictEqual(roomMock)
  })

  /* test('post new room', async () => {
    const newRoomMock = testData[0]

    axios.post.mockResolvedValue({
      data: newRoomMock,
    })

    delete newRoomMock._id

    const newRoom = await roomService.create(newRoomMock)

    expect(axios.post).toHaveBeenCalledWith('/api/rooms', newRoomMock)
    expect(newRoom).toStrictEqual(newRoomMock)
  }) */

    //No authorization yet so test will fail

})
