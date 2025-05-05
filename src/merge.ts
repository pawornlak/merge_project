export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const res: number[] = []
  let i = collection_1.length - 1
  let j = 0
  let k = 0
  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    let inp1 = i >= 0 ? collection_1[i] : Infinity
    let inp2 = j < collection_2.length ? collection_2[j] : Infinity
    let inp3 = k < collection_3.length ? collection_3[k] : Infinity
    if (inp1 <= inp2 && inp1 <= inp3) {
      res.push(inp1)
      i--;
    } else if (inp2 <= inp1 && inp2 <= inp3) {
      res.push(inp2)
      j++
    } else {
      res.push(inp3)
      k++
    }
  }
  return res
}