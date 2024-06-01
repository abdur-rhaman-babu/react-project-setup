import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJObToLs } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [showJob, setShowJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const hundleJobFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(showJob);

    } else if (filter === "Remote") {
      const remoteJobs = displayJobs.filter((job) => job.remote_or_onsite === "Remote");
      setDisplayJobs(remoteJobs);

    } else if (filter === "Onsite") {
      const onsiteJobs = displayJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
    );

      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const jobApplied = getAppliedJObToLs();

    if (jobs.length > 0) {
      const appliedJobs = [];
      for (const id of jobApplied) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setShowJob(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);

  return (
    <div className="mt-20 min-h-[80vh]">
      <div className="text-center font-extrabold text-4xl bg-blue-400 mb-3 p-2">
        <h1>Applied Jobs</h1>
      </div>

      <div className="flex items-center justify-between">
        <h1>
          <span>Total Applied: </span>
          {displayJobs.length}
        </h1>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => hundleJobFilter("All")}>
              <a>All</a>{" "}
            </li>
            <li onClick={() => hundleJobFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => hundleJobFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {displayJobs &&
          displayJobs.map((job) => <AppliedJob key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default AppliedJobs;
