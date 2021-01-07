import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, Icon, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Recipes from '../../components/Recipes';
import Services from '../../components/Services';
import Blog from '../../components/Blog';
import Membership from '../../components/Membership';

function Home() {
  return (
    <>
      <main>
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
          <Link to="register">
            REGISTER
            </Link>
        </Navbar>


        <div className="row mainRow">
          <div className="col s12 m6 l6 mainText">
            <div>
              <h1>Ready for<br /> Trying a new <br /> recipe?</h1>
              <div className="row">
                <form onSubmit="">
                  <div>
                    <TextField id="search" label="Search healthy recipes" variant="outlined" />
                    <Button
                      node="button"
                      waves="light"
                      type="submit"
                    >
                      <Icon left>
                        search
                  </Icon>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RECIPES */}
      <Recipes />
      {/* Services */}
      <Services />
      {/* Blog */}
      <Blog />
      {/* Membership */}
      <Membership />
    </>
  );
}

export default Home;