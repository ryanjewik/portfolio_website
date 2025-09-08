Rails.application.routes.draw do
  post "/api/contact", to: "contact#create"

  namespace :api do
    resources :projects, only: [:index, :show]
    resources :experiences, only: [:index]
    resources :certifications, only: [:index]
    resource :resume, only: [:show]
  end
end
