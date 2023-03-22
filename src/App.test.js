import { render, screen, waitFor } from '@testing-library/react'
require('jest-fetch-mock').enableMocks()

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'zane'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('zane')
  })

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })
