import React, { Component } from 'react';
import OutputBox from '../outputBox';

class OutputContainer extends Component {

    render(){
        return(
        <div>
            <div class="container pt-5">
            <div class="row">
            <div class="col-sm">
            <OutputBox name="Battery performance"/>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default OutputContainer