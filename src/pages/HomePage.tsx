import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
// import ListGroup from "../components/ListGroup";
// const items = ["Apple", "Banana", "Grapes", "Orange", "Pears"];

const HomePage = () => {
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  );
};

export default HomePage;
