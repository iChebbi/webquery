import React, { Component } from "react";
import { Layout } from "antd";
import Query from './components/Query';
import Results from './components/Results';

import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {

  state = {
    key: '',
    fetching: false,
    data: []
  }

  fetchData = async (key, con) => {
    try {
      this.setState({ fetching: true, key })
      const data = await (await fetch(`http://212.227.252.224:8081/query?key=${key}&con=${con}`)).json();
      this.setState({ fetching: false })
      if (data[0].msg === undefined) {
        this.setState({ data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <h1>Web Query</h1>
        </Header>
        <Content className="App-content">
          <Query fetchData={this.fetchData} />
          <Results state={this.state} />
        </Content>
        <Footer className="App-footer">&copy; Tamismart</Footer>
      </Layout>
    );
  }
}

export default App;