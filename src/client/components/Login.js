import React, {useState, useContext} from 'react';
import wrapperWithContext from '../wrapperWithContext';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user] = useContext(wrapperWithContext);

  const handleName = e => setUserName(e.target.value);
  const handlePass = e => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      setError("Fill all fields!")
      
    }
    this.props.context.login(username, password)
      .then((loggedIn) => {
        if (!loggedIn) {
          setError("Invalid credentials!")
          
        }
      })
  };

  return !user? (<>
    <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Login</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={login}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="username"
                  onChange={handleName}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={handlePass}
                />
              </div>
              {error && (
                <div className="has-text-danger">{error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
    </>) : <>Logged in!!!</>;
}

export default wrapperWithContext(Login);
