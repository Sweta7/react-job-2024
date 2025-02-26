import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import jobsList from "../jobs.json";

export interface JobType {
  id?: string;
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

const JobListings: React.FC<JobListingsProps> = ({ isHome = false }) => {
  //const [jobs, setJobs] = useState([]); // uncomment when using json server
  const [jobs, setJobs] = useState(jobsList.jobs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      //const apiUrl = isHome ? "api/jobs?_limit=3" : "api/jobs"; // uncomment when using json server
      const data = isHome ? jobs.slice(0, 3) : jobs;
      try {
        // const res = await fetch(apiUrl); // uncomment when using json server
        // const data = await res.json(); // uncomment when using json server
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: JobType) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;
