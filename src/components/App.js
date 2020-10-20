import React from "react";
import GlobalStyles from "./GlobalStyles";
import data from "../data";
import Typeahead from "./Typeahead";
import styled from "styled-components";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <TypeaheadWrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={(value) => {
            window.alert(value);
          }}
          categories={data.categories}
        />
      </TypeaheadWrapper>
    </>
  );
};

const TypeaheadWrapper = styled.div``;

export default App;
