import "./result-page.css";
import { Meanings } from "../Meanings/Meanings";
import { Phonetics } from "../Phonetics/Phonetics";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import React from "react";

const ResultPage: React.FC = () => {
  const { wordData } = useTypedSelector(state => state.data);
  return (
    <>
      <div className="result-wrapper">
        <span className="result-your-word">&quot;{ wordData[0].word }&quot;</span>
        <span className="result-phonetic">Phonetic: &quot;{ wordData[0].phonetic }&quot;</span>
        { wordData[0].phonetics.map(item =>
          <React.Fragment key={ item.audio }>
            <div className="phonetics-wrapper">
              {
                item.audio.length !== 0 ? <Phonetics key={ item.audio } phonetics={ item } /> : null
              }
            </div>
          </React.Fragment>
        )}
        { wordData[0].meanings.map(mean =>
          <div className="meanings-wrapper" key={ mean.partOfSpeech }>
            <Meanings  mean={ mean } />
          </div>
        ) }
        <a href={ wordData[0].sourceUrls.toString() }>
          <span className="result-source-url">See it on source</span>
        </a>
        <span>License: { wordData[0].license.name }.&nbsp;
          <a href={ wordData[0].license.url }>More license details</a>
        </span>
      </div>
    </>
  );
};

export default ResultPage;
