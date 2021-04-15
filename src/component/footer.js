import React from 'react';
import reactDom from 'react-dom';
import './footer.css';

class Footer extends React.Component {


    render() {
        return (
            <div className="footer">
                <div className="f-main">
                    <div className="f-text">
                        Copyright © 2019
                    </div>
                    <div className="f-text">
                        HodlInfo.com
                    </div>
                    <div className="f-text">Developed By 
                        <a rel="nofollow" style={{color:"#3dc6c1"}}> QuadBTech</a>
                    </div>
                    <div className="f-text pointer" style={{marginLeft:"auto"}}>
                        <a href="mailto:support@hodlinfo.com" >Support</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer;