import "./Search.css";

const Search = ({ item }) => {
  return (
    <section key={item.id}>
      <aside className="first_item">
        <div className="img">
          <img loading="lazy" alt="prof" src={item.profileImage} />
        </div>
        <div className="Searching_user">
          <h4 className="Searching_user_title">{item.name}  {item.surname} </h4>
          <p className="Searching_user_text">{item.aboutUser}</p>
        </div>
      </aside>
      <aside>
        <div>
          <button>Connect</button>
        </div>
      </aside>
    </section>
  );
};

export default Search;
