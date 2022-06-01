import "./meanings.css";
import { MiningsIProps } from "../../interfaces/interfaces";
import React, { useState } from "react";

export const Meanings: React.FC<MiningsIProps> = ({ mean }) => {
  const [ showAll, isAllShown ] = useState(false);

  return (
    <>
      <div className="meanings-item">
        { showAll ?
          <>
            <div className="meanings-speech-button-wrapper">
              <span className="meanings-part-of-speech">Part of speech: { mean.partOfSpeech }</span>
              <button
                type="button"
                className="btn btn-primary speech-btn"
                onClick={ () => isAllShown(!showAll) }>
                Hide
              </button>
            </div>
            { mean.definitions.map(defin =>
              <div className="meanings-definition-item" key={ defin.definition }>
                <span className="meanings-definition italic"><p>Definition:&nbsp;</p> { defin.definition }</span>
                { defin.example && <span className="meanings-definition-example italic"><p>Example:&nbsp;</p> { defin.example }</span> }
                { defin.synonyms.length !== 0 && <span className="meanings-definition-synonyms italic"><p>Synonyms:&nbsp;</p> { defin.synonyms.join(", ") }</span> }
                { defin.antonyms.length !== 0 && <span className="meanings-definition-synonyms italic"><p>Antonyms:&nbsp;</p> { defin.antonyms.join(", ") }</span> }
              </div>
            )
            }
          </> :
          <div className="meanings-speech-button-wrapper">
            <span className="meanings-part-of-speech">Part of speech: { mean.partOfSpeech }</span>
            <button
              type="button"
              className="btn btn-primary speech-btn"
              onClick={ () => isAllShown(!showAll) }>
              Show more
            </button>
          </div>
        }
      </div>
    </>
  );
};
