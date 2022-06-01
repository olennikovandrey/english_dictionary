import { fetchData } from "../../store/action-creators/wordData";
import { IDispatch } from "../../interfaces/interfaces";
import React, { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchForm: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch<IDispatch<any>>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value);
  };

  const onKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(fetchData(searchValue));
      setSearchValue("");
    }
  };

  const getMeaning = () => {
    dispatch(fetchData(searchValue));
    setSearchValue("");
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return(
    <>
      <h1>Let&apos;s find out the meaning of your word!</h1>
      <form
        onSubmit={ getMeaning }
      >
        <input
          type="text"
          className="form-control input-group"
          placeholder="Enter your word in English here"
          ref={ inputRef }
          value={ searchValue }
          onChange={ changeSearchValue }
          onKeyPress={ onKeySubmit }
          required
        />
        <button
          id="submit-btn"
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={ getMeaning }
        >
          <Link to={`${ searchValue }`}>
            <div>
              Get meaning!
            </div>
          </Link>
        </button>
      </form>
    </>
  );
};

export default SearchForm;
