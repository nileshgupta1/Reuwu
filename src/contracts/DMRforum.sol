pragma solidity ^0.5.0;

contract DMRforum {
    uint public rCount=0;

    mapping (uint => Review) public reviews;

    struct Review {
        uint id;
        string genre;
        string mname;
        uint rating;
        string description;
        uint ppl;
        address payable author;
    }

    function addReview(string memory _genre, string memory _mname, uint _rating, string memory _description) public{
        require(bytes(_description).length > 0);
        require(bytes(_mname).length > 0);
        rCount++;
        reviews[rCount] = Review(rCount, _genre, _mname, _rating, _description, 0, msg.sender);
    }

    function fundReview(uint _id) public payable{
        require(_id > 0 && _id <= rCount);
        Review memory _review = reviews[_id];
        address payable _author = _review.author;
        address(_author).transfer(msg.value);
        _review.ppl = _review.ppl + 1;
        reviews[_id] = _review;
    }
}