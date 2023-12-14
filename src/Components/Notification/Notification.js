import "./Notification.css";

//icons
import { FaUserAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
//images
import profile_img from "../../Resources/profile_lg.jpg";
import image1 from "../../Resources/boxorigin.jpeg";

function Notification() {
  //utility functions
  const formatNotification = (condition) => {
    let {category, name} = condition
    switch (category) {
      case "liked": {
        return (
          <p>
            <a href="#3">{name} </a> liked{" "}
            <a href="#32"> Your post </a>
          </p>
        );
      }
      case "commented": {
        return (
          <p>
            <a href="#3">{name} </a> commented on{" "}
            <a href="#32"> Your post </a>
          </p>
        );
      }
      case "connect": {
        return (
          <p>
            <a href="#3">{name} </a> wants to{" "}
            <a href="#32"> connect </a>
          </p>
        );
      }

      default: {
        return  "default"
      }
    }
  };
  const getIcon = (conditionIcon) => {
    switch (conditionIcon) {
      case "liked": {
        return <FaThumbsUp size={20} color="var(--blue)" />;
      }
      case "commented": {
        return <FaComment size={20} color="purple" />;
      }
      case "connect": {
        return <FaUserAlt size={20} color="orangered" />;
      }
      default: 
      {
        return "default"
      }
    }
  };

  //raw data for design purpose
  const notification = [
    {
      id: 1,
      src: image1,
      name: "Andrew Thonsom",
      category: "commented",
    },
    {
      id: 2,
      src: profile_img,
      name: "Peter Ashton",
      category: "liked",
    },
    {
      id: 3,
      src: image1,
      name: "Benjamin Craig",
      category: "liked",
    },
    {
      id: 4,
      src: profile_img,
      name: "Bethony Adams",
      category: "connect",
    },
  ];
  return (
    <div className="notification">
      <div className="notify_wrapper">
        <h1>Notifications</h1>

        {notification.map((notify) => (
          <section key={notify.id} className="notify">
            <div className="notify_profile">
              <aside className="profile">
                <div>
                  <img alt="profile" loading="lazy" src={notify.src} />
                </div>

                <div className="notify_category">
                  {getIcon(notify.category)}
                </div>
              </aside>

              <aside>
                <div className="notify_description">
                  {formatNotification({
                    name: notify.name,
                    category: notify.category,
                  })}
                </div>
              </aside>
            </div>

            <div className="notify_chat_status">
              <span style={{ backgroundColor: "green" }}></span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Notification;
