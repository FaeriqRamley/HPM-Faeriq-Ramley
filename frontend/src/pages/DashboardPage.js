import React,{useEffect} from 'react'

function DashboardPage() {

    useEffect(()=>{
        console.log('hi');
    },[])
    return (
        <div>
            This is dashboard
        </div>
    )
}

export default DashboardPage;
