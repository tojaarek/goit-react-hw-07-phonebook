import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import loader from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div>
        <TailSpin
          height="40"
          width="40"
          color="#e8df5f"
          wrapperClass={loader.loader}
        />
      </div>
    );
  }
}
export default Loader;
