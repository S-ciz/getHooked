import "./Search.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

//image for demo
import IMG1 from "../../Resources/fwi.png"
import IMG2 from "../../Resources/box.jpg"
import IMG3 from "../../Resources/cal.jpg"
import IMG4 from "../../Resources/lift.jpg"
const Search = () => {

    const dummyArr =[ 
        {
            id: 0,
            name: "The hitman Muyumba",
            about: "This is the main man from the drc...",
            src: IMG1
        },
        {
            id: 1,
            name: "Samantha Jordan Mkhize",
            about: "Who runs the world? Girls First!",
            src: IMG2
        },
        {
            id: 2,
            name: "Black Cobra, Adams",
            about: "Who lives, dies tells the story",
            src: IMG3
        },
        {
            id: 4,
            name: "Daving Khumalo",
            about: "Surviving High school",
            src: IMG4
        }
      
    ]


  return (
    <div className="search_wrapper">
      <div className="search_content">
        <header>
          <div>
            <h1>Search</h1>
          </div>
          <div className="search_input">
            <Input />
          </div>
        </header>

       { dummyArr.map(item=>( 
        <Link to= {"/pages/home2/search/search_item"}> 
          <section key={item.id}>
          <aside className="first_item">
            <div className="img">
              <img alt="search_img" src={item.src} />
            </div>
            <div>
              <h4>{item.name}</h4>
              <p>{item.about}</p>
            </div>
          </aside>
          <aside>
            <div>
              <button>Connect</button>
            </div>
          </aside>
        </section> 
        </Link>)) }
      </div>
    </div>
  );
};

export default Search;
