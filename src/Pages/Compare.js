import React from 'react';
import ProductComparison from '../src/components/ProductComparison';
import {withRouter} from 'react-router-dom';

class Compare extends React.Component {
  render() {
    return (
      <ProductComparison />
    );
  }
}

export default withRouter(Compare);
