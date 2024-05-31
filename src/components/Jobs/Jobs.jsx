import PropTypes from 'prop-types';
import { IoLocation } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Jobs = ({ jobs }) => {
    const {id,logo, title, remote_or_onsite, job_type, salary,location} = jobs;
  return (
    <div className="card card-compact  pt-2 shadow-xl mt-4 bg-[#f2f2f2]">
     <div className='border-b-4 border-slate-900 pb-5'>
     <figure className='size-36 mx-auto'>
            <img src={logo} alt="" />
      </figure>
     </div>
      <div className="card-body bg-black text-[#fff]">
        <h2 className="card-title">{title}</h2>
        <div className='flex gap-4'>
            <button className='border border-slate-600 rounded font-semibold px-3 py-1'>{remote_or_onsite}</button>
            <button className='border border-blue-600 rounded font-semibold px-3 py-1'>{job_type}</button>
        </div>
        <div className='flex justify-between'>
        <div className='flex gap-1 items-center'>
        <IoLocation /> 
        <p>{location}</p>
        </div>
        <div className='flex gap-1 items-center'>
        <FaDollarSign />
        <p>{salary}</p>
        </div>
        </div>
        <div className="card-actions justify-center">
          <Link to = {`/job/${id}`}>
              <button className="btn btn-primary">Job Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Jobs.propTypes = {
    jobs: PropTypes.object.isRequired
}

export default Jobs;
