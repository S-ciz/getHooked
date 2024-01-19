class Opinion {
  constructor(fromUser, date) {
    this.fromUser = fromUser;
    this.date = date;
  }
  getUser() {
    return this.fromUser;
  }
  getDate() {
    return this.date;
  }
}

class Like extends Opinion {
  constructor(fromUser, date) {
    super(fromUser, date);
  }
}

class Comment extends Opinion {
  constructor(text, fromUser, date) {
    super(fromUser, date);
    this.text = text;
  }
  getText() {
    return this.text;
  }
}

class Post {
  constructor(aboutPostText, imageUrl) {
    // assume post can only be image
    this.aboutPostText = aboutPostText;
    this.imageUrl = imageUrl;
    this.id = ""; // generate utility clas to generate id and timestamp
    this.timeStamp = "";
    this.likesArray = [];
    this.commentArray = [];
    this.numLikes = 0;
    this.numComments = 0;
  }

  getComments() {
    return this.commentArray;
  }
  getNumLikes() {
    return this.numLikes;
  }
  getNumComments() {
    return this.numComments;
  }
  addComment(objComment) {
    this.commentArray.push(objComment); // comment objec
  }
  addLike(objLike) {
    this.likesArray.push(objLike); //like object
  }
  removeComment(objComment) {
    this.commentArray = this.commentArray.filter((item) => item !== objComment);
  }
}

class Agent {
  #password;
  constructor(email, name, surname, nickname, profileImage) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.nickname = nickname;
    this.profileImage = profileImage;
    this.aboutUser = "";
    this.id = " ";
    this.PostsArray = null; // Post class
    this.Connections = []; //array of agentID
  }

  //getters
  getID() {
    return this.id;
  }
  getConnections() {
    return this.Connections;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.#password;
  }
  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  getNickname() {
    return this.nickname;
  }
  getProfileImage() {
    return this.profileImage;
  }
  getAboutUser() {
    return this.aboutUser;
  }

  //setters
  setID(id) {
    this.id = id;
  }
  setEmail(email) {
    this.email = email;
  }
  setPassword(password) {
    this.#password = password;
  }
  setName(name) {
    this.name = name;
  }
  setSurname(surname) {
    this.surname = surname;
  }
  setNickname(nickname) {
    this.nickname = nickname;
  }
  setProfileImage(profileImage) {
    this.profileImage = profileImage;
  }
  setAboutUser(about) {
    this.aboutUser = about;
  }
  setConnection(connection) {
    this.Connections.push(connection);
  }
}

export class BoxerAgent extends Agent {
  constructor(email, password, name, surname, nickname, profileImage) {
    super(email, password, name, surname, nickname, profileImage);
  }
}

export class CoachAgent extends Agent {
  constructor(email, password, name, surname, nickname, profileImage) {
    super(email, password, name, surname, nickname, profileImage);
  }
}
