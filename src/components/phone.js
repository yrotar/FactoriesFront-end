import React from 'react';
import {connect} from 'react-redux';
import actions from "../actions";

class Phone extends React.Component{
    componentDidMount(){fetch('http://localhost:8080/phones/' + this.props.phoneId)
        .then(response => response.json())
        .then(data =>  {
            this.props.init(data);
        })}
    render(){
        return <div><h2>ID: {this.props.phone.phoneId}</h2>
            <h2>Model: {this.props.phone.name}</h2>
            <h2>Price: {this.props.phone.price}</h2>
            <h2>Company: {this.props.phone.companyName}</h2>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        phoneId: ownProps.match.params.id,
        phone: state
    };
}

export default  connect(mapStateToProps, actions)(Phone);