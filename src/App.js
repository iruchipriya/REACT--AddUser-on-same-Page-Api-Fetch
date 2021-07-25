import React, { useState, useEffect } from 'react';
import './style.css';
import Axios from 'axios';

export default function App() {
  const [entName, setentName] = useState('');
  const [entph, setentph] = useState('');
  const [listN, setList] = useState([]);

  const nameChange = e => {
    setentName(e.target.value);
  };
  const phChange = e => {
    setentph(e.target.value);
  };

  const addHandler = e => {
    e.preventDefault();
    // const request = {
    //   namep: entName,
    //   phoneNo: entph
    // };
    // const response = await Axios.post(
    //   'https://crudcrud.com/Dashboard/328d8dad4e494e8ca43867dd2312cc3d',
    //   request
    // );
    // console.log('add', reponse.data);
    // setList([
    //   ...listN,
    //   {
    //     namep: entName,
    //     phoneNo: entph
    //   }
    // ]);
    setList([
      ...listN,
      {
        namep: entName,
        phoneNo: entph
      }
    ]);
    console.log(listN);
    setentName('');
    setentph('');
  };

  const onDelete = id => {
    setList(
      listN.filter(el => {
        return el !== id;
      })
    );
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <label htmlFor="name"> Name </label>
        <input type="text" id="name" value={entName} onChange={nameChange} />

        <label htmlFor="ph"> Phone </label>
        <input type="number" id="ph" value={entph} onChange={phChange} />
        <button type="submit"> Add</button>
      </form>

      <ul>
        {listN.map((oneel, key) => {
          return (
            <>
              <li> Name : {oneel.namep} </li>
              <li> Phone : {oneel.phoneNo} </li>
              <br />
              <button
                onClick={() => {
                  onDelete(oneel);
                }}
              >
                Delete
              </button>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}
