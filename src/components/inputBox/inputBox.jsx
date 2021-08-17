import React, { Component } from 'react';
import "./inputBox.css"

class InputBox extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title input-title">{this.props.name}</h5>
                    <label for="customRange">Parameter1</label>
                    <input type="range" class="custom-range" id="customRange" name="points1"></input>
                    <label for="customRange">Parameter2</label>
                    <input type="range" class="custom-range" id="customRange" name="points1"></input>
                    <label for="customRange">Parameter3</label>
                    <input type="range" class="custom-range" id="customRange" name="points1"></input>
                    <label for="customRange">Parameter4</label>
                    <input type="range" class="custom-range" id="customRange" name="points1"></input>
                    <label for="customRange">Parameter5</label>
                    <input type="range" class="custom-range" id="customRange" name="points1"></input>
                </div>
                </div>
            </div>
        )
    }
}

export default InputBox