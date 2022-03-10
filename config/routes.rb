Rails.application.routes.draw do
  resources :places
  resources :photos
  resources :racers
  resources :slogans
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'site/home'
  root to: 'slogans#index'
end

