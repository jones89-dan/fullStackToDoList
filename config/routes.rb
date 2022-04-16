Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do

  resources :users, only: [:create]

  get    'tasks'                    => 'tasks#index'
  post   'tasks'                    => 'tasks#create'
  get    'tasks/:id'                => 'tasks#show'
  put    'tasks/:id'                => 'tasks#update'
  put    'tasks/:id/mark_complete'  => 'tasks#mark_complete'
  put    'tasks/:id/mark_active'    => 'tasks#mark_active'
  delete 'tasks/:id'                => 'tasks#destroy'
end
