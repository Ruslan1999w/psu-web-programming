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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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

export default function RegisterForm() {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const sendAuthorizeData = (event) => {

    const user = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
      userAge: age,
    };

    const response = fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
        } else alert('try again ', response.status);
        return response.json();
      })
      .then((data) => {
        setUser(data.token);
      });
    if (response.ok)
      alert(`${this.state.login}, добро пожаловать! ` + response);
  }

    return (
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Дата рождения"
                    format="MM/dd/yyyy"
                    value={age}
                    onChange={setAge}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => sendAuthorizeData()}
                >
                    Sign In
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
    )
}
