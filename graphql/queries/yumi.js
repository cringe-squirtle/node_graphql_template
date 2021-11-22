import { getData } from "../../data/dataUtil.js";

export const YumiType = `
type Yumi {
  like: [String],
  dislike: [String]
}
`;
export const Yumi = {
  like: () => getData()?.person?.yumi?.like,
  dislike: () => getData()?.person?.yumi?.dislike,
};
