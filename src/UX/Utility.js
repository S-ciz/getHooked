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

export function getCurrentDate() {
  let objDate = new Date();

  const year = objDate.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const week = weekDays[objDate.getDay()];
  const month = months[objDate.getMonth()];

  return objDate.getDate() + " " + month + " "+ year + " , " + week;
}
