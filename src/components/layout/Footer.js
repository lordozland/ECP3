import React from 'react';
import 'materialize-css';

const styles = {
footer: {
    position: 'absolute',
    left:0,
    bottom:0,
    right:0,

}

}

const Footer = () => {
    return (
        <div>
            <footer className="page-footer #000000 black" style= {styles.footer}>
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">ECP</h5>
                        <p className="grey-text text-lighten-4">Thank you for getting this far!</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer