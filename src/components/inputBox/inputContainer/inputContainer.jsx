import React, { Component } from 'react';
import InputBoxC from '../inputBoxC';
import InputBox3C from '../inputBox3C';
import InputBoxA from '../inputBoxA';
import InputBox3A from '../inputBox3A';
import InputBoxS from '../inputBoxS';

class InputContainer extends Component {

    render(){
        return(
        <div>
            <div class="row">
            <div class="col">
            <InputBox3C name="Cathode Current Collector"/>
            </div>
            <div class="col">
            <InputBoxC name="Cathode"/>
            </div>
            <div class="col">
            <InputBoxS name="Seperator"/>
            </div>
            <div class="col">
            <InputBoxA name="Anode"/>
            </div>
            <div class="col">
            <InputBox3A name="Anode Current Collector"/>
            </div>
            </div>
      </div>
        
        )
    }
}

export default InputContainer