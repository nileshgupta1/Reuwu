import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Main extends Component {
    constructor() {
      super();
      this.state = {
        search: ''
      };
    }
  
    updateSearch(event) {
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
      let filteredReviews = this.props.reviews.filter(
        (review) => {
          return review.mname.indexOf(this.state.search) !== -1;
        }
      );

    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                <h1>Search <br></br><br></br><br></br> Reviews by <br></br><br></br><br></br> Movie name</h1>
                <br></br>
                <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <p>&nbsp;</p>
                { filteredReviews.map((review, key) => {
                  return(
                    <div class="coupon" key={key} >
                      <div className="card-header">
                      <p class="badge badge-primary">{review.genre}</p>
                      <br/>
                      <h2 style={{color: "white"}}>{review.mname}</h2>
                      <small style={{color: "white"}}>Author: {review.author}</small>
                      </div>
                      <p style={{color: "white"}}>Rating: {review.rating.toString()} / 10</p>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{review.description}</p>
                          <br/>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            {review.ppl.toString()} user(s) found this helpful.
                          </small>      
                          <br></br>
                          <p>If you also found this helpful, would you like to tip 0.1 ETH to the author?</p>
                          <button
                            className="btn btn-info"
                            name={review.id}
                            onClick={(event) => {
                              let fundrec = window.web3.utils.toWei('0.1', 'Ether')
                              this.props.fundReview(event.target.name, fundrec)
                            }}>
                            Yes
                          </button>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
  
  export default Main;