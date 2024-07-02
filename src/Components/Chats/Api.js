import { getCurrentAgent, getAgent } from "../../Pages/SignIn/Api";
import { getMessageListForCurrentChat } from "../Chat/Api";

export async function getConnections() {
  const agent = await getCurrentAgent();
  const connections = agent.Connections;

  if (connections.length > 0) {
    let arr = [];
    for (let i = 0; i < connections.length; i++) {
      arr = [...arr, await getAgent(connections[i])];
    }
    return arr;
  }
}

async function unreadListFrom(agent_email) {
  let pendingList = await getMessageListForCurrentChat(agent_email);

  let newList = [];

  for (let item of pendingList) {
    if (item.from === agent_email && item.read === false) {
      newList.push(item);
    }
  }

  return newList;
}

export async function unreadMsg() {
  let currAgent = await getCurrentAgent();
  let newList = [];
  for (let connection of currAgent.Connections) {
    newList.push({
      chat: connection,
      msgList: (await unreadListFrom(connection)).reverse(),
    });
  }

  return newList;
}
