import "./phonetics.css";
import { PhoneticsIProps } from "../../interfaces/interfaces";
import React from "react";

export const Phonetics: React.FC<PhoneticsIProps> = ({ phonetics }) => {
  return (
    <>
      <div className="phonetics-item-wrapper">
        <audio controls={ true }>
          <source src={ phonetics.audio } type="audio/mp3" />
        </audio>
        <span>{ phonetics.text }</span>
      </div>
    </>
  );
};
