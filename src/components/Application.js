import React, {useState, useEffect} from 'react'
import { db, auth } from '../Firebase/Firebase';
import { Button } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50%',
        justifyContent: 'center'
    },
    btn: {
        margin: '30px'
    }
}));

const Application = ({uid}) => {

    const classes = useStyles();
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        db.collection("users")
          .doc(uid)
          .onSnapshot((doc) => {
            setUserDetails(doc.data());
            localStorage.setItem("userDetails", JSON.stringify(doc.data()));
          });
    }, [uid]);

    const signOut = () => {
        auth
        .signOut()
        .then(() => {
        console.log("signed out");
        localStorage.clear();
        })
        .catch((err) => {
        console.log(err);
        });
    };

    return (
        <div className={classes.container}>
            {Object.keys(userDetails).map( (key, index)=>
            <Typography
                variant="subtitle1" 
                component="h2"
                align="center"
            >
            {key} : {userDetails[key]}
            </Typography>)}
            <Button
                variant="outlined"
                color="primary"
                onClick={signOut}
                className={classes.btn}
            >
            Sign Out
            </Button>
        </div>
    )
}

export default Application
