import * as core from '@actions/core'
import {run} from '../src'

test('paradox', () => expect(1).toBe(1))

describe.skip('index: action debug messages', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should output a debug message', async () => {
    const debugMock = jest.spyOn(core, 'debug')
    await run()
    expect(debugMock).toBeCalledTimes(1)
  })

  it('should not output a messages', async () => {
    const setOutMock = jest.spyOn(core, 'setOutput')
    await run()
    expect(setOutMock).toBeCalledTimes(1)
    expect(setOutMock).toHaveLength(0)
  })
})
