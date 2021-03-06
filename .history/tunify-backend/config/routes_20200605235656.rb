Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resources :playlists
        resources :tracks do
      end
      
        collection do
          get :top_country
          get :random
          get :search
        end
      end
    end
  end
