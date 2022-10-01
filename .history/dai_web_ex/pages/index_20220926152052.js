import { Button } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react';

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
    c = "blue"
    btn_txt = "Login";
  }

  if(loginState === "during"){
    c = "green"
    btn_txt = "Logging in..";
  }

  if(loginState === "after"){
    c = "grey"
    btn_txt = "Success";
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

  const Login = async () => {
    setLoginState("during");

    //it's going to take time
    //mock of the time passing -> this code is useless, it doesn't do anything
    await new Promise(resolve=>setTimeout(resolve, 2000));

    setLoginState("after");

    //it's going to stall for 1-2 seconds
    //mock of the time passing -> this code is useless, it doesn't do anything
    await new Promise(resolve=>setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div>
      <Button color={c} onClick={()=>Login()}
      >{btn_txt}</Button>
      {loginState === "during" && <Loader active />}
    </div>
  )
}
