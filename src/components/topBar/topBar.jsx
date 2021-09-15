import React, { Component } from 'react';
import "./topBar.css"

class TopBar extends Component {

    render(){
        return(
            <>
            <div className='row p-4'>
                <div className='offset-3 col-6 text-center'>
                 <h1><span class="badge badge-dark">Jelly Unroll</span></h1>
                    </div>
            </div>
            </>
        )
    }
}

export default TopBar