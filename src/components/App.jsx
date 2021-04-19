import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

// videos: exampleVideoData,
// current: exampleVideoData[0]
// videos: [],
// current: null

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      current: exampleVideoData[0]
    };

    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    console.log('query: ', query);
    searchYouTube(query, (videos) => {
      this.setState({
        videos: videos,
        current: videos[0]
      });
    });
  }

  addMovie(movie) {
    // console.log(movie);
    this.setState({current: movie});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="row">
            <div className="col-mid-6 offset-md-3" >
              <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}
              />
            </div>
          </div>
        </nav>

        <div className="row">

          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>

          <div className="col-md-5">
            <VideoList videos={this.state.videos}
              addMovie={this.addMovie}
            />
          </div>

        </div>

      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
