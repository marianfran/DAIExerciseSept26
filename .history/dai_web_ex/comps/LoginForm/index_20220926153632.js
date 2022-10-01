import { Button, Loader } from 'semantic-ui-react'
export default function LoginForm({
    loginState="before",
    onLoginClick=()=>{}
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

    return <div>
        <h3>Login Form</h3>
        <Button color={c} onClick={onLoginClick}>
            {btn_txt}
            {loginState === "during" && <Loader active />}
        </Button>
    </div>
}