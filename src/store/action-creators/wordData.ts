import { DataActionTypes, DataAction } from "../../types/data";
import { Dispatch } from "react";
import axios from "axios";

export const fetchData = (word: string) => {
  return async (dispatch: Dispatch<DataAction>): Promise<void> => {
    document.title = `Dictionary (${ word })`;
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA });
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: "Sorry! Something wrong, try again!" });
    }
  };
};
