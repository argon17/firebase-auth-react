import React from 'react'
import Button from "@material-ui/core/Button";
import { auth, provider } from "../Firebase/Firebase";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      marginTop: '50%',
      justifyContent: 'center'
    },
}));

const Login = () => {

    const classes = useStyles();

    const signInWithGoogle = () => {
        auth
        .signInWithPopup(provider)
        .then((res) => {
        console.log(res);
        })
        .catch((err) => {
        console.log(err);
        });
    };
    return (
        <div className={classes.container}>
            <Button
                variant="outlined"
                color="primary"
                onClick={signInWithGoogle}
            >
            Sign In With Google
            </Button>
        </div>
    )
}

export default Login
