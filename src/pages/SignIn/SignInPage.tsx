import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigateLink from "../../components/common/NavigateLink";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { isEmpty } from "../../util/commonUtil";
import { useNavigate } from "react-router-dom";
import TextBox from "../../components/common/TextBox";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    if (isEmpty(user.email) || isEmpty(user.password)) return;

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("error@@@", err.me));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextBox
              properties={{
                name: "email",
                margin: "normal",
                label: "Email",
                type: "email",
                autoFocus: true,
                placeholder: "Email",
                isFullWidth: true,
              }}
            />
            <TextBox
              properties={{
                name: "password",
                margin: "normal",
                label: "Password",
                type: "password",
                autoFocus: true,
                placeholder: "Password",
                isFullWidth: true,
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavigateLink path={"/signup"} color={"#1976d2"}>
                  회원 가입하지 않으셨나요? 회원가입
                </NavigateLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

////////
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import InputBox from "../../components/SignIn/InputBox";
// import ButtonBox from "../../components/SignIn/ButtonBoc";

// const SignInPage = () => {
//   const navigate = useNavigate();
//   const emailAttr = {
//     testIdName: { "data-testid": "email-input" },
//     labelName: "이메일",
//     inputType: "text",
//     placeholder: "이메일을 입력해주세요.",
//     helperText: "@를 포함한 이메일을 작성해주세요.",
//   };
//   const pwdAttr = {
//     testIdName: { "data-testid": "password-input" },
//     labelName: "비밀번호",
//     inputType: "password",
//     placeholder: "비밀번호를 입력해주세요.",
//     helperText: "비밀번호는 8자리 이상입니다.",
//   };
//   const [emailVal, setEmailVal] = useState("");
//   const [pwdVal, setPwdVal] = useState("");
//   const [isDiableBtn, setIsDisableBtn] = useState(true);
//   const [isRememberChecked, setIsRememberChecked] = useState(false);
//   const rememberBtnHandle = (e: any) => setIsRememberChecked(e.target.checked);
//   const validCheck = () => {
//     if (!/[@]/.test(emailVal)) return;
//     if (pwdVal.length < 8) return;
//     actionSignIn();
//   };
//   const actionSignIn = async () => {
//     const params = {
//       email: emailVal,
//       password: pwdVal,
//     };
//   };
//   useEffect(() => {
//     if (/[@]/.test(emailVal) && pwdVal.length >= 8) {
//       setIsDisableBtn(false);
//     } else {
//       setIsDisableBtn(true);
//     }
//   }, [emailVal, pwdVal]);
//   useEffect(() => {
//     if (localStorage.getItem("remember_user_id")) {
//       setIsRememberChecked(true);
//     }
//   }, []);

//   return (
//     <Box component="form">
//       <Box sx={{}}>
//         <Typography component={"strong"} sx={{ fontSize: "2rem" }}>
//           로그인
//         </Typography>
//       </Box>
//       <InputBox
//         attr={emailAttr}
//         targetName={"email"}
//         setFunc={setEmailVal}
//         emailVal={emailVal}
//       />
//       <InputBox attr={pwdAttr} targetName={"pwd"} setFunc={setPwdVal} />
//       <FormGroup sx={{ flexDirection: "row" }}>
//         <FormControlLabel
//           label="아이디 기억하기"
//           control={
//             <Checkbox
//               size="small"
//               onClick={rememberBtnHandle}
//               checked={isRememberChecked}
//             />
//           }
//         />
//       </FormGroup>
//       <Box component="div">
//         <ButtonBox checkValueFunc={validCheck} isDiableBtn={isDiableBtn} />
//       </Box>
//     </Box>
//   );
// };

// export default SignInPage;
