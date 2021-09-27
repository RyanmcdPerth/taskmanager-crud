import React from 'react';
import { useState } from "react";
import TaskDataService from "./services/task.service.js";

function AddTask({ task, onSaveTask, setShowTaskAdd, ShowTaskAdd }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  // const addingData = () => {
  //   TaskDataService.create(data) 
  //   .then(response => { this.setTasks({
  //     id: response.data.id,
  //     desc: response.data.desc,
  //     date: response.data.date,
  //     remarks: response.data.remarks
  //     });
  //   }
  // };
  // try 


  const saveTask = (e) => {

    // let description = task.description;
    e.preventDefault();
    onSaveTask(desc, date, remarks)
     
      let data = { desc: desc, date: date, remarks: remarks };
    // setShowTaskAdd = !ShowTaskAdd;

    TaskDataService.create(data)
      .then(response => {
        console.log(`SAVE TASKS FUNCTION`, response)

        setDesc(response.data.desc);
        setDate(response.data.date);
        setRemarks(response.data.remarks);
      })
  };
  // }
  // catch(error)
  // {
  //   console.log(error);
  // }



  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Task Title</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Task Due Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="remarks">Task Description</label>
        <input
          type="text"
          name="remark"
          id="remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTask;
