import React,{useState,useEffect} from'react'

const Advice = () => {
    const [advice, setAdvice] = useState("")
            async function fetchApi(){
        const baseurl = "https://api.adviceslip.com/advice"
        const response = await fetch(baseurl)
        .then ((ads)=> ads.json())
        const newAds =await response.slip
        setAdvice(newAds)
        console.log(newAds);
    }
     useEffect(() => {
       fetchApi();
     }, []);
  return (
    <>
      {advice && (
        <div>
          <h2> advice # <span> {advice.id} </span>  </h2>
          <p>{advice.advice} </p>
          <button onClick={fetchApi}>+</button>
        </div>
      )}
    </>
  );
}

export default Advice
