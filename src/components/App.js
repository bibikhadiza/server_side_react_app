import React from "react";
import TopStoriesCards from "./TopStoriesCards";
import SideMenu from "./SideMenu"
import Header from "./Header";


export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      topStories: null,
      mostPopular: null,
      mostPopularData: null
    }
  }

  render(){

    var sample = {
    backgroundColor: "red",
    height: "100%",
    width: "26%",
    margin: "0 auto",
    marginBottom: "10%",
    marginTop: "5%",
    border: "solid 1px rgba(0, 0, 0, 0.23)"
  }

  var sample1 = {
    backgroundColor: "yellow",
    float: "right"
  }

  var appStyle ={
    display: "inline-block",
    width: "100%"
  }

    return(
      <div style={appStyle}>
        <SideMenu handleTopStoriesClick={this.handleTopStoriesClick} handleMostPopClick={this.handleMostPopClick}/>
       <div style={sample}>
        <Header/>
         {this.state.topStories ? <TopStoriesCards posts={this.state.topStories}/> : <TopStoriesCards posts={this.props.posts.results}/>}
      </div>
     </div>
    )
  }


}

export default App
