import { Person } from '../queries/person.js'
import fs from 'fs'
import data from '../../data/data.json'


export const updateInfoMutation = `
input UpdateInfoInput{
    age:Int
    gender: String
}
type Mutation{
    updateInfo(input: UpdateInfoInput): Person
}
`

export const updateInfo = ({ input }) => {
    if (data?.person?.info == null) return Person;
    const { age = 0, gender = "unknown" } = input
    data.person.info = { age, gender }
    fs.writeFile('../../data/data.json', JSON.stringify(data), null, () => { })
    return Person
}