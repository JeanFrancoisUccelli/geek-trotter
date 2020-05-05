import React from 'react'
import './Footer.css'

class Footer extends React.Component{
render() {
    return (
    
  <div className ="footer">
  <div className="firstColumn">
    <a>Contactez nous</a><br/>
    <a>A propos</a><br/>
    <a>Mentions Legales </a>
</div>
<div className="secondColumn">
    <img className ="RS" src ="https://cdn.icon-icons.com/icons2/1183/PNG/512/1490133467-social-icons07_82213.png" alt='facebook'/>
    <img className ="RS" src ="https://cdn.icon-icons.com/icons2/1582/PNG/512/instagram_108043.png" alt='instagram'/>
    <img className ="RS" src ="https://upload.wikimedia.org/wikipedia/commons/f/fb/Google-plus-circle-icon-png.png" alt='google+'/>
 </div> 
 </div>
    )}
}

export default Footer