import React, {useState} from 'react';
import './comp_style/loginform.scss';
import {setUser} from "../actions/UserActions";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import { Modal, Space } from 'antd';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterForm(data) {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [successModalVisibility, setSuccesModalVisibility] = useState(false);
  const [age, setAge] = useState('');
  const {history} = data;
  console.log(history);
  const sendAuthorizeData = (event) => {
    const user = {
      login: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      userAge: age,
    };


    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 201) {
            console.log('response.status', response.status)
            // setSuccesModalVisibility(true);
            history.push('/')
        } else alert('Пользователь уже существует', response.status);
        return response.json();
      });
  }
    function success() {
        Modal.success({
            content: 'Вы успешно зарегестрировались',
        });
    }

    return (
        <div>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => {
                        setEmail(e?.target?.value);
                    }
                    }
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                        setPassword(e?.target?.value);
                    }
                    }
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="firstName"
                    label="First Name"
                    type="firstName"
                    id="firstName"
                    onChange={(e) => {
                        setFirstName(e?.target?.value);
                    }
                    }
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="lastName"
                    label="Last name"
                    type="lastName"
                    id="lastName"
                    onChange={(e) => {
                        setLastName(e?.target?.value);
                    }
                    }
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => sendAuthorizeData()}
                >
                    Register now
                </Button>
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                        <Link to="/login" variant="body2">
                            {"Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
        </div>
    )
}
