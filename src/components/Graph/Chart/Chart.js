import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    graphData: state.graph.graphReducer
})
 


class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['09/21', '09/22', '09/23', '09/24', '09/25', '09/26'],
                datasets: [
                    {
                        label: 'Mood',
                        data: [7,9,10,5,3,2],
                        borderColor: '#35DDFF',
                        backgroundColor:'#35DDFF',
                        fill: false
                    },
                    {
                        label: 'Hydration',
                        data: [4, 7, 7, 5, 4, 6],
                        borderColor: '#8E43E8',
                        backgroundColor:'#8E43E8',
                        fill: false
                    },
                    {
                        label: 'Fitness',
                        data: [4, 6, 2, 5, 6, 2],
                        borderColor: '#FF6886',
                        backgroundColor:'#FF6886',
                        fill: false
                    },
                    {
                        label: 'Nutrition',
                        data: [7, 3, 8, 5, 6, 2],
                        borderColor: '#46E895',
                        backgroundColor:'#46E895',
                        fill: false
                    }
                ]
            }
        }
    }
    componentWillMount() {
        this.getData();

    }
// componentDidMount(){
// this.setChart();
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
            let action = {type:'SET_GRAPH_DATA',payload:response.data}
            this.props.dispatch(action);
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

export default connect(mapStateToProps)(Graph);