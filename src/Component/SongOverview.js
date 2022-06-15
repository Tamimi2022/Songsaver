import React, { Component } from "react"
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [
          {
          id: 1,
          title: "Relaxing Piano Music",
          artist: "Seven River",
          genre: "Classic",
          rating: 5,
          link: "https://www.youtube.com/watch?v=9v5j9vf4vFY"
          },
          {
            id: 2,
            title: "Love & United",
            artist: "Farid Attamimi",
            genre: "Soul",
            rating: 4,
            link: ""
            },
            {
              id: 3,
              title: "Deep Focus",
              artist: "Focus Music",
              genre: "Jazz",
              rating: 3,
              link: "https://youtu.be/8yRgYiNH39E"
              },
              {
                id: 4,
                title: "Deep Focus",
                artist: "Focus Music",
                genre: "Rock",
                rating: 2,
                link: "https://youtu.be/8yRgYiNH39E"
                },
                {
                  id: 5,
                  title: "Deep Focus",
                  artist: "Focus Music",
                  genre: "Pop",
                  rating: 1,
                  link: "https://youtu.be/8yRgYiNH39E"
                  }
        ]
      }
      this.addSong = this.addSong.bind(this)
      this.songsDelete = this.songsDelete.bind(this)
      this.sortSongs = this.sortSongs.bind(this)
      this.sortReversed = this.sortReversed.bind(this)

  
    }
  
    addSong = (song) => {
                          // do something to change the state
                          this.setState(prevState => {
                            const songs = [...prevState.songs]
                            songs.push({
                              id: song.id,
                              title: song.title,
                              artist: song.artist,
                              genre: song.genre,
                              rating: song.rating
                            })
                            return { songs };
                          })
    }
    songsDelete() {
      this.setState({ songs: [] })
    }
    sortSongs(genre) {
      this.setState(prevState => {
          const songs = prevState.songs.filter(item => {
            return item.genre === genre
          })
              .map(song =>
                  <SongList key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                  />); 
          return { songs };
      })
  }
  sortReversed(rating) {
    this.setState(prevState => {
          const songs = prevState.songs.filter(item => {
            return item.rating === rating
          }
          )
        //const songlist = prevState.songs.sort((a, b) => (b[rating].toUpperCase() > a[rating].toUpperCase()) ? 1 : -1)
            .map(song =>
                <SongList key={song.id} artist={song.artist} title={song.title} genre={song.genre} rating={song.rating} deleteSong={this.deleteSong}
                />);
        return { songs };
    })
}

  
    render() {
      const allSongs = this.state.songs.map(item => <SongList key={item.id} artist={item.artist} title={item.title} genre={item.genre} rating={item.rating} deleteSong={this.deleteSong} />)

      return (
        <div>
          <h2>Song's List</h2>
                <Button songsDelete={this.songsDelete} />
                <SongForm addSong={this.addSong}/>
                      <table style={{width: "100%"}}>
                           <tbody>
                            <tr className="song-header">  
                                    <th className="song-row__item">Song</th>
                                    <th className="song-row__item">Artist</th>
                                    <th className="song-row__item">Genre</th>
                                    <th className="song-row__item">Rating</th>
                            </tr>
                          </tbody>
                      </table>
                <Header allSongs={allSongs}/>

                <Footer />
        </div>
      );
    }
  }
  
  export default SongOverview;