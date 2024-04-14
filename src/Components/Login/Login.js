import React, { useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button } from '@mui/material'
import styled from '@emotion/styled';
import {SignUpApi, LoginApi} from "./Api"
import { DataContext } from '../../App';
// import { DataContext } from '../ContectAPI/Context';

const FullBox = styled(Box)`
width:100vh ;
height:70vh;
display:flex;
`
const RightBox=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
height:78.9%;
width:32%;
padding:45px 35px;
& > p, & > h5{
    color:#ffffff;
    font-weight:600;
}
`
const Wrapper = styled(Box)`
padding :25px 35px;


flex:1;

`
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
padding:8px 40%;
color:#fff;
`
const OtpButton=styled(Button)`
padding:8px 31%;
text-transform:none;
white-space:nowrap;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`
const CreateAccount=styled(Typography)`
margin-top:20px;
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer
`

function Login(props) {
    const [account, setAccount] = useContext(DataContext)
    
    const initailValues={
        login:{
            view:"login",
            heading:"Login",
            subHeading:"Get access to your Orders, Wishlist and Recommendations"
        },
        signUp:{
            view:"signup",
            heading:"Looks like you're new here!",
            subHeading:"Sign up with your mobile number to get started"
        }
    }
    
    const[changeSign , setChangeSign]=useState(initailValues.login)
    const[emailerror , setemailerror]=useState(false)
    const[passworderror , setpassworderror]=useState(false)

    const signUpInitialValues={
        Firstname:"",
        Lastname:"",
        Username:"",
        Email:"",
        Password:"",
        Phone:"",
    }
    const[SignUp , setSignIn]=useState(signUpInitialValues)

    const LoginInitalValues={
        email:"",
        password:""
    }

    const [Login, setLogin]=useState(LoginInitalValues)

    function SetOpenBox() {
        props.sendSetOpenBox(false)
    setChangeSign(initailValues.login)
   }
   
   function handleSIgnIn(){
    setChangeSign(initailValues.signUp)
   }

function handleSignUp(e){
   setSignIn({...SignUp, [e.target.name]:e.target.value })
//    console.log(SignUp)
}

function handleChange(e){
    setLogin({...Login, [e.target.name]:e.target.value})
}

async function handleLogin(){
    console.log(Login)
    let response = await (LoginApi(Login))
    if(response.data.status==="success"){
    SetOpenBox();
    setAccount(response.data.user.Firstname)
    }else if(response.data==="password not matched"){
        setpassworderror(true)
        setemailerror(false)


    }else if(response.data==="no user found"){
        setemailerror(true)
        setpassworderror(false)

}
}


async function signUpUser(){
    // console.log(SignUp)
    let response = await SignUpApi(SignUp)
    if(!response) return;
    SetOpenBox();
    setAccount(SignUp.Firstname)
}

    return (
        <div>
            <Dialog open={props.SendOpenBox} onClose={SetOpenBox} PaperProps={{sx:{maxWidth:"unset"}}}>
                <FullBox>
                    <RightBox>
<Typography variant='h5'>{changeSign.heading}</Typography>
<Typography style={{marginTop:20}}>{changeSign.subHeading}</Typography>
                    </RightBox>

                 { changeSign.view==="login"?
                   <Wrapper>
                    {emailerror && <Typography style={{fontStyle:"italic", color:"#ff6161", fontSize:14}}>Invalid email address</Typography>}
                        <TextField style={{marginTop:"9px", width:"100%"}} onChange={(e)=>{handleChange(e)}} variant='standard' name="email" label="Enter Email/Mobile number" />
                     
                        <TextField style={{marginTop:"9px", width:"100%"}} onChange={(e)=>{handleChange(e)}} variant='standard' name="password" label="Enter Password" />
                    {passworderror && <Typography style={{fontStyle:"italic", color:"#ff6161", fontSize:14}}>Incorrect password</Typography>}
                        <Typography style={{marginTop:"9px", fontSize:"12px", color:"#878787"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <LoginButton style={{marginTop:"9px"}} onClick={handleLogin}>Login</LoginButton>
                        <Typography style={{marginTop:"9px", textAlign:"center"}}>OR</Typography>
                        <OtpButton style={{marginTop:"9px"}} >Request OTP</OtpButton>
                        <CreateAccount onClick={handleSIgnIn} >New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>                        
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Firstname" label="Enter Firstname" />
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Lastname" label="Enter Lastname" />
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Username" label="Enter Username" />
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Email" label="Enter Email" />
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Password" label="Enter Password" />
                        <TextField style={{marginTop:"7px", width:"100%"}} onChange={(e)=>{handleSignUp(e)}} variant='standard' name="Phone" label="Enter Phone" />
                       
                        <LoginButton style={{marginTop:"20px"}} onClick={signUpUser}>Continue</LoginButton>
                    </Wrapper>

                    }

                </FullBox>
            </Dialog>
        </div>
    )
}

export default Login