import React, { useState } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import Cookies from 'universal-cookie';


function Register() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [birth, setBirth] = useState("");
    const [birthError, setBirthError] = useState(false);
    const [cpf, setCpf] = useState("");
    const [cpfError, setCpfError] = useState(false);
    const [cep, setCep] = useState("");
    const [cepError, setCepError] = useState(false);
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState("");
    const [complement, setComplement] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [state, setState] = useState("");
    const [uf, setUf] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const cookies = new Cookies();

    function handleSubmit(event) {
        if (name === "" || birth === "" || cpf === "" || cep === "" || number === "") {
            setError(true);
            if (name === "") {
                setNameError(true);
            };
            if (birth === "" || birth === "0000-00-00") {
                setBirthError(true);
            };
            if (cpf === "") {
                setCpfError(true);
            };
            if (cep === "") {
                setCepError(true);
            }
            if (number === "") {
                setNumberError(true);
            }
        } else if (street === "") {
            setCepError(true)
        }

        setNameError(false);
        setBirthError(false);
        setCpfError(false);
        setCepError(false);
        setNumberError(false);
        //LocalStorage
        localStorage.name = name;
        localStorage.birth = birth;
        localStorage.cpf = cpf;
        localStorage.cep = cep;
        localStorage.street = street;
        localStorage.number = number;
        localStorage.complement = complement;
        localStorage.neighborhood = neighborhood;
        localStorage.state = state;
        localStorage.uf = uf;

        // Cookies
        cookies.set('name', name, { path: '/' });
        cookies.set('birth', birth, { path: '/' });
        cookies.set('cpf', cpf, { path: '/' });
        cookies.set('cep', cep, { path: '/' });
        cookies.set('street', street, { path: '/' });
        cookies.set('number', number, { path: '/' });
        cookies.set('complement', complement, { path: '/' });
        cookies.set('neighborhood', neighborhood, { path: '/' });
        cookies.set('state', state, { path: '/' });
        cookies.set('uf', uf, { path: '/' });

        //States
        setName("");
        setBirth("0000-00-00");
        setCpf("");
        setCep("");
        setCpf("");
        setStreet("");
        setNumber("");
        setComplement("");
        setNeighborhood("");
        setState("");
        setUf("");
        setSuccess(true);
        setError(false);

        event.preventDefault();
    };

    function handleChange(e) {
        if (e.target.value.length === 8) {
            axios.get(`https://viacep.com.br/ws/${e.target.value}/json/`)
                .then(res => {
                    setStreet(res.data.logradouro);
                    setNeighborhood(res.data.bairro);
                    setState(res.data.localidade);
                    setUf(res.data.uf);
                    setCepError(false);
                })
        };

        return null
    };

    return (
        <>
            <main className="mainRegister">
                <Navbar
                    alignLinks="right"
                    brand={<Link to="/" className="brand-logo" href="#">Healthy Food</Link>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                    <Link to="/">
                        HEALTHY RECIPES
                    </Link>
                    <Link to="/">
                        BLOG
                    </Link>
                    <Link to="/">
                        JOIN
                    </Link>

                    <Link to="register">REGISTER</Link>
                </Navbar>


                <div className="row mainRow">
                    <div className="col s12 m6 l6 mainText">
                        <div>
                            <h1>Register on<br /> Healthy Food</h1>
                        </div>
                    </div>
                </div>
            </main>

            <div className="alerts">
                {cepError && (
                    <Alert className="alert" severity="error">Invalid CEP !</Alert>
                )}

                {error && (
                    <Alert className="alert" severity="error">Fill in all the fields!</Alert>
                )}

                {success && (
                    <Alert className="alert" severity="success">You have been registered!</Alert>
                )}
            </div>

            <div className="register center-align">
                <form onSubmit={handleSubmit}>
                    <div className="col s12 m12 l12">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            error={nameError}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField id="birth"
                            label="Date of birth"
                            variant="outlined"
                            type="date"
                            name="birth"
                            value={birth}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={birthError}
                            onChangeCapture={e => setBirth(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            id="cpf"
                            label="Cpf"
                            variant="outlined"
                            name="cpf"
                            value={cpf}
                            error={cpfError}
                            onChange={e => setCpf(e.target.value)}
                            inputProps={{ maxLength: 11 }}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            id="cep"
                            label="CEP"
                            variant="outlined"
                            name="cep"
                            value={cep}
                            tpe="number"
                            error={cepError}
                            onChange={e => { setCep(e.target.value); handleChange(e) }}
                            inputProps={{ maxLength: 8 }}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            disabled
                            id="street"
                            label="Street"
                            name="street"
                            variant="outlined"
                            value={street}
                            onChangeCapture={e => setStreet(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            id="number"
                            label="Number"
                            name="number"
                            value={number}
                            variant="outlined"
                            onChangeCapture={e => setNumber(e.target.value)}
                            error={numberError}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            id="complement"
                            label="Complement"
                            name="complement"
                            variant="outlined"
                            onChangeCapture={e => setComplement(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            disabled
                            id="neighborhood"
                            label="Neighborhood"
                            name="neighborhood"
                            variant="outlined"
                            value={neighborhood}
                            onChangeCapture={e => setNeighborhood(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            disabled
                            id="state"
                            label="State"
                            name="state"
                            variant="outlined"
                            value={state}
                            onChangeCapture={e => setState(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <TextField
                            disabled
                            id="uf"
                            label="UF"
                            name="uf"
                            variant="outlined"
                            value={uf}
                            onChangeCapture={e => setUf(e.target.value)}
                        />
                    </div>

                    <div className="col s12 m12 l12">
                        <Button
                            node="button"
                            waves="light"
                            type="submit"
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;