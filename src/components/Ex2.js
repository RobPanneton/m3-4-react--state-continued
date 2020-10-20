// in typeahead, above the return

const matches = suggestions.filter((suggestion) => {
  const upperTitle = suggestion.title.toUpperCase();
  const upperValue = value.toUpperCase();

  const isIncluded = upperTitle.includes(upperValue);
  return isIncluded;
});

//below clear button, inside a Suggestions wrapper
matches.map((match) => {
  return (
    <Suggestion
      key={match.id}
      onClick={() => {
        handleSelect(match.title);
      }}
    >
      {match.title}
    </Suggestion>
  );
});

const Suggestions = styled.ul``;

const Suggestion = styled.li``;

// put a "row" div to wrap everything before the suggestions

// fix your malfunctioning alert

//EX 3
// REMOVE LIST CHUNK WHEN THERE ARE NO INPUTS
// {term.length >= 2 && (
//     <SUGGESTIONS></SUGGESTIONS>
// ) }

// matches.length > 0

// && CNODITIONAL RENDERING

// && is like the first part of a ternary

// condition && run

// else you can do condition ? render: null;

//EX4
//bold the suggestion part that isn't part of the searched term

// newcomponent Suggestion.js

// pass it Suggestion
// <Wrapper></Wrapper>

// fucking loooosttt
// maybe use .split() to cut out the search value and build the rest and rejoin
// have 2 seperate variables as before and after the value, then concat back together
// OR ,use slice and take the index where the value lands and slice at that index

// category

//