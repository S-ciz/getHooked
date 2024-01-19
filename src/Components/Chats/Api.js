import { getCurrentAgent, getAgent } from "../../Pages/SignIn/Api";

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
