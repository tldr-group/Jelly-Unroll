import React, { Component } from 'react';
import InputBox from '../inputBox';


class InputContainer extends Component {

    render(){
        return(
        <div>
            <div class="container pt-5">
            <div class="row">
            <div class="col-sm">
            <InputBox name="Component 1"/>
            </div>
            <div class="col-sm">
            <InputBox name="Component 2"/>
            </div>
            <div class="col-sm">
            <InputBox name="Component 3"/>
            </div>
            <div class="col-sm">
            <InputBox name="Component 4"/>
            </div>
            <div class="col-sm">
            <InputBox name="Component 5"/>
            </div>
            </div>
      </div>
        
            </div>
        )
    }
}

export default InputContainer