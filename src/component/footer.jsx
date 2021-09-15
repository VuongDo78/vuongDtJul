import React from 'react';

function Footer(props) {
    return (
        <div className="footer  bg-dark text-light">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-3 col-sm-6 mt-3 ">
                        <h5>Our Address</h5>
                        <address className="text-light">
                            121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-sm-6 col-md-4 mt-3 mb-5">
                        <div className="col-md-12 col-sm-12 ">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 mt-5 ">
                            <div className="text-center">
                                <p>© Copyright 2021 Funix University</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;