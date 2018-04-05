import React, { Component } from 'react'
import * as actions from '../store/actions/shows'
import { connect } from 'react-redux'
import { Row, Col, Spin, Alert } from 'antd'
// import InfiniteScroll from 'react-infinite-scroller'
import ShowComponent from '../components/show'

export class SearchContainer extends Component {
  componentDidMount () {
    const { config } = this.props.shows
    if(!config.isFetch)
      this.props.getSearchShows(this.props.match.params.name)
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.match.params.name !== this.props.match.params.name) {
      if(!nextProps.shows.config.isFetch)
        this.props.getSearchShows(nextProps.match.params.name)
    }
  }

  renderLoader () {
    const { config } = this.props.shows
    if (config.isError) {
      return (
        <Alert message='Ошибка получения данных с сервера' type='error' />
      )
    }
    return (
      <div className='spiner' key={'spiner'}>
        <Spin size='large' />
      </div>
    )
  }
  handleOnClick = ( url ) => {
    this.props.history.push(url)
  }

  render () {
    const { shows, config } = this.props.shows
    if (!shows || Object.keys(shows).length === 0 || config.isFetch || config.isError) {
      return this.renderLoader(config)
    }
    const results = Object.keys(shows).map((item) => {
      return (
        <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}  lg={{ span: 4 }} style={{paddingBottom: 20}} key={item}>
          <ShowComponent handleOnClick={this.handleOnClick} show={shows[item]} key={item} />
        </Col>
      )
    })

    return (
      <div>
        <Row gutter={16}>
          <h2>Вы искали: {this.props.match.params.name}</h2>
        </Row>
        <Row gutter={16}>
          {results}
        </Row>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSearchShows: (query) => dispatch(actions.getSearchShows(query))
})

const mapStateToProps = state => {
  const { shows } = state
  return {
    shows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
