import data from '../../data/data.json'

export const YumiType = `
type Yumi {
  like: [String],
  dislike: [String]
}
`
export const Yumi = { like: () => data?.person?.yumi?.like, dislike: () => data?.person?.yumi?.dislike }