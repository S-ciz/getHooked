
export function truncate(text, maximum) {
  //String tokenizer split
  let textArray = text.split(" ");
  let content = " ";

  if (textArray.length <= maximum) {
    content = text;
  } else {
    for (let i = 0; i < maximum; i++) {
      content += textArray[i] + " ";
    }
    content += "...";
  }

  return content;
}
