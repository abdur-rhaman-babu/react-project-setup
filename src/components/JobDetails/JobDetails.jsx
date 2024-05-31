import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { SiSubtitleedit } from "react-icons/si";
import { MdCall, MdEditLocation, MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDatatoLs } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    
    const job = jobs.find((job)=> job.id === idInt)
    
    const handleAppliedJob = () =>{
        saveDatatoLs(id)
        toast('Applied successfully what you need')
    }

    const {
        title,
        location,
        salary,phone,email,
        jobDescription,
        jobResponsibilities,
        educationalRequirements,
        experiences} = job;

    return (
        <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center font-extrabold text-4xl bg-blue-400 mb-3 p-2">
                <h1>Job Details</h1>
            </div>
            <div className="lg:flex justify-between items-center gap-5 p-5">
            <div>
                <p className="font-normal text-xl mb-4"><span className="font-semibold">Job Description:</span> {jobDescription}</p>
                <p className="text-xl font-semibold mb-4"> Job Responsibilities: 
                    {
                        jobResponsibilities.map((res,idx)=> 
                        <div key={idx} className="flex items-center gap-2">
                        <FaLocationArrow />
                         <p className="font-normal">{res}</p>
                        </div>
                        )
                    }
                </p>
                <p className="font-normal text-xl mb-4"><span className="font-semibold">Educational Requirments:</span> {educationalRequirements}</p>
                <p className="font-normal text-xl mb-4"><span className="font-semibold"> Experiences:</span> {experiences}</p>
            </div>
            <div className="bg-blue-400 lg:w-2/5 p-3">
                <div className="mb-9">
                <div className="flex justify-between items-center pb-2 mb-4 border-b-2">
                <h1 className="text-2xl font-semibold">Job Details</h1>
                <Link to = '/'><i className="bg-slate-300"><FaTimes /></i></Link>
                </div>
                    <div className="flex gap-1 items-center">
                        <HiCurrencyDollar />
                        <p>{salary}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <SiSubtitleedit />
                        <h2>{title}</h2>
                    </div>
                </div>
                <div>
                <h1 className="text-2xl font-semibold pb-4 mb-4 border-b-2">Contact Information</h1>
                <div className="flex gap-1 items-center">
                <MdCall />
                <p>{phone}</p>
                </div>
                <div className="flex gap-1 items-center">
                <MdEmail />
                <p>{email}</p>
                </div>
                <div className="flex gap-1 items-center">
                <MdEditLocation />
                <p>{location}</p>
                </div>
                </div>

                <div className="mt-2 text-center cursor-pointer bg-blue-800 py-2 px-1 text-white text-xl hover:bg-blue-700 transition">
                <button onClick={handleAppliedJob}>Apply Now</button>
                </div>
            </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;