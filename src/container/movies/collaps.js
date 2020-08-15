import React from 'react'
import { useDispatch, useSelector } from "react-redux"

// import { MDBContainer} from 'mdbreact'

const Collaps = (props) => {
  const dispatch = useDispatch();
  const movieData = useSelector(state => state.MovieData)
  console.log(movieData.fetchTrailer)
  return (
    <div className="embed-responsive embed-responsive-16by9 col align-self-center">
      <iframe title="xyz" className="embed-responsive-item" src="https://www.youtube.com/embed/4EC7P5WdUko"></iframe>
    </div>
  )
}

export default Collaps;