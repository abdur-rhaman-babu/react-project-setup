import { FaDollarSign } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  //   console.log(job);
  const {
    id,
    title,
    companyName,
    remote_or_onsite,
    job_type,
    location,
    salary,
    logo,
  } = job;

  return (
   
      <div className="lg:flex items-center justify-between bg-slate-100 mb-3 p-4">
        <div className="size-32">
          <img src={logo} alt="" />
        </div>

        <div>
          <h1 className="font-semibold text-2xl font-serif">{title}</h1>
          <h2 className="font-semibold text-xl">{companyName}</h2>
          <div className="flex gap-4 my-3">
            <button className="border border-slate-600 rounded font-semibold px-3 py-1">
              {remote_or_onsite}
            </button>
            <button className="border border-blue-600 rounded font-semibold px-3 py-1">
              {job_type}
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <IoLocation />
              <p>{location}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaDollarSign />
              <p>{salary}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded font-semibold text-[#fff] px-3 py-2">
          <Link to={`/job/${id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
   
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default AppliedJob;
