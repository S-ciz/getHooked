export function truncate(paragraph, maxNumberOfwords) {
  let wordArray = paragraph.split(" ");
  let finalparagraph = " ";

  if (wordArray.length <= maxNumberOfwords) {
    finalparagraph = paragraph;
  } else {
    for (let i = 0; i < maxNumberOfwords; i++) {
      finalparagraph += wordArray[i] + " ";
    }
    finalparagraph += "...";
  }
  return finalparagraph;
}

export function trim(txt) {
  let newArr = txt.split("");
  let newList = [];
  for (let char of newArr) {
    if (char !== " ") {
      newList.push(char);
    }
  }

  return newList.join("");
}
