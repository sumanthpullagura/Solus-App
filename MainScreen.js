import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import moment from 'moment';
import ChartView from 'react-native-highcharts';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';

class MainScreen extends Component {
	constructor(props) {
    super(props);
	this.state={
		solus_time:moment().format('Do MMMM, h:mm:ss a'),
		data_load:moment().subtract(39,'m').subtract(3, 'h').format('Do MMMM, h:mm:ss a'),
		
	options :{
        lang: {
            thousandsSep: ',',
			thousandsGroupStyle:'lakh'
        }
		
		},
	}
}	
	  
	  	  	  
	render(){
		const responseJson=this.props.navigation.getParam('key');
		const val=responseJson.response;
		var dt=(responseJson.response.last_load_data[0].End_Time).toString();
		var date=moment(dt).format('Do MMMM, h:mm:ss a');
		var solus_load=moment(dt).subtract(39,'m').subtract(4, 'h').format('Do MMMM, h:mm:ss a');
		const conf={
            chart: {
					zoomType: 'xy',
					panning:false
				},
				title: {
					text: 'Incremental Revenue',
					style:{
						fontWeight:'bold'
					}
				},
				xAxis: [{
					categories: [val.transaction_data[0].Bill_Date, val.transaction_data[1].Bill_Date, val.transaction_data[2].Bill_Date, val.transaction_data[3].Bill_Date, val.transaction_data[4].Bill_Date, val.transaction_data[5].Bill_Date,val.transaction_data[6].Bill_Date],
					scrollbar:{
						enabled:true
					}
				}],
				yAxis: [{ // Primary yAxis
					labels: {
						style: {
							color: 'black',
							
						}
					},
					title: {
						text: 'Transactions',
						style: {
							color: 'black',
							fontweight:'bold'
						}
					}
				}, { // Secondary yAxis
					title: {
						text: 'Communications',
						style: {
							color: '#00ced1',
							fontweight:'bold'
						}
					},
					labels: {
						style: {
							color: '#00ced1'
						}
					},
					opposite: true
				}],
				tooltip: {
					shared: true
				},
				legend: {
					shared:true
						
				},
				exporting:{
					enabled:false
				},
				credits:{
					enabled:false
				},
				series: [{
					name: 'Communications',
					type: 'column',
					color:'#00ced1',
					yAxis: 1,
					data: [val.communication_data[0].count, val.communication_data[1].count, val.communication_data[2].count, val.communication_data[3].count, 5, 9, 5],
					tooltip: {
						valueSuffix: ''
					}

				}, {
					name: 'Transactions',
					type: 'spline',
					color:'black',
					data: [val.transaction_data[0].count, val.transaction_data[1].count, val.transaction_data[2].count, val.transaction_data[3].count,val.transaction_data[4].count,val.transaction_data[5].count, val.transaction_data[6].count],
					tooltip: {
						valueSuffix: ''
					}
				}]
			};
	
	
	
	const multi_line_config={
		title: {
        text: 'CONTRIBUTION TREND',
		style:{
				fontWeight:'bold'
			}
    },
		xAxis: {
			categories: ['Jan','Feb','Mar','Apr','May','June','July']
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
	yAxis:{
		title:{
			text:''
		}
	},
	series: [{
        name: 'Activate',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133]
    }, {
        name: 'Glue',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121]
    }, {
        name: 'Protect',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147]
    }, {
        name: 'Winback',
        data: [null, null, 7988, 12169, 15112, 22452, 34400]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
	exporting:{
		enabled:false
	},
	credits:{
		enabled:false
	},

	};
	
	
	const cloud_config={
			chart: {
				type: 'column'
			},
			title: {
				text: 'Response Trend',
				style:{
						fontWeight:'bold'
					}
			},
			xAxis: {
				categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: ''
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				name: 'Whatsapp',
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

			}, {
				name: 'SMS',
				data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

			}, {
				name: 'Email',
				data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

			}, {
				name: 'PN',
				data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4]

			}],
			exporting:{
				enabled:false
			},
			credits:{
				enabled:false
			},
	};
	
	const word_cloud={
		series: [{
        type: "wordcloud",
        data: [
			['birthday', 93],
			['high value retention',85],
			['dormant reintroduction',70],
			['brand welcome',60],
			['5th transaction',50],
			['onboarding',45],
			['upgraded to 5star',40],
			['star winback',30],
			['50th transaction',30],
			['upgraded to 5star',20],
			['offer',20],
			['premium wear buyer',10]
		],
        name: 'Solus score',
		visible:'true',
		rotation:{
				to:0,
				from:0,
				orientations:2
			},
		minFontSize:7,
    }],
	
    title: {
        text: 'Most Successful Campaigns',
		style:{
			fontWeight:'bold'
		}
		
    },
	exporting:{
			enabled:false
		},
		credits:{
			enabled:false
		},
	};
	
						
	return(
		<View style={{flex:2,backgroundColor:'white'}}>
		<Image source={{uri:'data:image/png;base64,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',}} style={{width:180,height:50,backgroundColor:'white',marginLeft:95,marginTop:10}}/>
			<Text style={styles.solus_run} allowFontScaling={false}>Last Solus Run:{solus_load}</Text>
			<Text style={styles.Data_Load} allowFontScaling={false}>Last Data Load:{date}</Text>
		<Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={{flex:1}}>
          <ChartView style={{flex:0.97,height:500,paddingTop:10,paddingBottom:-5,marginLeft:-3,marginRight:-3}} config={conf} options={this.state.options}></ChartView>
        </View>
		<View style={{flex:1}}>
          <ChartView style={{flex:0.97,height:500,paddingTop:10,paddingBottom:-5,marginLeft:-3,marginRight:-3}} config={cloud_config} options={this.state.options}></ChartView>
        </View>
        <View style={{flex:1}}>
			<ChartView style={{flex:0.97,height:500,paddingTop:10,paddingBottom:-5,marginLeft:-3,marginRight:-3}} config={multi_line_config} options={this.state.options}></ChartView>
        </View>
		<View style={{flex:1}}>
			<ChartView style={{flex:0.97}} config={word_cloud} more={true} options={this.state.options}></ChartView>
        </View>
      </Swiper>
		</View>	
			);
	
	};
}
const styles=StyleSheet.create({
	solus_run:{
		marginTop:10,
		flex:0.06,
		fontSize:15,
		textAlign:'center',
	},
	Data_Load:{
		flex:0.06,
		fontSize:15,
		textAlign:'center',
		top:-15,
		marginTop:10
	},
	graph_heading:{
		marginTop:20,
		fontWeight:'bold',
		textAlign:'center',
		backgroundColor:'#00ffff',
		alignItems:'center',
		fontSize:16
	},
	wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
	
});

export default MainScreen;