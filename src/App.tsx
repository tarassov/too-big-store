import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useAppDispatch} from "./store";

function App() {
    const dispatch = useAppDispatch()

    const [log, setLog] = useState<Array<string>>([])
    const add = (text: string)=>{
        setLog([...log,text])
    }

    const getProject = async ()=>{
        add('loading a lot of data to the redux store');
        const newState = [];
        let i;
        for (i=0; i<100000; i++){
            newState.push(i.toString());
        }
        dispatch({type:"project", payload: {project:newState}})
        add(`data loaded: ${i} strings`)
    }
    const dummy = async ()=>{
        add('start dummy dispatch')
        const t0 = performance.now()
        dispatch({type:"hey"})
        const t1 = performance.now()
        add(`Time it takes to run the function: ${t1 - t0} ms`)
    }

    const clear = async ()=>{
        dispatch({type:"project", payload: {project:[]}})
        setLog([])
    }

  return (<>

          <div style={{display: "flex", gap: "30px", margin: "10px"}}>
              <button onClick={getProject}>Load data</button>
              <button onClick={dummy}>Dispatch empty action</button>
              <button onClick={clear}>Clear</button>
          </div>
          {log.map((l,i)=>{
              return<div key={i}>{l}</div>
          })}
      </>
  );
}

export default App;
