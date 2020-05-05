import React from 'react'
import './style.css'
import Logo from './image.png'
import Cards from './components/cards/cards'
import Chart from './components/chart/charts'
import Country from './components/countrypicker/country'
import Divider from './divider'
import { fetchData } from './api'
import Header from './Header'
import Avoid from './avoid'
class App extends React.Component
{
  state = {
    data:{},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData })

  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const {data,country} = this.state 
    return (
      <div className="app">
        <img src = {Logo} style={{width:400, padding:30, display: 'inline-block'}}/>
        <Header/>
        <Cards data= {data}/>
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        
        <Divider/>
        <Avoid/>
       
      </div>
      
    )
  }

}

export default App
