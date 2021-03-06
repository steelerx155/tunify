class TrackSerializer
  include FastJsonapi::ObjectSerializer 
  attributes :id, :name, :artist, :image, :duration, :popularity, :preview, :spotify_id
  belongs_to :playlists
end
