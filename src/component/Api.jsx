import React,{useState,useEffect} from 'react'


const Api = () => {
    const[data, setData]=useState("")
    useEffect(()=>{
      async  function fetchApi(){
        const baseurl = "https://reqres.in/api/users"
        const response = await fetch(baseurl)
        .then((res)=> res.json())
        const newData =await response.data

        //
        setData(newData)
        console.log(newData)
        }
       fetchApi()

       //setting new data automatically
    },[])
  return (
    <>
      <h1>user data</h1>
      <div className="flex">
        {data && data.map((n) => (
            <div key={n.id}>
              <h1>first_name:{n.first_name}</h1>
              <h1>email_name:{n.email}</h1>
              <h1>last_name:{n.last_name}</h1>
              <img src={n.avatar} alt="avatar" />
            </div>
          ))}
      </div>
    </>
  );
}

export default Api
