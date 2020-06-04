pragma solidity >=0.4.21 <0.7.0;


contract Amazoff {
    address owner;
    mapping(uint256 => uint256) deposits;
    mapping(uint256 => uint256) times;
    mapping(uint256 => address) cassaforti;
    
    uint256 bal;

    modifier byOwner {
        require(msg.sender == owner, "Not allowed");
        _;
    }
    constructor() public {
        owner = msg.sender;
        bal = 0;
    }
    function getBalance() public view returns (uint256) {
        return bal;
    }
    function getNow() public view returns(uint256){
        return now;
    }

    function setBlackFriday(uint256 timestamp, uint256 cassaforte) public  {
        require(cassaforti[cassaforte] == msg.sender, "error");
        require(times[cassaforte] == 0, "");
        times[cassaforte] = timestamp;
    }

    function deposit(uint256 cassaforte) public payable {
        if (cassaforti[cassaforte] == address(0)) {
            cassaforti[cassaforte] = msg.sender;
        }
        deposits[cassaforte] = deposits[cassaforte] + msg.value;
        bal = bal + msg.value;
    }

    function withdraw(uint256 cassaforte) public  {
        require(cassaforti[cassaforte] == msg.sender, "non tua");
        require(times[cassaforte] < now, "cassaforte bl");
        uint256 value = deposits[cassaforte];
        deposits[cassaforte] = 0;
        msg.sender.transfer(value);
        bal = bal - value;
        times[cassaforte] = 0;
    }
}
