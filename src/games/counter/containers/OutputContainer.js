import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	// Translate Redux state into React props
  return {
    amount: state.count
  }

  // this will turn into:
  /**
   * props {
   *  amount: 0
   * }
   */
}

export default connect(mapStateToProps)(Output);
               // returns a function ^
                                //function(Output);
