import "./Search.css";

const Search = ({ item }) => {
  return (
    <section key={item.id}>
      <aside className="first_item">
        <div className="img">
          <img loading="lazy" alt="prof" src={item.profileImage} />
        </div>
        <div>
          <h4>{item.name}  {item.surname} </h4>
          <p>{item.aboutUser}</p>
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
