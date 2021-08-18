import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
class book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: []
    }
  }

  
  bookHandler = () => {
    axios.get('http://localhost:8000/book?email=anasabusief@gmail.com').then(
      data => {
        let recived=data.data.books;
        if (recived.length) {
          this.setState({
            booksData: recived
          })
          console.log(recived)
        }
      }
    ).catch(error=>console.log(error))
  };
  
  render() {
    return (
      <>

        {
          this.state.booksData.forEach(element => {
            return (
              <>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{element.status}</Card.Subtitle>
                    <Card.Text>
                      {element.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            )
          }
          )
        }
      </>
    )
  }
}
export default book;


