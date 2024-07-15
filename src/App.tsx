// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";

// const App = () => {
//   const name = 'John';
//   const x = 10;
//   const y = 20;
//   const names = ['Brad', 'Mary', 'Rose', 'Jo']
//   const loggedIn = true;
//   const styles = {color:'red', fontSize:'55px'}
//   return (
//     <>
//     <div classNameName='text-5xl'> App</div>
//     {/* <p style={{color:'red', fontSize:'25px'}}>Hello {name}</p> */}
//     <p style={styles}>Hello {name}</p>
//     <p>The sum of {x} anf {y} is {x+y}.</p>
//     <ul>
//       {names.map((name, index)=>
//         <li key={index}>{name}</li>
//       )}
//     </ul>
//     {/* {loggedIn? <h1> Hello Member</h1> : <h1>Hello Guest</h1>} */}
//     {loggedIn && <h1> Hello Member</h1>}
//     </>
//   )
// }

// export default App
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/jobs" element={<JobsPage />}></Route>
      <Route path="/jobs/:id" element={<JobPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

const App = () => {
  //   return (
  //     <>
  //     <Navbar/>
  //     <Hero title='Become a React Developer' subtitle= 'Find the React job that fits your skills'/>
  //     <HomeCards/>
  //     <JobListings/>
  //     <ViewAllJobs/>
  //     </>
  // )
  return <RouterProvider router={router} />;
};

export default App;
