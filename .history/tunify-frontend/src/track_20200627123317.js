class Track {
 
    constructor(playlist, trackAttributes) {  
        this.id = playlist.id
        this.artist = trackAttributes.artist
        this.title = trackAttributes.title
        Track.all.push(this);
       //  debugger
    }
  
    renderTrackCard() {
        return  `            
         
         <h4><li>Track Artist: ${this.artist}</h4></li>
         <h4><li>Track Title: ${this.title}</h4></li>       
          </li>
         `
         ;            
    }
     
}

Track.all = [];





// function getTracks() {
//     let newTrack = new Track(track, track.attributes)
//       track.attributes.map(tracks => function(track){
//         return track.artist(tracks)
//       }
//       )
                      
//     document.getElementById("playlist-container").innerHTML += newTrack.renderTrackCard();
            
//     }