import React from 'react';
import './header.css';
import logo from './HODLINFO_LOGO.png';
import tele from './download.png';

class Header extends React.Component {

    render() {
        return(
            <div style={{ padding: "20px 30px 0px 30px" }}>
                <div className="h-main">
                    <div className="h-left">
                        <a href="/">
                            <div className="h-l-i">
                                <img src={logo} className="fiat-logo" style={{ padding: "10px" }} />
                            </div>
                        </a>
                        <p className="h-l-t">
                            Powered By 
                            <a className="footer-text-link" style={{ color: "rgb(61, 198, 193)"}}> 
                                Finstreet
                            </a> 
                        </p>
                    </div>
                    <div className="h-middle">
                        <div className="btn-group">
                            <button type="button" className="header-button btn-h">
                                INR
                            </button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="header-button btn-h">
                                BTC
                            </button>
                        </div>
                        <div className="btn-group">
                            <a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn" type="button" aria-haspopup="true" aria-expanded="false" class="header-button btn btn-secondary">
                                BUY BTC
                            </a>
                        </div>
                    </div>
                    <div className="h-right">
                        <div className="h-right1">
                            <div className="Progressbar">
                                <svg className="CircularProgressbar" viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                                    <path class="CircularProgressbar-trail" d="
                                        M 50,50
                                        m 0,-46
                                        a 46,46 0 1 1 0,92
                                        a 46,46 0 1 1 0,-92" 
                                        stroke-width="8" fill-opacity="0" >    
                                    </path>
                                    <path className="CircularProgressbar-path" d="
                                        M 50,50
                                        m 0,-46
                                        a 46,46 0 1 1 0,92
                                        a 46,46 0 1 1 0,-92
                                        " stroke-width="8" fill-opacity="0">

                                    </path>
                                    <text className="CircularProgressbar-text" x="50" y="50">22
                                    </text>
                                </svg>
                            </div>
                            <a class="color-white" href="/connect/telegram">
                                <div class="telegram-header">
                                    <div class="d-inline-block">
                                        <img src={tele} class="telegram-logo"/>
                                    </div>
                                    <div class="text-nowrap d-inline-block color-white">
                                        Connect Telegram
                                    </div>
                                </div>
                            </a>
                            
                            <div className="theme-btn">
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider">
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
}


export default Header;