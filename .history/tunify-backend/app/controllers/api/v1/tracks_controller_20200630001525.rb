class API::V1::TracksController < ApplicationController
  
  
  def index
        tracks = Track.all 
        options = {
          include: [:playlist]
      }      
        render json: TrackSerializer.new(tracks, options)       
  end


    #  def show 
    #   track = Track.find_by(params[:id])
      
    #   render json: TrackSerializer.new(track)
    #  end

     def create 
      track = Track.new(track_params)
      if track.save
        options = {
          include: [:playlist]
        }
      render json: TrackSerializer.new(track, options)
     else
      render json: {errors: track.errors.full_messages}
      end
     end
    
      
 private
  def track_params
    params.require(:track).permit(:title, :artist, :playlist_id, :playlist)
  end

end
