import React, { Component } from "react";
import BusinessBanner from "./BusinessBanner";
import { ModelManager } from "@adobe/cq-spa-page-model-manager";

class AboutComponent extends Component {
    state = {
        displayMessage: null,
        text: null
    }

    componentDidMount = () => {
        ModelManager.getData("/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner").then(data => {
            this.setState({
                displayMessage: data.displayMessage,
                text: data.text
            });
        });
    }

    render() {
        console.log('In [About.js]')
        return (
            <React.Fragment>
                <BusinessBanner className="py-5 mb-5"
                    displayMessage = {this.state.displayMessage}
                    text = {this.state.text}
                    cqPath={"/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner"}/>
            
            </React.Fragment>
        );
    }

}

export default AboutComponent;