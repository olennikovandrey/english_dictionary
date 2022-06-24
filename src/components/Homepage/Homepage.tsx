/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import ResultPage from "../ResultPage/ResultPage";
import SearchForm from "../SearchForm/SearchForm";
import { fetchData } from "../../store/action-creators/wordData";
import { Loader } from "../Loader/Loader";
import { IDispatch } from "../../interfaces/interfaces";
import { ParamsUse } from "../../types/types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import "./homepage.css";

const Homepage: React.FC<RouteComponentProps> = () => {
  const { loaded, loading, error } = useTypedSelector(state => state.data);
  const dispatch = useDispatch<IDispatch<any>>();
  const params = useParams<ParamsUse>();
  const word: string = params.word;

  useEffect(() => {
    if (word !== undefined) {
      dispatch(fetchData(word));
    }
  }, [dispatch, word]);

  return(
    <>
      {
        error ? <PageNotFound /> :
          !loaded ? <SearchForm /> :
            <>
              <SearchForm />
              <ResultPage />
            </>
      }
      { loading && <Loader /> }
    </>
  );
};

export default withRouter(Homepage);
