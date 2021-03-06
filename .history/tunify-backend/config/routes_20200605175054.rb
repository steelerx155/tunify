# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
#   namespace :api do 
#     namespace :v1 do 
#     resources :playlists 
#     resources :song
#     end
#   end


  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :songs do
          collection do
            get :top_country
            get :random
            get :search
            # resources :songs do
            # end
            end
          end
        end
    end
  end

