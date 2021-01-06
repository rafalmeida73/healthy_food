import React from 'react';
import { Button } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import bloco_services from '../../assets/imgs/bloco_services.svg'

function Services() {
 return (
  <div className="services">
   <div className="row">
    <div className="col s7 m8 l6 imgServices">
     <img src={bloco_services} alt="Services" height="726"/>
    </div>
    <div className="col s5 m4 l6">
     <div className="serviceDesc">
      <h3>The best services ready <br /> To serve you</h3>
      <p>Far far away, behind the word mountains, far fromthe countries Vokalia and Consonantia, there live theblind texts</p>
      <p>Separated they live in Bookmarksgrove right at thecoast of the Semantics, a large language ocean.</p>
      <p>A small river named Duden flows by their place andsupplies it with the necessary regelialia.</p>
      <Button
       node="a"
       waves="light"
      >
       Know more
      </Button>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Services;