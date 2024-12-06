import { beforeEach, describe, expect, test, vi } from 'vitest'
import userService from '../users'
import axios from 'axios'

vi.mock('axios')

describe('User Service', () => {
  beforeEach(() => {
    axios.post.mockReset()
    axios.delete.mockReset()
  })

  test('login', async () => {
    const credentials = { username: 'testuser', password: 'password123' }
    const loginMock = { token: 'mock-token-123', username: 'testuser' }

    axios.post.mockResolvedValue({
      data: loginMock,
    })

    const response = await userService.login(credentials)

    expect(axios.post).toHaveBeenCalledWith('/api/users/login', credentials)
    expect(response).toStrictEqual(loginMock)
  })

  test('loginStaff', async () => {
    const credentials = { username: 'staffuser', password: 'staffpassword123' }
    const loginMock = { token: 'mock-token-123', username: 'staffuser' }

    axios.post.mockResolvedValue({
      data: loginMock,
    })

    const response = await userService.loginStaff(credentials)

    expect(axios.post).toHaveBeenCalledWith('/api/users/login/staff', credentials)
    expect(response).toStrictEqual(loginMock)
  })

  test('create new user', async () => {
    const newUserMock = { userName: 'newuser', passwordHash: 'newpassword', email: 'email@newemail.com', phoneNumber: '123123123', role: '' }

    axios.post.mockResolvedValue({
      data: newUserMock
    })

    const newUser = await userService.create(newUserMock)

    expect(axios.post).toHaveBeenCalledWith(
      '/api/users',
      newUserMock
    )
    expect(newUser).toStrictEqual(newUserMock)
  })

  test('remove user', async () => {
    const userId = '12345'
    const mockToken = 'mock-token-123'

    userService.setToken(mockToken)

    axios.delete.mockResolvedValue({
      data: { message: 'User deleted' },
    })

    const response = await userService.remove(userId)

    expect(axios.delete).toHaveBeenCalledWith(
      `/api/users/${userId}`,
      expect.objectContaining({
        headers: { Authorization: `Bearer ${mockToken}` },
      })
    )
    expect(response).toStrictEqual({ message: 'User deleted' })
  })
})
