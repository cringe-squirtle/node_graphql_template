import data from '../../data/data.json'

export const CareerType = `
type Career {
  current: String
  past:[String]
}
`

export const Career = { current: data?.person?.career?.current, past: data?.person?.career?.past };