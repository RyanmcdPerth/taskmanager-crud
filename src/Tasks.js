 import React from 'react';
 import Task from './Task';
 import AddTask from './AddTask';
 import App from './App';
 import { useState } from "react";
 import { useEffect } from "react";
 import TaskDataService from "./services/task.service.js";
 
function Tasks({tasks, desc, date, remarks, setTasks, onTglStatus, showTaskEdit, setShowTaskEdit, onSaveTask, onHandleSubmit, onShowTaskEdit, id}) {
  
const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);

const onHandleChangeInput = (e) => {
  setSearchTerm(e.target.value);
};

function viewRenderer (tasks, searchTerm) {
  console.log(`View Renderer`, tasks)

  let viewObjects = [];

  tasks.map( (task, index) => {
    console.log(`Inner Task`, task, index);
    console.log(task['date']);

    if( task.description.toLowerCase().includes(searchTerm) ) {
      viewObjects.push(
        <Task task={task} setTasks={setTasks} key={task.id} index={index} onTglStatus={onTglStatus} setShowTaskEdit={setShowTaskEdit} showTaskEdit={showTaskEdit} onSaveTask={onSaveTask} onHandleChangeInput={onHandleChangeInput} onHandleSubmit={onHandleSubmit} onShowTaskEdit = {onShowTaskEdit} tasks={tasks} id={id} />
      );
    }
  });

  console.log(`View Objects`, viewObjects);

  return (
    <>
      <div><p>Total Tasks - </p>{viewObjects.length}</div>
    </>
  )

  /*
  tasks !== undefined && tasks.length > 0 && tasks.map((task, index) => (
task.desc.toLowerCase().includes(searchTerm) && <Task task={task} setTasks={setTasks} key={task.id} index={index} onTglStatus={onTglStatus} setShowTaskEdit={setShowTaskEdit} showTaskEdit={showTaskEdit} onSaveTask={onSaveTask} onHandleChangeInput={onHandleChangeInput} onHandleSubmit={onHandleSubmit} onShowTaskEdit = {onShowTaskEdit} tasks={tasks} id={id} />
      ))
      */
}

useEffect(() => {
  console.log(`Tasks List Function`, tasks);
}, [])

useEffect(() => {
  const results = tasks.filter(taskSearch =>
    taskSearch.toString().toLowerCase().includes(searchTerm)
  );
  setSearchResults(results);
}, [searchTerm]);

  return (
    <div className="row">
      <div className="col-12 text-left">
      
      </div>
      <div>
        {
            tasks !== undefined && tasks.length > 0 && tasks.map((task, index) => (
              task.desc.toLowerCase().includes(searchTerm) && <Task task={task} setTasks={setTasks} key={task.id} index={index} onTglStatus={onTglStatus} setShowTaskEdit={setShowTaskEdit} showTaskEdit={showTaskEdit} onSaveTask={onSaveTask} onHandleChangeInput={onHandleChangeInput} onHandleSubmit={onHandleSubmit} onShowTaskEdit = {onShowTaskEdit} tasks={tasks} id={id} />
                    ))
        }
      <div className="col-12"></div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onHandleChangeInput}
      />
      
      {/* {searchResults.map(item => (
          {item} ))}  */}
      </div>
      
      {/* <button className="button primary">Create New Task</button> */}
    </div>
  );
      }

export default Tasks;



// class Options extends Component {

//   // Passing down props
//   constructor(props) {
//     super(props);

//     // Binding all the functions

//     // this.handleAddOption = this.handleAddOption.bind(this);
//     this.deleteAllOptions = this.deleteAllOptions.bind(this);
//     // this.handlePick = this.handlePick.bind(this);
//     this.deleteOption = this.deleteOption.bind(this);
//     // this.handleAddOption = this.handleAddOption.bind(this);
//    // this.handleInputChange = this.handleInputChange.bind(this);
//     // Passing down props
//     this.state = {
//       options: props.options
//     };

//     // // NOT SURE WHAT THIS DOES
//     // this.state = {
//     //   error: undefined
//     // };

//   }
// // BASED ON PREVIOUS IMPLEMTATION

