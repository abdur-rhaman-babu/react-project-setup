const getAppliedJObToLs = () =>{
    const storageAppliedJob = localStorage.getItem('job_applications')
    if(storageAppliedJob){
        return JSON.parse(storageAppliedJob)
    }
    return []
}

const saveAppliedJobToLs = (id) =>{
    const storageAppliedJob = getAppliedJObToLs();

    const exists = storageAppliedJob.find((jobId)=> jobId === id) 

    if(!exists){
        storageAppliedJob.push(id)
        localStorage.setItem('job_applications', JSON.stringify(storageAppliedJob))
    }
}

export {getAppliedJObToLs, saveAppliedJobToLs}