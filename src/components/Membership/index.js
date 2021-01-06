import React from 'react';
import './styles.css';
import bloco_final_image from '../../assets/imgs/bloco_final_image.svg'
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-materialize';

function Membership() {
 return (
  <div className="membership">
   <div className="row">
    <div className="col s12 m6 l6 membershipContent">
     <h3>Join our membership <br /> to get special offer</h3>
     <div className="row">
      <form onSubmit="">
       <TextField id="outlined-basic" label="Seacrh healthy recipes" variant="outlined" />
       <Button
        node="button"
        waves="light"
        type="submit"
       >
        Join
      </Button>
      </form>
     </div>
    </div>
    <div className="col s12 m6 l6 membershipImg">
     <img src={bloco_final_image} alt="Membership" className="responsive-img" height="605" />
    </div>
   </div>
  </div>
 );
}

export default Membership;