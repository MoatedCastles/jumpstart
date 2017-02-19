import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';

class Info extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'I\'m in Info component!'
    }
  }

  render() {
    return (
      <div className="info">
        <NavBar />
        {this.state.greeting}
      </div>
    )
  }
}

export default Info;

function convertToBase7(input){
  var inn = input
  var counter = 0;
  while(inn % 7 !== 0){
    inn = inn - 1;
    counter += 1;
  }
  var output = inn/7 * 10;

  var tempHunCount = 0;
  while(output >= 700){
    output -= 700;
    tempHunCount += 1;
  }
  var tempTenCount = 0;
  while(output >= 70){
    output -= 70;
    tempTenCount += 1;
  }
  var counter = 0;
  while(output % 7 !== 0){
    output = output - 1;
    counter += 1;
  }
  return tempHunCount * 1000 + tempTenCount * 100 + counter;
}


var findMaxLength = function(nums) {
  var maxLength = 0;
  var zCount = 0;
  var oneCount = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      zCount++;
    }
    if(nums[i] === 1){
      oneCount++;
    }
  }
  for(var j = 0; j < nums.length; j++){
    var innerZCount = zCount;
    var innerOneCount = oneCount;
    var thisLength = nums.length - j;
    if(maxLength > thisLength){
      break;
    }
    while(zCount !== oneCount && thisLength){
      thisLength--;
      if(nums[thisLength + j] === 0){
        innerZCount--;
      }
      if(nums[thisLength + j] === 1){
        innerOneCount--;
      }
    }
    if(thisLength >= maxLength){
      maxLength = thisLength;
    }
    if(nums[j] === 0){
      zCount--;
    }
    if(nums[j] === 1){
      oneCount--;
    }
  }
  return maxLength;
};










