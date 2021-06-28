import React , {useEffect,useState}from 'react';

const Formhooks = () => {
    const [count,setCount]=useState(1)
    useEffect(()=>{
        console.warn(count)
    },[])
    return (
        <div>

            <h1> Use Effect Hook in React JS .......{count}</h1>

            <button onClick={()=>setCount(count+1)}> Update State then useEffect called  </button>
            <button onClick={()=>setCount(count)}> Update State is not happing so useEffect is not called </button>
            <button onClick={()=>setCount(count)}> Update State is not happing so useEffect is not called </button>
        </div>
    );
};


export default Formhooks;