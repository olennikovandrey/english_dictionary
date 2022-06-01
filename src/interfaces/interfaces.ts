import { Action } from "redux";

export interface IDispatch<A extends Action<string> > {
  <T extends A>(action: T): T,
  fetchData: (word: string) => void;
}

export interface MiningsIProps {
  mean: {
      partOfSpeech: string;
      definitions: [
        {
          antonyms: [];
          definition: string;
          example: string;
          synonyms: []
        }
      ];
      synonyms: [string]
    },
}

export interface PhoneticsIProps {
  phonetics: {
    audio: string;
    license: {
      name: string;
      url: string
    };
    sourceUrls: string;
    text: string
  }
}

export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}
