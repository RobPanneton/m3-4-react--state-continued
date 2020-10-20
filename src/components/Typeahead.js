import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const Typeahead = (props) => {
  const { suggestions, handleSelect, categories } = props;

  const [value, setValue] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const matches = suggestions.filter((suggestion) => {
    const upperTitle = suggestion.title.toUpperCase();
    const upperValue = value.toUpperCase();
    let isIncluded = upperTitle.includes(upperValue);
    // if (upperTitle.includes(upperValue)) isIncluded = suggestion;
    const moreThanTwoChars = value.length >= 2;
    return moreThanTwoChars && isIncluded;
  });
  console.log(value);

  return (
    <>
      <SearchWrapper>
        <Input
          type="text"
          placeholder="Search Something"
          value={value}
          onChange={(ev) => {
            console.log(value);
            setValue(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(value);
            }

            switch (ev.key) {
              case "Enter":
                handleSelect(value);
                break;
              case "ArrowUp": {
                selectedSuggestionIndex > 0 &&
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                break;
              }
              case "ArrowDown": {
                if (selectedSuggestionIndex < matches.length - 1)
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                break;
              }
            }
          }}
        />
        <Clear onClick={() => setValue("")}>Clear</Clear>

        {matches.length >= 1 && (
          <Suggestions>
            {matches.map((match, matchIndex) => {
              const isSelected = matchIndex === selectedSuggestionIndex;
              return (
                <Suggestion
                  key={match.id}
                  isSelected={isSelected}
                  suggestion={match}
                  onClick={() => {
                    handleSelect(match.title);
                  }}
                  searchedValue={value}
                  categories={categories}
                />
              );
            })}
          </Suggestions>
        )}
      </SearchWrapper>
    </>
  );
};

const SearchWrapper = styled.div`
  margin-top: 150px;
  margin-left: 50px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  padding: 6px 6px;
  margin-right: 8px;
  width: 332px;
`;

const Clear = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 14px;
`;

const Suggestions = styled.ul`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 6px;
  max-width: 400px;
  padding: 12px 12px;
  margin-top: 6px;
`;

export default Typeahead;
