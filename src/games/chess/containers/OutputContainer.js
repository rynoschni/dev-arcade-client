import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state1) {
	// Translate Redux state into React props
  return {
    amount: state1.count1
  }

  // this will turn into:
  /**
   * props {
   *  amount: 0
   * }
   */
}

function mapStateToProps(state2) {
	// Translate Redux state into React props
  return {
    amount: state2.count2
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
