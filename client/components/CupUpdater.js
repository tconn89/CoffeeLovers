import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import SimpleButton from './SimpleButton';

class CupUpdater extends Component {
  constructor(props){
    super(props);
  }

  SetPageHeight(){
    return {height: window.innerHeight}
  }
  render() {
    return (
      <div className={'mobile-container'} style={ this.SetPageHeight() }>
        <div>
          <SimpleButton />
        </div>
      </div>
    )
  }
}

const mapState = ({coffee}) => ({coffee});
export default connect(mapState)(CupUpdater);