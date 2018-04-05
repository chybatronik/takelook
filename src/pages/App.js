import React, { Component } from 'react'
import { Layout, Input } from 'antd'
import { Router, Route } from 'react-router-dom'
import SearchPage from '../containers/Search'
import DetailsPage from '../containers/Details'
import DefaultListPage from '../containers/DefaultList'
import history from '../history'

import './App.css'
const Search = Input.Search
const { Header, Content, Footer } = Layout

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%', zIndex: 1000 }}>
            <Search
              placeholder='Search Shows and People'
              onSearch={value => {
                if (!value || value === '') {
                  history.push('/takelook/build')
                } else {
                  history.push('/takelook/build/search/' + value)
                }
              }}
              enterButton
            />
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64, minHeight: '85vh' }}>
            <div style={{ margin: '16px 0', background: '#fff', padding: 24, minHeight: '80vh' }}>
              <Route exact path='/takelook/build/' component={DefaultListPage} />
              <Route path='/takelook/build/search/:name' component={SearchPage} />
              <Route path='/takelook/build/details/:id' component={DetailsPage} />
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
