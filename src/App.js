// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://localhost:5000/products").then((result) => {
      result.json().then((req) => {
        // console.warn(req)
        setData(req);
        // setName(req[0].name)
        // setEmail(req[0].email)
        // setPassword(req[0].password)
        // setUserId(req[0]._id)
      });
    });
  }

  function deleteData(id) {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
    });
    getData();
  }
  function selectUpdate(id, i) {
    console.warn(data[i]);
    let user = data[i];
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setUserId(user._id);
  }
  function updateData() {
    // console.warn(name,email,password,userId)
    const value = { name, email, password, userId };
    fetch(`http://localhost:5000/products/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        getData();
      });
    });
  }

  // console.log(data)

  return (
    <div className="App">
   
        <h1>Delet Api Call</h1>
        <table border="1">
          <tbody>
            <tr>
              <td>Id</td>
              <td>S.No</td>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>Component</td>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => deleteData(item._id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => selectUpdate(item._id, i)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={updateData}>sumit</button>
      </div>
    </div>
  );
}
export default App;
