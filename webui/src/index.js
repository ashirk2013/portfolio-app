import React, { Component} from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import "./index.scss";
import PageScrollTop from "./component/PageScrollTop";
import PortfolioHome from "./home/PortfolioHome";

import App from './App';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-home`}
              component={PortfolioHome}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();