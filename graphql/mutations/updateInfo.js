import { Person } from "../queries/person.js";
import { getData, setData } from "../../data/dataUtil.js";

export const updateInfoMutation = `
input UpdateInfoInput{
    age:Int
    gender: String
}
type Mutation{
    updateInfo(input: UpdateInfoInput): Person
}
`;

export const updateInfo = ({ input }) => {
  const { age, gender } = input;
  const data = getData()
  data.person.info = {age, gender};
  setData({ ...data });
  return Person;
};
