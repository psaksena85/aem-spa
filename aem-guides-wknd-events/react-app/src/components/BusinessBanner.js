import React, { Component } from "react";
import {MapTo} from '@adobe/cq-react-editable-components';
const BusinessBannerEditConfig = {

  emptyLabel: 'Business Banner Description',

  isEmpty: function(props) {
      return !props || !props.displayMessage || props.displayMessage.trim().length < 1;
  }
};

class BusinessBanner extends Component {
  render() {
    if(this.props.displayMessage) {
      return (
        <header className="BusinessBanner py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 mt-5 mb-2">
                  {this.props.displayMessage}
                </h1>
                <div className="lead mb-5" data-rte-editelement dangerouslySetInnerHTML={{ __html: this.props.text }} />
              </div>
            </div>
          </div>
        </header>
      );
    }
    return null;
  }
}

export default MapTo('wknd-events/components/content/businessbanner')(BusinessBanner, BusinessBannerEditConfig);
