export function searchAgent(searchName, list, setAgent) {
  searchName = searchName.toUpperCase();
  for (let i = 0; i < list.length; i++) {
    let agentName = list[i].name.toUpperCase();

    if (agentName.indexOf(searchName) > -1) {
      setAgent(list.filter((item) => item === list[i]));
    } 
  }
}
