function splitStringRegex(inputString: string): string[] {
  // set up an array to hold the characters
  const characters: string[] = [];
  // set up a regex to match any character
  const regex = /[\s\S]/gu;

  let match;

  // loop through the string and push each character to the array
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default splitStringRegex;
