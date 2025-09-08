# app/controllers/projects_controller.rb
class ProjectsController < ApplicationController
  def index
    projects = Project.all.order_by(order: :asc)
    render json: projects
  end

  def show
    project = Project.find(params[:id])
    render json: project
  end
end
