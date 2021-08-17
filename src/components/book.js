import React from 'react';
import axios from 'axios';

class book extends React.Component {

  bookHandler = () => { };
  render() {
    return (
      axios.get('http://localhost:8000/book')
    )
  };
}
export default book;