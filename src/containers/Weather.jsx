/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Location from '../components/Location';

export default class Weather extends Component {
  state = {
    loading: true,
    location: '',
  };

  render() {
    const { loading, location } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return <Location />;
  }
}
