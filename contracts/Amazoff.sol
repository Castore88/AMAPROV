pragma solidity >=0.4.21 <0.7.0;


contract Amazoff {
    address owner;
    mapping(address => uint256) deposits;
    uint256 public blackFridayEndDate;

    modifier byOwner {
        require(msg.sender == owner, "Not allowed");
        _;
    }

    modifier ifBlackFridayClosed {
        require(blackFridayEndDate < now, "Black friday is not yet closed");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function setBlackFriday(uint256 timestamp) public ifBlackFridayClosed {
        blackFridayEndDate = timestamp;
    }

    function deposit() public payable {
        deposits[msg.sender] = msg.value;
    }

    function withdraw() public ifBlackFridayClosed {
        require(deposits[msg.sender] > 0, "No more money");
        uint256 value = deposits[msg.sender];
        deposits[msg.sender] = 0;
        msg.sender.transfer(value);
    }
}
