Crafty::Application.routes.draw do
  root :to => "angular#app"
  get '/*a' => "angular#app"
end
