import React from "react";
import styles from "./Search.module.scss";
import {useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlices";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchValue = useSelector(state => state.filter.searchValue)

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log(e.target, 'КРЕСТИК')
    setValue("");
    dispatch(setSearchValue(''))
    // if(inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus()
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Ищу пиццу..."
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
