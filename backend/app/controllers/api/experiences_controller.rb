# app/controllers/experiences_controller.rb
class Api::ExperiencesController < ApplicationController
  def index
    experiences = Experience.all.order_by(order: :asc)
    render json: experiences
  end
end
