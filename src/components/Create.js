import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Create extends Component {  
    render() {
    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                  <Form onSubmit={(event) => {
                    event.preventDefault()
                    const genre = this.rgenre.value
                    const mname = this.rmname.value
                    const rating = this.rrating.value
                    const description = this.rdesc.value
                    this.props.addReview(genre, mname, rating, description)
                  }}>
                  <center>
                  <h1>Write your </h1>
                  <br></br><br></br>
                  <h1>Review</h1>
                  <br></br>
                  <div class="form-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rgenre"
                        type="text"
                        ref={(input) => { this.rgenre = input }}
                        className="form-control"
                        placeholder="Movie genre"
                        required />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rmname"
                        type="text"
                        ref={(input) => { this.rmname = input }}
                        className="form-control"
                        placeholder="Movie name"
                        required />
                    </Form.Group>
                    <br/>   
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rrating"
                        type="text"
                        ref={(input) => { this.rrating = input }}
                        className="form-control"
                        placeholder="Your rating (out of 10)"
                        required />
                    </Form.Group>
                    <br/> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <h4>Write your detailed movie review here</h4>
                        <Form.Control 
                        as="textarea" 
                        rows={5}
                        id="rdesc"
                        ref={(input) => { this.rdesc = input }}
                        required />
                    </Form.Group>   
                    <br/>              
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-outline-info">Submit your Review</button>
                  </center>
                </Form>
                <br/><br/><br/><br/>
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
  
  export default Create;