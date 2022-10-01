import { Button, Loader } from 'semantic-ui-react'
export default function LoginForm({
    loginState="before"
}){
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

    return <div>
        <h3>Login Form</h3>
        <Button color={c} onClick={()=>Login()}
        >{btn_txt}</Button>
        {loginState === "during" && <Loader active />}
    </div>
}