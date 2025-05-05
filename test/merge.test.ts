import { merge } from '../src/merge'

describe('function: merge', () => {
  test('merge empty array', async () => {
    const collection_1: number[] = []
    const collection_2: number[] = []
    const collection_3: number[] = []
    const expected: number[] = []
    const actual = merge(collection_1, collection_2, collection_3)
    expect(actual).toEqual(expected)
  });

  test('merge correct', async () => {
    const collection_1: number[] = [10, 9, 7, 3, 2, 1]
    const collection_2: number[] = [0, 1, 2, 4]
    const collection_3: number[] = [1, 9]
    const expected: number[] = [0, 1, 1, 1, 2, 2, 3, 4, 7, 9, 9, 10]
    const actual = merge(collection_1, collection_2, collection_3)
    expect(actual).toEqual(expected)
  });

  test('merge correct 2', async () => {
    const collection_1: number[] = [8, 6, 2]
    const collection_2: number[] = [9, 12, 15]
    const collection_3: number[] = [1, 9]
    const expected: number[] = [1, 2, 6, 8, 9, 9, 12, 15]
    const actual = merge(collection_1, collection_2, collection_3)
    console.log(actual)
    expect(actual).toEqual(expected)
  })
})
