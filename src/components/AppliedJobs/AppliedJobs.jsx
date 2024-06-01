import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJObToLs } from "../../Utility/localstorage";
// import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    // const [showJob, setShowJob] = useState([])
    
    useEffect(()=>{
        const jobApplied = getAppliedJObToLs()
        if(jobs.length > 0){
            const appliedJobs = [];
            for(const id of jobApplied){
                const job = jobs.find((job)=> job.id === id)
                if(job){
                    appliedJobs.push(job)
                }
            }
            console.log(jobApplied, appliedJobs, jobs)
        }
        
    },[])

    return (
        <div className="h-[80vh] mt-20">
            <div className="text-center font-extrabold text-4xl bg-blue-400 mb-3 p-2">
            <h1>Applied Jobs</h1>
            {/* {
                showJob && showJob.map((job,index)=> <AppliedJob key={index} job = {job}/>)
            } */}
            </div>
        </div>
    );
};

export default AppliedJobs;