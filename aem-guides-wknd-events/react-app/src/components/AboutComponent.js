import React, { Component } from "react";
import BusinessBanner from "./BusinessBanner";
import { ModelManager, Constants } from "@adobe/cq-spa-page-model-manager";

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
        // console.log(ModelManager.getData());
        return (
            <React.Fragment>
                <h1 className="py-5 mb-5">About Page</h1>
                {/* <BusinessBanner 
                    displayMessage = { ModelManager.modelStore._findItemData("root/responsivegrid/businessbanner").data.displayMessage }
                    text = { ModelManager.modelStore._findItemData("root/responsivegrid/businessbanner").data.text }
                    cqPath={"/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner"}/> */}
                {/* <BusinessBanner 
                    displayMessage = { ModelManager.modelStore._findItemData("/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner").data.displayMessage }
                    text = { ModelManager.modelStore._findItemData("/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner").data.text }
                    cqPath={"/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner"}/> */}
                {/* <BusinessBanner 
                    displayMessage = {ModelManager.modelStore._data[':children']['/content/wknd-events/react/about'][':items']['root'][':items']['responsivegrid'][':items']['businessbanner']['displayMessage']}
                    text={ModelManager.modelStore._data[':children']['/content/wknd-events/react/about'][':items']['root'][':items']['responsivegrid'][':items']['businessbanner']['text']}
                    cqPath={"/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner"}/> */}
                <BusinessBanner 
                    displayMessage = {this.state.displayMessage}
                    text = {this.state.text}
                    cqPath={"/content/wknd-events/react/about/jcr:content/root/responsivegrid/businessbanner"}/>
            
            </React.Fragment>
        );
    }

}

export default AboutComponent;