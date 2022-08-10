export function isValid(letter) {
  const letterToProcess = [...letter];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];
  const parensStack = [];

  for (const index in letter) {
    const char = letter[Number(index)];
    const next = letter[Number(index) + 1];

    // if we find a closing bracket, and the stack is empty, then
    // this state is invalid.
    if (closingBrackets.includes(char) && parensStack.length === 0) {
      parensStack.push("INVALID");
      continue;
    }

    // if we find an opening bracket and it´s immediately followed  by
    // a closing bracket, this state is invalid.
    if (openingBrackets.includes(char) && closingBrackets.includes(next)) {
      parensStack.push("INVALID");
      continue;
    }

    if (openingBrackets.includes(char)) {
      parensStack.push(char);
    }

    if (closingBrackets.includes(char)) {
      parensStack.pop();
    }

    letterToProcess.shift();
  }

  return parensStack.length === 0 && letterToProcess.length === 0;
}
