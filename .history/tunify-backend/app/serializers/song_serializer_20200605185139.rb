class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :artists, :image, :duration, :popularity, :preview, :spotify_id
  #  belongs_to :playlist
end
