import { YumiType, Yumi } from './yumi.js'
import { CareerType, Career } from './career.js'
import { InfoType, Info } from './info.js';

export const PersonType = `
${CareerType}
${InfoType}
${YumiType}
type Person {
    career: Career
    info:Info
    yumi: Yumi
}
`;


export const PersonQuery = `
type Query{
    person: Person
}
`

export const Person = { yumi: () => Yumi, career: () => Career, info: () => Info };