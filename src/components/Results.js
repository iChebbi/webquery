import React, { Component } from 'react'
import { Table, Row, Col } from 'antd';

const { Column } = Table;

export default class Results extends Component {

  state = {
    searched: false,
    data: [],
  }

  columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: 'domain',
      dataIndex: 'domain',
      key: 'domain'
    },
    {
      title: 'snippet',
      dataIndex: 'snippet',
      key: 'snippet'
    }
  ];

  componentWillReceiveProps() {
    const res = this.props.state.data;
    this.setState({ searched: true })
    if (res.length > 0) {

      const data = [].concat(...res.map((e, i) => {
        return (e.data.map((x, y) => {
          return { url: e.url, x }
        }))
      }))
        .map((e, i) => {
          return { key: i, domain: e.url, snippet: e.x }
        })
      this.setState({ data })
    }
  }


  renderTable = () => {
    return (
      <Row>
        <Col push={3} span={18} >
          <Table loading={this.props.state.fetching} dataSource={this.state.data} >
            <Column
              title='#'
              dataIndex='key'
              key='key'
            />
            <Column
              title='domain'
              dataIndex='domain'
              key='domain'
            />
            <Column
              title='snippet'
              dataIndex='snippet'
              key='snippet'
            />
          </Table>
        </Col>
      </Row>
    )
  }


  render() {
    return (
      <div className="results">
        {
          !this.state.searched ? '' :
            this.state.data.length ? this.renderTable() : "No results"
        }
      </div>
    )
  }
}