import data from '../../data/data.json'

export const InfoType = `
type Info {
  age: Int
  gender: String
}
`;

export const Info = { age: () => data?.person?.info?.age, gender: () => data?.person?.info?.gender };