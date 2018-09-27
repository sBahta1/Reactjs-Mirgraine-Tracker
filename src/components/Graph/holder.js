import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import { connect } from 'react-redux';
import moment from 'moment';

const mapStateToProps = state => ({
    graphData: state.graph.graphReducer
})
//let mood = props.graphData.mood

class Chart extends Component {
    constructor(props) {
        super(props);
        let mood = props.graphData.mood

        this.state = {
            chartData: {data}
        }
    }
    setGraphWithData = () => {
        let mood = this.props.graphData.mood;
        let days = this.props.graphData.date
        this.setState({
            data: {
                labels: days,
                datasets: [
                    {
                        label: 'Mood',
                        data:  mood ,
                        borderColor: '#35DDFF',
                        backgroundColor: '#35DDFF',
                        fill: false
                    }
                ]
            }
        })
    }

    componentDidMount() {
        this.getData();
        //this.setGraphWithData()
    }
// componentWillReceiveProps(){
//     this.setGraphWithData()
// }

    // componentDidMount() {
    //     this.setGraphWithData()
    // }
    //  setChart=()=>{
    //      this.setState({

    //      })
    //  }

    getData = () => {
        axios({
            method: "GET",
            url: '/api/graph'
        }).then((response) => {
            console.log('Where is my log', response.data);
            let action = { type: 'SET_GRAPH_DATA', payload: response.data }
            this.props.dispatch(action);
            this.setGraphWithData();
        }).catch((error) => {
            console.log('Error getting graph data', error);
            alert('Error getting graph data', error)
        })
    }
    render() {
        return (
            <div>
                <Nav />
                <Paper>
                    <Line
                        data={this.state.chartData}
                        options={{
                        }}
                    />
                    {JSON.stringify(this.props.graphData.mood)}
                </Paper>
            </div>

        )
    }

}//class

export default connect(mapStateToProps)(Chart);