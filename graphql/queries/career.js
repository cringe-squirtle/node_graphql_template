import { getData } from "../../data/dataUtil.js";

export const CareerType = `
type Career {
  current: String
  past:[String]
}
`;

export const Career = {
  current: getData()?.person?.career?.current,
  past: getData()?.person?.career?.past,
};
