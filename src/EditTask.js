import React, {Component} from 'react';
import './App.css';
import { useState } from "react";
import Tasks from './Tasks';
import Task from './Task';

function EditTask({ task, onHandleEdit }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const id = task.id;

   const handleChangeInput = (e) => {
     e.preventDefault();
     setDesc(e.target.value);
     setDate(e.target.value);
     setRemarks(e.target.value);
   };

  const handleSubmit = (e) => {
    // e.preventDefault();
     if(task) {
          onHandleEdit(desc, date, remarks);

            setDesc("");
            setDate("");
            setRemarks("");
            // console.log("I am here1")
    };

  }
    // const handleSubmit = event => {
    //     if (task) {
    //       setTask(task.concat({ desc: event.target.value, date: event.target.value }));
    //     }
    //     setDesc('');
    //     setDate('');

    //     event.preventDefault();
    //   };


    


//   const saveTask = (e) => {
//     e.preventDefault();
//     onSaveTask({ desc: desc, date: date });

//     setDesc("");
//     setDate("");
  
  return (
    <div className="card">
      <h3>Edit Task</h3>
      <form>
        <label htmlFor="desc">Task Title</label>
        <input
          type="text"
          name="desc"
          id={task.length}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          key={task.id}
        />

        <label htmlFor="date">Task Due Date</label>
        <input
          type="text"
          name="date"
          id={task.length}
          value={date}
          onChange ={(e) => setDate(e.target.value)}
          key={task.id}
        />

<label htmlFor="remarks">Task Description</label>
        <input
          type="text"
          name="remarks"
          id={task.length}
          value={remarks}
          onChange ={(e) => setRemarks(e.target.value)}
          key={task.id}
        />


        <div className="text-right">
          <button className="button-blue" key={task.id} onClick={() => handleSubmit(task)}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;

