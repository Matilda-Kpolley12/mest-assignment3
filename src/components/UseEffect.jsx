import { useState, useEffect } from "react";
import "./useEffect.css"

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>USeEffect</h1>
      <div className="card-container">
        {users.map((user, i) => (
          <div key={i} className="card">
            <div className="img-container">
              <div className="profile-img">
                <img src="1.jpg" alt="Profile" />
              </div>
            </div>
            <div className="Profile-items">
              <h5>
                <strong>Name:</strong> {user.name}
              </h5>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Phone Number:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
