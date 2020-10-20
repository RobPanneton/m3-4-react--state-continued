import React from "react";
import styled from "styled-components";

const Suggestion = (props) => {
  const { isSelected, onClick, suggestion, searchedValue, categories } = props;
  console.log(isSelected);

  const upperValue = searchedValue.toUpperCase();
  const upperSuggestion = suggestion.title.toUpperCase();

  const startIndex = upperSuggestion.indexOf(upperValue);
  const endIndex = startIndex + upperValue.length;

  const regText = suggestion.title.slice(0, endIndex);
  const boldText = suggestion.title.slice(endIndex);

  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      <Span>
        {regText}
        <Bold>{boldText}</Bold> in{" "}
        <Genre>{categories[suggestion.categoryId].name}</Genre>
      </Span>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 6px 6px 6px 6px;
  font-size: 16px;
  line-height: 20px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#fffbe6" : "transparent"};

  &: hover {
    background-color: #fffbe6;
  }
`;
const Span = styled.span``;

const Bold = styled.span`
  font-weight: bold;
`;

const Genre = styled.span`
  color: purple;
  font-style: italic;
`;
export default Suggestion;
