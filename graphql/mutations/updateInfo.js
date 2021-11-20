import { Person } from '../queries/person.js'
import fs from 'fs'
import data from '../../data/data.json'


export const updateInfoMutation = `
type Mutation{
    updateInfo(age: Int, gender: String): Person
}
`

export const updateInfo = (age, gender) => {
    if (data?.person?.info == null) return Person;
    // console.log(age, gender);
    data.person.info = { age, gender }
    fs.writeFile('../../data/data.json', JSON.stringify(data))
    return Person
}