import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DMRforum from '../abis/DMRforum.json';
import Web3 from 'web3';
import Main from './Main'
import Create from './Create'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should use the MetaMask extension!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = DMRforum.networks[networkId]
    if(networkData) {
      const dmr = web3.eth.Contract(DMRforum.abi, networkData.address)
      this.setState({ dmr })
      const rCount = await dmr.methods.rCount().call()
      this.setState({ dmr })
      for (var i = 1; i <= rCount; i++) {
        const review = await dmr.methods.reviews(i).call()
        this.setState({
          reviews: [...this.state.reviews, review]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The forum contract could not be deployed to network')
    }
  }

  addReview(genre, mname, rating, description) {
    this.setState({ loading: true })
    this.state.dmr.methods.addReview(genre, mname, rating, description).send({ from: this.state.account }).once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()  
    })
  }

  fundReview(id, fundrec) {
    this.setState({ loading: true })
    this.state.dmr.methods.fundReview(id).send({ from: this.state.account, value: fundrec })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dmr: null,
      rCount: 0,
      reviews: [],
      loading: true
    }
    this.addReview = this.addReview.bind(this)
    this.fundReview = this.fundReview.bind(this)
  }
  
  render() {
    return (
      <div className="back">
           <Router>
          <Navbar />     
          <Route exact path="/" component={Home} />
          <Route exact path="/create" render={props => (
            <React.Fragment>
              { this.state.loading
              ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
              : <Create
                addReview={this.addReview}
              />
              }
            </React.Fragment>
          )} />
          <Route exact path="/reviews" render={props => (
            <React.Fragment>
              { this.state.loading
              ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
              : <Main
                reviews={this.state.reviews}
                fundReview={this.fundReview}
              />
              }
            </React.Fragment>
          )} />
          <Footer />
        </Router>
      </div>
     
    );
  }
}

export default App;
