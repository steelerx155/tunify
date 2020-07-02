class Track {
 
    constructor(track, trackAttributes) {  
        this.id = track.id
        // this.playlist_id = trackAttributes.playlist_id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        this.name = trackAttributes.name
        Track.all.push(this);
       
    }
  
    renderTrackCard() {
        return  `  
         <div data-id=${this.id}>    
         <h3><li>Title: ${this.title}</h3></li>      
         <h3><li>Title: ${this.artist}</h3></li>
         <h3><li>Playlist Name: ${this.name}</h3></li>
         </div></div> </li>
         `
         ;            
    } 
}

Track.all = [];