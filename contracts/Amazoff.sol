pragma solidity >=0.4.21 <0.7.0;


contract Amazoff {
    address owner;
    mapping(address => uint256) deposits;
    uint256 public blackFridayEndDate;
    uint256 bal;

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
        bal = 0;
    }

    function getBalance() public view returns (uint256) {
        return bal;
    }

    function setBlackFriday(uint256 timestamp) public ifBlackFridayClosed {
        blackFridayEndDate = timestamp;
    }

    function deposit(uint256 amt) public payable {
        deposits[msg.sender] = msg.value;
        bal = bal + amt;
    }

    function withdraw(uint256 amt) public ifBlackFridayClosed {
        uint256 value = deposits[msg.sender];
        deposits[msg.sender] = 0;
        msg.sender.transfer(value);
        bal = bal - amt;
    }
}
