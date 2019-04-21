import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementAction, decrementAction } from '../actions/index.js';

class AppCounter extends Component {
	render() {
		return(
			<div className="row">
				<div className="col-12 text-center pb-4">
					<code>{ this.props.countValue }</code>
				</div>
				<div className="col-6 text-right">
					<button type="button" className="btn-danger btn" onClick={ this.props.decrementAction }>Decrement</button>
				</div>
				<div className="col-6 text-left">
					<button type="button" className="btn-primary btn" onClick={ this.props.incrementAction }>Increment</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		countValue: state.countValue
	}
}

export default connect(mapStateToProps, { incrementAction, decrementAction })(AppCounter);