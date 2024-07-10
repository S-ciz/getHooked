import { getCurrentAgent } from '../../Pages/SignIn/Api';
import { updateAgentAttributes } from '../../Pages/SignIn/Api';
import {getCurrentDate} from '../../UX/Utility'
const BASE_URL = "http://localhost:5000"
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }

   export async function postFeed(imgFile, description = '')
   {
    
    let imgObject = await postImage(imgFile);
    let imgName = imgObject.filename
   
      let agent =  await getCurrentAgent();
     
      console.log(agent)

      let content = {
        id: '...',
        category: "video",
        src: BASE_URL + "/Images/" + imgName,
        timeStamp:  getCurrentDate(),
        text: description,
        likes: 0,
        comments: 0,
        commentsArr: []
      }
      let response = await updateAgentAttributes(agent.email, { type:"addPost", content: content })
      let data = await response().text();
      console.log(data);
   }

   export async function postImage(imgPath)
   {
    let bodyContent = new FormData();
    bodyContent.append("image", imgPath);
    let URL_Extend = BASE_URL + '/upload'
    let response = await fetch( URL_Extend , { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.json();
  
     if(!response.ok) 
        {
            alert("Failed to post image")
        }
    
        return data;
   }
   

   