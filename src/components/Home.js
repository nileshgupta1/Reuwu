import React from 'react';
import pic from '../bb.jpg';

function Home() {
    return (
        <React.Fragment>
            <br></br>
            <h1 color="white">Decentral-wood</h1>
            <br/>
            <h3 style={{textAlign: "center", color: "yellow"}}>By Team Winners Pothumukku</h3>
                <br></br>
                
                <center>
                <img src={pic} width="500px" height="350px"/>
                </center>
                <h2  style={{color: "lightyellow"}}>&nbsp;About</h2>
                <h4 >A decentralized movie rating and review platform.</h4>
                <br></br>
                <h4>Decentral wood provides a blockchain based forum for movie enthusiasts and critics. Incorporating blockchain with our review system provided transparency, authenticity and guaranteed anonymity for the person concerned. </h4>
                <br></br>
                <h4>Decentral wood beats the conventional movie review platforms by offering the following benefits : </h4>
                <h5>Increased Security</h5>
                <h5>Greater Transparency</h5>
                <h5>Increased Efficiency</h5>
                <h5>Improved Traceability</h5>
                <br>
                </br>
                <h4>After the review is entered into the record, it cannot be deleted. Every block in the blockchain has the permanent timestamp that indicates authentication and verification.</h4>
                <h4> As the participant’s identity remains confidential, everyone can deal freely with another through the secure network. Complete anonymity and transaction security are among the top advantages of blockchain technology. It is crucial for participants to maintain privacy and anonymity for many reasons. With every transaction on centralised networks, the address is given out, which means the details of the user can be found out by hackers. Blockchain protects addresses in a given wallet by changing addresses constantly which makes it difficult for payments or transactions to be traced. </h4>
            <br/><br/>
        </React.Fragment>
    )
}

export default Home;