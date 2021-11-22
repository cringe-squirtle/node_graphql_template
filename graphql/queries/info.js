import { getData } from "../../data/dataUtil.js";

export const InfoType = `
type Info {
  age: Int
  gender: String
}
`;

export const Info = {
  age: () => getData()?.person?.info?.age,
  gender: () => getData()?.person?.info?.gender,
};
