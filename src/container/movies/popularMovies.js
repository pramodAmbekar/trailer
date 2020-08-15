import React, { Component } from "react"
import { connect } from "react-redux"

import { getPopularMovies, topRatedMovies } from "../../action/movieAction"
import _ from "lodash"
import ReactItemCarousel from "../carousel/ReactItemCarousel"
import Collapse from './collaps'
import {searchTrailer} from "../../action/youtubeAction"

class PopularMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopularMovies: false
        }
        this.onClickPopular = this.onClickPopular.bind(this)
    }

    componentDidMount() {
        this.props.getPopularMovies(1)
        this.props.topRatedMovies(1)
        this.props.searchTrailer()
    }
    showData(data) {
        if (!_.isEmpty(data)) {
            return (
                <ReactItemCarousel movies={data} onClick={this.onClickPopular} />
            )
        }  
    }
    
    onClickPopular() {
        this.setState({
            isPopularMovies: true
        })
    }
    render() {
        return (
            <div>
                <hr className="my-4 "></hr>

                <div className="text-white">
                    <h1 className="display-5">Popular Movies</h1>
                    <div>{this.showData(this.props.MovieData.popularMovies)}</div>
                    {
                        this.state.isPopularMovies? <Collapse/>: null
                    }
                </div>
                <hr className="my-4 "></hr>

                <div className="text-white"><h1 className="display-5">Top rated movies</h1>
                    <div>{this.showData(this.props.MovieData.topRatedMovies)}</div>

                </div>
                
                <hr className="my-4"></hr>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        MovieData: state.MovieData
    };
}

export default connect(mapStateToProps, {
    getPopularMovies,
    topRatedMovies,
    searchTrailer
})(PopularMovies);