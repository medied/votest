pragma solidity ^0.4.21;
import "openzeppelin-zos/contracts/token/ERC20/DetailedPremintedToken.sol";

contract Votest is DetailedPremintedToken {
    string public name = "VOTE Test";
    string public symbol = "VOTEST";
    uint8 public decimals = 4;
    uint256 private constant INITIAL_SUPPLY = 20000000;

    function initialize(address initialAccount) public isInitializer("Votest", "0")  {
        //call initialize from DetailedPremintedToken
        //what to name the constructor for Votest
        DetailedPremintedToken.initialize(initialAccount, name, symbol, decimals, INITIAL_SUPPLY);
    }
}