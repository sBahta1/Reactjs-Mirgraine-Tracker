import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import RxListItem from './RxListItem/RxListItem'
const mapStateToProps = state => ({
    rx: state.rx
})

class RxList extends Component{

    render(){

    return(
      <Paper>
 {/* {JSON.stringify(this.props.rx.RxList)} */}
 {this.props.rx.RxList.map((med,i)=>{
     return(
         <div>
             <RxListItem key={i} med={med} />
         </div>
     )
 })}
      </Paper>
    )
}

}//end class
export default connect(mapStateToProps)(RxList);