// import logo from './logo.svg';
import "./App.css";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import React,{useState} from "react"
function App() {
  // const [count,setCount]=useState(0)
  // const [data,setData]=useState(100)
  const data = [
    {
      name: "abhishek",
      email: "abhishek@gmail",
      contact: 100,
      address: [
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
      ],
    },
    {
      name: "abhi",
      email: "abhi@gmail",
      contact: 100,
      address: [
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
      ],
    },
    {
      name: "ram",
      email: "abhishek@gmail",
      contact: 300,
      address: [
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
        { city: "katni", pincode: 483569, state: "m.p" },
      ],
    },
  ];
  // data.map((item)=>console.log(item))

  return (
    <div className="App">
      <h1>Data list</h1>
      <Table striped variant="dark" bordered>
        <tbody>
          <tr>
          <td>address</td>
          <td>S.No</td>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
          {data.map((it, i) => (
            <tr key={i}>
              <td>
                  <Table variant="dark" bordered hover>
                    <tbody>
                    <tr >
                        <td>city</td>
                        <td>pincode</td>
                        <td>state</td>
                      </tr>
                {it.address.map((em, o) => (
                      <tr key={o}>
                        <td>{em.city}</td>
                        <td>{em.pincode}</td>
                        <td>{em.state}</td>
                      </tr>
                ))}
                </tbody>
              </Table>
              </td>
              <td> {i + 1}</td>
              <td>{it.name}</td>
              <td>{it.email}</td>
              <td>{it.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//   const users = [
//     {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//           <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key={i}>
//                <td>{i+1}</td>
//             <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>
//               {/*  */}
//               <Table striped variant="dark" >
//         <tbody>
//               {
//                 item.address.map((data)=>

//                 <tr>
//                   <td>{data.hm}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//               {/*  */}
//             </td>
//           </tr>
//           )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;
