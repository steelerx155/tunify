class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all       
        render json: TrackSerializer.new(tracks)       
   end


    

     def show 
      track = Track.find_by(params[:id])
      
      render json: TrackSerializer.new(track)
     end

     def create 
      track = Track.create(track_params)
     # if track.save
        
      render json: TrackSerializer.new(track)
      else
        
     end
    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist, :playlist_id)
  end

end
