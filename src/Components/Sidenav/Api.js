import { getCurrentAgent } from "../../Pages/SignIn/Api"

export async function getUserCredentials()
{     
    return ( await getCurrentAgent() );
}


