import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Todos from "./components/Todos.js";
import Addtodo from "./components/Addtodo.js";
import About from "./components/About.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("i am on delete of todo:", todo);
    // cannot use this method to delete object in react
    // let index=todos.indexOf(todo);
    //  console.log(index)
    //  todos.splice(index,1)
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    //setTodos is used to update the value of todos
    //filter(): This method returns all the elements of the array that satisfy the condition
    // specified in the callback function.
    //in this scenario filters the todos array and eliminate the todo that is passed to
    //the ondelete function
    // localStorage.setItem("todos",JSON.stringify(todos))
  };
  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let srno;
    if (todos.length === 0) {
      srno = 1;
    } else {
      let index = todos.length - 1;
      srno = todos[index].Srno + 1;
    }
    const mytodo = {
      Srno: srno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };
  const [todos, setTodos] = useState(
    initTodo
    /*  [
    {
      Srno:1,
      title:"Go to the College",
      desc:"To learn and polish your personlity"
    },
    {
      Srno:2,
      title:"Go to the Gym",
      desc:"To do exercise and workout to boost youslef"
    },
    {
      Srno:3,
      title:"Go to the market",
      desc:"To  buy clothes fro your self"
    }
  ] */
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //whenever todos array effected useEffect hooks runs the arrow function

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchbar={true} />
        <Routes>
          <Route
            exact
            path="/"
            element={
            <>
            <Addtodo addtodo={addtodo} />
            <Todos todos={todos} ondelete={ondelete} />
            </>
            }
          ></Route>
          <Route exact path="/about"
          element={<About/>}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
