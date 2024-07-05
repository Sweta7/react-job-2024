import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing';

export interface JobType {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
}

interface JobListingsProps {
  isHome?: boolean;
}


const JobListings : React.FC<JobListingsProps> = ({isHome = false}) => {
  const jobLists = isHome? jobs.slice(0,3): jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome ?  'Recent Jobs': 'All Jobs'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobLists.map((job: JobType) => (
       <JobListing key={job.id} job={job}/>
        ))}
     
      </div>
    </div>
  </section>
  )
}

export default JobListings