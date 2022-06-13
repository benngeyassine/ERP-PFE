import axios from "axios";
import { costumers } from "../actions/costumers";
const url = "http://localhost:5000";

const getCostumer = () => {
  axios({
    method: "get",
    url: url,
    headers: {},
  })
    .then((res) => {
      console.log({ res });
      dispatch(costumers(res?.data));
    })
    .catch((err) => {
      console.log({ err });
    });
};
