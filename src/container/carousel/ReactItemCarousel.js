import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../cardContainner"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const ReactItemCarousel = (props)=> {

    return(<Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
    >


        {/* <div><Card name="pramod"/></div>
        <div><Card name="pramod"/> </div>
        <div><Card name="pramod"/></div>
        <div><Card name="pramod"/></div>
        <div><Card name="pramod"/></div>
        <div><Card name="pramod"/> </div>
        <div><Card name="pramod"/></div>
        <div><Card name="pramod"/></div> */}

        {
          props.movies.map(movie=> {
            return(<div><Card  movie={movie} onClick={props.onClick}/></div>)
          })
        }
      </Carousel>)
}

export default ReactItemCarousel