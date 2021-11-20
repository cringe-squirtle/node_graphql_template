
export const YumiSchema = `
type Yumi {
  like: [String],
  dislike: [String]
}
`
export const Yumi = {like:()=>['gamble', 'game'], dislike:()=>['study', 'pain']}