import YouTube from 'youtube-node'
var youTube = new YouTube();

youTube.setKey('AIzaSyDD2eyLsF34vyFRUyNQitD90xllh6YkRGg');



 export const searchTrailer = ()=> dispatch=> {
    dispatch({
        type: "SEARCH_TRAILER_LOADING"
    })
    youTube.search('World War z Trailer', 2, function(error, result) {
        if (error) {
            dispatch({
                type: "SEARCH_TRAILER_FAILED"
            })
        }
        else {
          dispatch({
            type: "SEARCH_TRAILER_SUCCESS",
            payload: result
        })
        }
      });
}

 