
const BASE_URL = "http://localhost:5000"
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }


   export async function postImage(imgPath)
   {
    let bodyContent = new FormData();
    bodyContent.append("image", imgPath);
    let URL_Extend = BASE_URL + '/upload'
    let response = await fetch( URL_Extend , { 
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: {}
    });

     if(!response.ok) 
        {
            alert("Failed to post image")
            return;
        }
  alert("Error uploading image")
   }
   

   