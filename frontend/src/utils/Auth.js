class Auth {
  static authenticateUser(token, email, subject, Class, name) {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("Class", Class);
    localStorage.setItem("subject", subject);

    localStorage.setItem("name", name);
  }

  static deAuthenticateUser() {
    localStorage.removeItem("token");
  }

  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static getEmail() {
    return localStorage.getItem("email");
  }
  static getName() {
    return localStorage.getItem("name");
  }
  static getClass() {
    return localStorage.getItem("Class");
  }
  static getSubject() {
    return localStorage.getItem("subject");
  }
}

export default Auth;
