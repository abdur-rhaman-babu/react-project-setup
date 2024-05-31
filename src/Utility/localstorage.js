const getDatafromLs = () =>{
    const storedData = localStorage.getItem('job_applications')
    if(storedData){
        return JSON.parse(storedData)
    }
    return []
}

const saveDatatoLs = (id) =>{
    const storedData = getDatafromLs()
    const exist = storedData.find((jobId)=> jobId === id)
    if(!exist){
        storedData.push(id)
        localStorage.setItem('job_applications', JSON.stringify(storedData))
    }
}

export {getDatafromLs, saveDatatoLs}