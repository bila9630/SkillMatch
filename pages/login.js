import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = createStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundImage:
            'url(https://archipendium.com/wp-content/uploads/2014/07/MSG-Headquarters-Ansicht-2.jpg)',
    },

    form: {
        height: '75vh',
        width: '35vw',
        boxShadow: '5px 5px 2px black',
        paddingTop: '10vh',
        marginTop: '30px',
        marginBottom: '50px'
    },

    title: {
        color: 'black',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useContext(AuthContext);

    function handleLogIn() {
        login(username, password)
            .then((cred) => {
                window.location.href = "/";
            })
            .catch(function (error) {
                const message = error.message
                setErrorMessage(message)
            })

    }
    const { classes } = useStyles();
    return (
        <div style={{ marginRight: 80}}>
            <div className={classes.wrapper} >
                <Paper className={classes.form} radius={0} p={30}>
                    <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                        Welcome Back
                    </Title>

                    <TextInput
                        label="Email"
                        placeholder="enter your email"
                        size="md"
                        onChange={(event) => setUsername(event.currentTarget.value)}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="enter your Password"
                        mt="md"
                        size="md"
                        onChange={(event) => setPassword(event.currentTarget.value)}
                    />
                    <Button fullWidth mt="xl" size="md" onClick={() => handleLogIn()}>
                        Login
                    </Button>
                    <p>{errorMessage}</p>
                </Paper>
            </div>
        </div>
    );
}

