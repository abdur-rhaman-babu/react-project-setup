import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
import CategoryList from "../CategoryList/CategoryList";

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
       <div className="mt-24 text-center">
        <CategoryList/>
        <h1 className="text-4xl font-semibold mb-4">Featured Jobs</h1>
        <p className="font-semibold mb-2">Expro thousands of job opportunities with all the information you need  Its your future</p>
             <div className="lg:grid grid-cols-2 mx-auto max-w-5xl gap-4 ">
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