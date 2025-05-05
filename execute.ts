import { merge } from './src/merge'

function main() {
  const collection1: number[] = [8, 6, 2]
  const collection2: number[] = [9, 12, 15]
  const collection3: number[] = [1, 9]

  const result = merge(collection1, collection2, collection3)
  console.log('Result:', result)
}
main();