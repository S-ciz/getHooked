import { getCurrentAgent } from "../../Pages/SignIn/Api";
//utilities
export function getCurrentTime() {
  const HOURS =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();
  const MINUTES =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  return HOURS + ":" + MINUTES;
}

async function getAgentMessages() {
  let agent = await getCurrentAgent();
  return agent.Messages;
}

export async function getMessageListForCurrentChat(
  userTo = window.sessionStorage.getItem("currentChat")
) {
  let Messages = await getAgentMessages();
  let userFrom = window.sessionStorage.getItem("agent");
  let messageList = Messages.filter(
    (msg) =>
      (userFrom === msg.from || userFrom === msg.to) &&
      (userTo === msg.from || userTo === msg.to)
  );
  return messageList;
}

export async function postMessage(bodyContent) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let response = await fetch(
    "http://localhost:5000/sendMessage",
    {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: headersList,
    }
  );
}

