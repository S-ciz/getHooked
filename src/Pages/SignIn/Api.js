// //either boxer or coach
// export function getCategorizedAgent(agent) {
//   let objAgent = null;
//   const { email, password, category, name, surname, nickname, profileImage } =
//     agent;
//   switch (category) {
//     case "boxer":
//       objAgent = new BoxerAgent(
//         email,
//         name,
//         surname,
//         nickname,
//         profileImage
//       );
//       objAgent.setPassword(password);
//       // console.log(objAgent)
//       return objAgent;
//     case "coach":
//       objAgent = new CoachAgent(
//         email,
//         name,
//         surname,
//         nickname,
//         profileImage
//       );
//       objAgent.setPassword(password);
//       return objAgent;
//   }
// }
export const BaseUrl = "http://localhost:5000/api/gethookedAgents";
//check if agent exists and call UI MESSAGE
export async function ValidateAgent(objCredential, alertMessage, alertElement) {
  let extendedUrl = `${BaseUrl}/${objCredential.email}`;
  let response = await fetch(extendedUrl);
  if (response.ok) {
    let Agent = await response.json();
    window.sessionStorage.setItem("agent", Agent.email);
    alertElement.className = "alert_success";
    alertMessage("Successfully signing in");
    setTimeout(() => {
      window.location.pathname = "/pages/home2/newsfeeds";
      updateAgentOnlineStatus("online")
    }, 2000);
  } else {
    alertElement.className = "alert_fail";
    alertMessage("Incorrect credentials, try again!!!");
  }
}

export async function getAgent(emailID) {
  let extendedUrl = `${BaseUrl}/${emailID}`;
  let response = await fetch(extendedUrl);

  if (response.ok) {
    let agent = await response.json();

    return agent;
  }
}

export async function getCurrentAgent() {
  const email = window.sessionStorage.getItem("agent");
  let potentialAgent = await getAgent(email);
  return potentialAgent;
}
export async function getAgents() {
  const response = await fetch(BaseUrl);

  if (response.ok) {
    return response.json();
  } else {
    console.error("failed to get agents");
  }
}

//update status functionality to online

export async function updateAgentOnlineStatus(status) {
  let extendurl = BaseUrl + "/status";
  const email = window.sessionStorage.getItem("agent");
  let headersList = {
    "Content-Type": "application/json",
  };

  let response = await fetch(extendurl, {
    method: "PATCH",
    body: JSON.stringify({ email, status }),
    headers: headersList,
  });

  let data = await response.text();
  //console.log(data);
}
