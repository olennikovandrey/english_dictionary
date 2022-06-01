import { DataAction, DataActionTypes, DataState } from "../../types/data";

const initialState: DataState = {
  wordData: [
    { license: {
      name: "",
      url: ""
    },
    meanings: [
      {
        partOfSpeech: "",
        definitions: [
          {
            antonyms: [],
            definition: "",
            example: "",
            synonyms: []
          }
        ],
        synonyms: [""]
      },
    ],
    phonetic: "",
    phonetics: [
      {
        audio: "",
        license: {
          name: "",
          url: ""
        },
        sourceUrls: "",
        text: ""
      }
    ],
    sourceUrls: [""],
    word: "" }
  ],
  error: null,
  loading: false,
  loaded: false
};


export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
  case DataActionTypes.FETCH_DATA:
    return {
      ...state,
      loading: true
    };
  case DataActionTypes.FETCH_DATA_SUCCESS:
    return {
      wordData: action.payload,
      error: null,
      loading: false,
      loaded: true
    };
  case DataActionTypes.FETCH_DATA_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: false,
      loaded: false
    };
  default:
    return state;
  }
};
