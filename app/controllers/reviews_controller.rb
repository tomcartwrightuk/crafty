class ReviewsController < ApplicationController
  
  def index
    render :json => Review.all
  end

  def create
    review = Review.create(build_params)
    render :json => review
  end

  def edit
    review = Review.find_by_id(params[:review][:id])
    review.update_attributes(params[:review])
    render :json => review
  end

  private

  def build_params
    params.permit(:name, :brewery, :score, :review)
  end

end
