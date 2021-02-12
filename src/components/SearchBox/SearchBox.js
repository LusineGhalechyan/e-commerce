import React from "react";
import styles from "./SearchBox.module.scss";
import { Form } from "react-bootstrap";

const SearchBox = (props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <Form inline>
        <input
          type="search"
          className="my-2"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      </Form>
    </div>
  );
};

export default SearchBox;
