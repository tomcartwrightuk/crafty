Crafty::Application.routes.draw do
  scope :api do
    resources :reviews, :only => [:index, :create, :edit]
  end
  root :to => "angular#app"
  get '/*a' => "angular#app"
end
