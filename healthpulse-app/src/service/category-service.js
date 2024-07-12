import { myAxios } from "./helper";

export const loadAllCategories = () => {
  return myAxios.get(`/medicineCategories/`).then((respone) => {
    return respone.data;
  });
};
