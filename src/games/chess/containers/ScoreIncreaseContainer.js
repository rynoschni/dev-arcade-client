import Increment from '../components/Increment';
import { connect } from 'react-redux';

import { actionIncrement } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        // propName in React : a fn that calls dispatch
        handleClick: () => {
            dispatch(actionIncrement());
        }
    }
}

export default connect(null, mapDispatchToProps)(Increment);
