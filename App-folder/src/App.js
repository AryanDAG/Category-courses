// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
import React, { useEffect } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./components/Spinner";   

const App = () => {

  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
       let response = await fetch(apiUrl);
       let output = await response.json();
       /// output ->  
       setCourses(output.data); 
    }
    catch(error){
       toast.error("Network mai koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);
  // const [courses, setCourses] = useState(null);
  // useEffect(() => {
  //   const fetchData = async() => {
  //     try{
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       // save data into a variable

  //       setCourses(output.data)
  //       console.log("courses value updated");
  //       console.log(courses);
      
  //     }
  //     catch(error){
  //        toast.error("Something went wrong");
  //     }
  //   }

  //   fetchData();
  // },[]);


  return (
   <div className="min-h-screen flex flex-col bg-bgDark2">

   <div>
    <Navbar/>
   </div>

    <div className="bg-gr">
    <div>
    <Filter
     filterData = {filterData}
      category = {category}
      setCategory={setCategory}
     />
    </div>

    <div className="w-11/12 max-w-[1200px]
     mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
    {
      loading  ? (<Spinner/>) :  (<Cards courses={courses} category={category}/>)
    }
    </div>

    </div>


   </div>
  );
};

export default App;

// function App() {
//   const[text, setText] = useState('');
//   const[name, setName] = useState('love');

  // variation 1 -> Every Render
  // useEffect( () =>{
  //  console.log("UI RENDERING DONE");
  // });

  // variation 2 -> First Render
  // useEffect(() =>{
  //   console.log("UI RENDERING DONE");
  // },[]);

  // variation 3 -> on first Render + whenever dependency changes
  // useEffect(() => {
  //    console.log("change observed");
  // }, [name]);

  // variation 4 -> to handle unmounting of a component 
//   useEffect(() => {
//    // add event listener 
//    console.log("Listener added");

//    return () => {
//     console.log("Listener removed");
//    }
//   },[text]);

//   function changeHandler(event) {
//     setText(event.target.value);  
//       console.log(text);
//   }
//   return (
//     <div className="App">
//       <input type="text" onChange={changeHandler}></input>
//     </div>
//   );
// }

// export default App;
