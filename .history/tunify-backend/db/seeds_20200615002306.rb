# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or newd alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.new([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.new(name: 'Luke', movie: movies.first)


karaoke = Playlist.new(name: "karaoke")
lady = Playlist.new(name: "Country")


newtrack = Track.new(name: "My newest Track")
favtrack = Track.new(name: "my fav Track")
thetrack = Track.new(name: 'easy come, easy go', track_id: newtrack.id)
hey = Track.new(name: "aye", track_id: hey.id)
leastfav = Track.new(name: "I hate this Track",  track_id: hey.id)





hiphop = Track.create(name: "Hip Hop Horray")
country = Playlist.create(name: "Country Songs", track_id: hiphop.id)

# Playlist.destroy_all
# Track.destroy_all











