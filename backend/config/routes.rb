Rails.application.routes.draw do
  post "/api/contact", to: "contact#create"
end
