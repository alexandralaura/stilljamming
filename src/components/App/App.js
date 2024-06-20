//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={SearchResults:[
      {name: "Example Track Name",
      artist: "Example Track Artist",
      album: "Example Track Album",
      id: 1
      }
    ]}
  }
  render() {
    return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
    
      <div className="App">
         {/*add a searchbar component*/}
         <SearchBar/>
        <div className="App-playlist">
        {/* searchresults component*/}
        <SearchResults/>
        {/* playlists component*/}
        <Playlist/>

         </div>
      </div>
   </div>
    )

  }
};

/*function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
    
      <div className="App">
         {/*add a searchbar component*//*}
        <div className="App-playlist">
        {/* searchresults component*//*}
        {/* playlists component*//*}

         </div>
      </div>
   </div>
    
  );
}*/

export default App;
