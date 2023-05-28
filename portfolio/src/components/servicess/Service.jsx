import React from 'react' 
import './service.css' 
import ListServices from './ListServices' 
 
 
export const Services = () => { 
  return ( 
    <section id="services"> 
      <h5>What i offer</h5> 
      <h2>Services 
      <ol> 
<li><a href="network-installation-and-configuration.html">Network installation and configuration</a></li> 
<li><a href="network-security.html">Web Developing</a></li> 
<li><a href="network-monitoring.html">Graphics Design</a></li> 
<li><a href="network-troubleshooting.html">Computer Maintenance</a></li> 
<li><a href="network-training.html">Network training</a></li> 
</ol> 
      </h2> 
      
      <div className="container services__container"> 
        <ListServices /> 
      </div> 
    </section> 
  ); 
} 
export default Services;