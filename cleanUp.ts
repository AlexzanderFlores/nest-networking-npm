const functions: Function[] = []

export const cleanUp = async () => {
  for (const func of functions) {
    await func()
  }
}

const addCleanUpFunction = (runnable: Function) => {
  functions.push(runnable)
}

export default addCleanUpFunction
