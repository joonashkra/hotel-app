import { beforeEach, describe, expect, test, vi } from 'vitest'
import roomService from './rooms'
import axios from 'axios'
import testData from '../components/rooms/tests/testData.json'

vi.mock('axios')

describe('Rooms Service', () => {
  beforeEach(() => {
    axios.get.mockReset()
  })

  describe('getAll', () => {
    test('get all rooms', async () => {
      const roomsMock = testData

      axios.get.mockResolvedValue({
        data: roomsMock,
      })

      const rooms = await roomService.getAll()

      expect(axios.get).toHaveBeenCalledWith('/api/rooms')
      expect(rooms).toStrictEqual(roomsMock)
    })
  })
})