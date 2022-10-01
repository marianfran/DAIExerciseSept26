import { Button } from 'semantic-ui-react'

//the router and states are mostly used in the page for..
//..data/information state management
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function Home() {

  const r = useRouter();
  //before, during, after
  const [loginState, setLoginState] = useState("before")

  var c = "blue";
  var btn_txt = "click me"

  if(loginState === "before"){
    c = "blue";
  }

  if(loginState === "during"){
    c = "green";
  }

  if(loginState === "after"){
    c = "grey";
  }

  const HandleButton = () =>{
    if(loginState === "before"){
      setLoginState("during");
    }

    if(loginState === "during"){
      setLoginState("after");
    }

    if(loginState === "after"){
      r.push("/dashboard");
    }
    
  }

  return (
    <div>
      <Button color={c} onClick={()=>HandleButton()}
      >{btn_txt}</Button>
    </div>
  )
}
