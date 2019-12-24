import React, { Component } from "react";
import BusinessOverview from "./BusinessOverview";
import ContactUs from "./ContactUs";
import CardTile from "./CardTile";

class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <BusinessOverview />
                        </div>
                        <div className="col-md-4 mb-5">
                            <ContactUs />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <CardTile />
                        </div>
                        <div className="col-md-4 mb-5">
                            <CardTile />
                        </div>
                        <div className="col-md-4 mb-5">
                            <CardTile />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomeComponent;