class Playlist extends Track {
 
  constructor(track, trackAttributes, playlist, playlistAttributes) {
     super(track, trackAttributes); 
     this.id = track.id;
    //  this.playlist.id = playlist_id
      this.name = trackAttributes.name;  
      this.tracks = trackAttributes.tracks;
     // this.tracks should be an array of Track objects
     debugger
     Playlist.all.push(this);
   
}

  renderPlaylistCard(index) {
      return   `            
      <div data-id=${this.id}>
      <h4><li>Playlist Name: ${this.name}</h4></li>   
      
      <h4>Tracks: ${this.tracks}</h4>     
      </div> </li>
      `;  
      

      //<h4>Tracks: ${this.tracks}</h4>


      //<h4>Title: ${this.tracks.title}</h4>
      //<h4>Artist: ${this.tracks.artist}</h4> 
  }
}  


Playlist.all = [];

// Get the app working so that as you display each playlist, you also display the associated tracks beneath
// Remove the tracks-container because each track will be listed under its playlist
// this.tracks for the Playlist class should be an array of Track objects
// study the filter method in JS