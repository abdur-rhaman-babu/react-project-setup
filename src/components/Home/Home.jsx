import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const Home = () => {
    const [jobs, setJobs] = useState([])
    // console.log(jobs)
    useEffect(()=>{
        fetch('jobdata.json')
        .then((res)=>res.json())
        .then((data)=> setJobs(data))
    },[])

    return (
        <div className="lg:grid grid-cols-2 mx-auto max-w-5xl gap-4 mt-24">
            {
                jobs &&  jobs.slice(0,4).map((job)=><Jobs key={job.id} jobs = {job}/>)
            }
        </div>
    );
};

export default Home;