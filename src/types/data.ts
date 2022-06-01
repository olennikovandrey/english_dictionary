export interface LoadedObject {
  license: {
    name: string;
    url: string
  },
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          antonyms: [];
          definition: string;
          example: string;
          synonyms: []
        }
      ];
      synonyms: [string],
    },
  ];
  phonetic: string;
  phonetics: [
    {
      audio: string;
      license: {
        name: string;
        url: string
      };
      sourceUrls: string;
      text: string
    }
  ];
  sourceUrls: [string];
  word: string
}

export interface DataState {
  wordData: [LoadedObject];
  loading: boolean;
  error: null | string;
  loaded: boolean
}

export enum DataActionTypes {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR"
}

interface FetchDataAction {
  type: DataActionTypes.FETCH_DATA
}

interface FetchDataSuccessAction {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: [
    LoadedObject
  ]
}

interface FetchDataErrorAction {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: string
}

export type DataAction = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction;
