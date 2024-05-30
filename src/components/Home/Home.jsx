import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const Home = () => {
    const [jobs, setJobs] = useState([])
    // console.log(jobs)
    const [jobslength, setJobLength] = useState(4)
    useEffect(()=>{
        fetch('jobdata.json')
        .then((res)=>res.json())
        .then((data)=> setJobs(data))
    },[])

    return (
       <div>
             <div className="lg:grid grid-cols-2 mx-auto max-w-5xl gap-4 mt-24">
            {
                jobs &&  jobs.slice(0,jobslength).map((job)=><Jobs key={job.id} jobs = {job}/>)
            }
        </div>
           <div className= {jobslength === jobs.length ? 'hidden': 'text-center mt-3'}>
           <button onClick={()=>setJobLength(jobs.length)} className="btn btn-primary">All Jobs</button>
           </div>
       </div>
    );
};

export default Home;