//   //    handleAddOption(e) {
//   //      e.preventDefault();

//   //      const option = e.target.elements.option.value.trim();
//   //      const error =  this.props.handleAddOption(option);

//   //  this.setState(() => (
//   //  { error }));

//   //  if (!error)
//   //  {
//   //  e.target.elements.option.value = '';
//   //  }
//   //  }

//   // When screen is loaded, store the option parse as a JSON object then set state as the const created assigned as the JSON Object
//   componentDidMount() {
//     try {
//       const json = localStorage.getItem('options');
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState(() => ({ options }));
//       }
//       console.log("ComponentDidMount - Am I here?")
//     }
//     catch (e) {

//     }
//   }
//   // If the previous state's options array length is not equal to current state options.length
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem('options', json);
//     }
//   }
// //When the screen is exited - print message to console
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
// // Function to delete all options
//   deleteAllOptions() {
//     this.setState(() => {
//       return {
//         options: []
//       };
//     });
//   }

// // Function to delete individual option
//   deleteOption = (optionToRemove) => {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option)
//     }))

//   }
// render(){
//   return(
//   <div>
//        <button onClick={this.props.deleteAllOptions}>Remove All</button>
//        {this.props.options.length === 0 && <p>Please add an option</p>}
//        </div>
//       //  {props.options.map((option) => (
//       //        {props.optionText} <button onClick={(e) => {
//       //          this.props.deleteOption(props.optionText);
//       //        }}>
//       //          Remove
//       //        </button>}
//       //        </div>
// )};
//   }             

// Options.defaultProps = {
//   options: []
// }

// export default Options;
// // // Add option handler
// //   handleAddOption(option) {
// //     if (!option) {
// //       return 'Please enter a valid value';
// //     }
// //     else if (this.state.options.indexOf(option) > -1) {
// //       return 'This option already exists';
// //     }

// //     // Concatenating previous state, (adding another option)
// //     this.setState((prevState) => ({ options: prevState.options.concat(option) }));

// //     this.setState((prevState) => {
// //       return {
// //         options: prevState.options.concat(option)
// //       };
// //     });
// //   }
// //   handleInputChange= (e) => {
// //     console.log(e.target.option)
// //   }
// //   // Render method for options. 
// //   render() {
// //     return (
// //       <div>
// //         {this.state.error && <p>{this.state.error}</p>}
// //         <form onSubmit={this.handleAddOption}>
// //           <input type="text" name="option" onChange={this.handleInputChange}/>
// //           <button>Add Option</button>
        
// //         </form>


     

//         {/* <Optionss
//           options={this.state.options}
//           deleteAllOptions={this.deleteAllOptions}
//           deleteOption={this.deleteOption}
//         /> */}
        
//         {/* <Options
//           handleAddOption = {this.handleAddOption} /> */}
//    //     {/* <Counter count = {2} /> */}
     
//     ///);
//  // }
//   // class Options extends React.Component {
//   //   render() {
//   //     return (
//   //       <div>
//   //         {
//   //           this.props.options.map((option) => <p key={option}>{option}</p>)
//   //         }
//   //         <button onClick={this.props.deleteAllOptions}>Remove All</button>

//   //       </div>
//   //     );
//   //   }
//   // }
        

// // const Option = (props) => {
// //   return (
// //   );
// // };
// //  class Option extends React.Component {
// //    render() {
// //      return (
// //        <div>
// //          <p>{this.props.optionText}</p>
// //        </div>
// //      );
// //    }
// //  }
// // const Optionss = (props) => {
// //   return (
// //     <div>
// //       <button onClick={props.deleteAllOptions}>Remove All</button>
// //       {this.props.options.length === 0 && <p>Please add an option</p>}
// //       {
// //         props.options.map((option) => (
// //           <div>
// //             {props.optionText} <button onClick={(e) => {
// //               this.props.deleteOption(props.optionText);
// //             }}>
// //               Remove
// //             </button>
// //             <Options
// //               key={option}
// //               optionText={option}
// //               deleteOption={props.deleteOption}
// //             />
// //           </div>
// //         ))
// //       }
// //     </div>
// //   );
// // }

