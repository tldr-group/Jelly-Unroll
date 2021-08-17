import React, { Component } from 'react';

class OutputBox extends Component {

    render(){
        console.log(this.props)
        return(
            <div>
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <div class="card border-primary mb-1" style={{ width: '18rem' }}>
                    <div class="card-header">Performance 1</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1" style={{ width: '18rem' }}>
                    <div class="card-header">Performance 2</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1" style={{ width: '18rem' }}>
                    <div class="card-header">Performance 3</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1" style={{ width: '18rem' }}>
                    <div class="card-header">Performance 4</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card border-primary mb-1" style={{ width: '18rem' }}>
                    <div class="card-header">Performance 5</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Insert Output here</h5>
                        <p class="card-text">Insert text</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default OutputBox