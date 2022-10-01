import { Button } from 'semantic-ui-react'

//the router and states are mostly used in the page for..
//..data/information state management
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function Home() {

  //before, during, after
  const [loginState, setLoginState] = useState("before")

  var c = "blue";

  if(loginState === "before"){
    c = "blue";
  }

  if(loginState === "during"){
    c = "green";
  }

  if(loginState === "after"){
    c = "grey";
  }

  return (
    <div>
      <Button color={c}>Click Me</Button>
    </div>
  )
}
