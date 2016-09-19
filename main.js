// Back To Here


const App = React.createClass({

  getInitialState() {
    return {
      movieDB: [],
      balance: 0,
      totalCredit: 0,
      totalDebit: 0,
    }
  },

  upvoteMovie(id) {

    let{movieDB} = this.state;
    let editedMovie = movieDB.filter(movie => movie.id === id);
    editedMovie[0].rating = editedMovie[0].rating + 1;
    this.state.movieDB = movieDB.filter(movie => movie.id !== id)
    this.setState({
      movieDB: [...movieDB]
    })

  },

    downvoteMovie(id) {

    let{movieDB} = this.state;
    let editedMovie = movieDB.filter(movie => movie.id === id);
    editedMovie[0].rating = editedMovie[0].rating - 1;
    this.state.movieDB = movieDB.filter(movie => movie.id !== id)
    this.setState({
      movieDB: [...movieDB]
    })

  },

  addNewMovie(newmovie) {
    let {movieDB, balance, name} = this.state;
    this.setState({
      movieDB: [...movieDB, newmovie]
    })
  },



  render () {
    let {movieDB, balance, name, upvoteMovie} = this.state;
    return (
      <div className="container">
      <br/>
      <div className="jumbotron">
      <div className="container">
      <h1>Movie Rating App</h1>
      <h2>Please input a movie below. Have a lovely day!</h2>
      <div className="jumbotron">
 
      <hr/>
      <NewmovieForm
      addNewMovie={this.addNewMovie}
      />
      <div>
    <table className="table">
    <thead>
    <tr>
    <th>Title</th>
    <th>Image</th>
    <th>Rating</th>
    <th>Upvote</th>
    <th>Downvote</th>
    </tr>
    </thead>
    <tbody>
    {movieDB.map((movie) => (
      <tr key={movie.id}>
      <td>{movie.name}</td>
      <td><img src={movie.url} width="128px" height="128px"/></td>
      <td>{movie.rating}</td>
      <td>
      <button onClick={this.upvoteMovie.bind(null, movie.id)} className="btn btn-sm btn-info">Upvote</button>
      </td>
      <td>
      <button onClick={this.downvoteMovie.bind(null, movie.id)} className="btn btn-sm btn-danger">Downvote</button>
      </td>
      </tr>
      ))}
    </tbody>
    </table>
    </div>
      </div>
      </div>
      </div>
      </div>
      )
  }
})


const NewmovieForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    let movie = {
      name: document.getElementById('name').value,
      url: "http://www.androidcrush.com/wp-content/uploads//2016/03/best-Free-movie-apps-for-android-2016.jpg",
      rating: 0,
      id: uuid()
    }
    console.log('movie' ,movie);
    this.props.addNewMovie(movie);

  },


  plus() {
    let removeMinus = name.value
    if (removeMinus.charAt(0)==="-") {
      removeMinus = removeMinus.slice(1)
    }
    this.refs.name.value = removeMinus;
  },

  minus() {
    this.refs.name.value = "-"+this.refs.name.value;  
  },

  render() {
    return (
      <div className="container">
      <form onSubmit={this.submitForm}>         
      <div className="form-group">
      <label htmlFor="name"><span>      </span>Movie name:</label>
      <div>
      <input ref="movieName" type="text" className="form-control" id="name" placeholder="Citizen Kane" required/>           
      </div>
      <br/>
      
    <button type="submit" htmlFor="name" className="btn btn-lg btn-info {/*col-lg-2*/}">Submit</button>
    <br/>
    <br/>
    </div>
    </form>

    </div>
    )
  }
})




ReactDOM.render (
  <App/>,
  document.getElementById('root')
  )














