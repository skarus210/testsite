Rails.application.routes.draw do
  root 'projects#index', as: :root_url
  post '/', to: 'todos#create'
  
end
