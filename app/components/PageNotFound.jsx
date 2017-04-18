import React from 'react';
class PageNotFound extends React.Component {
   
   getRowMarkup() {
    let _this = <div>
                  <div className="error-template">
                  <h1>
                      Oops!</h1>
                  <h2>
                      404 Not Found</h2>
                  <div className="error-details">
                      Sorry, an error has occured, Requested page not found!
                  </div>
                  </div>
                </div>
      ;
      return _this;    
    }
   render() {
     return this.getRowMarkup();
   }
}
export default PageNotFound;

