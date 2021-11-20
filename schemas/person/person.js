import { YumiSchema, Yumi } from './yumi.js'
import { CareerSchema, Career } from './career.js'
import { InfoSchema, Info } from './info.js';

export const PersonSchema = `
${CareerSchema}
${InfoSchema}
${YumiSchema}
type Person {
    career: Career
    info:Info
    yumi: Yumi
}
`;

export const Person = { yumi: () => Yumi, career: () => Career, info: () => Info };