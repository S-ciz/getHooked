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
