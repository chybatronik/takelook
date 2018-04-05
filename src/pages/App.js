import React, { Component } from 'react'
import { Layout, Input } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchPage from '../containers/Search'
import DetailsPage from '../containers/Details'
import DefaultListPage from '../containers/DefaultList'

import './App.css'
const Search = Input.Search
const { Header, Content, Footer } = Layout

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
            <Search
              placeholder='Search Shows and People'
              onSearch={value => console.log(value)}
              enterButton
            />
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64, minHeight: '85vh' }}>
            <div style={{ margin: '16px 0', background: '#fff', padding: 24, minHeight: '80vh' }}>
              <Route exact path='/' component={DefaultListPage} />
              <Route path='/search/:name' component={SearchPage} />
              <Route path='/details/:id' component={DetailsPage} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Takelook ©2018 Created by chybatronik
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
