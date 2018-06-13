import React from 'react';


class MyComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p id='mycomp'>My Component!!</p>
                User Name
                <input type='text' name='username' />
            </div>
        );
    }

}

export default MyComponent;