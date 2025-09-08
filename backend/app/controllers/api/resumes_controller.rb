# app/controllers/resumes_controller.rb
class Api::ResumesController < ApplicationController
  def show
    resume = Resume.last
    render json: resume
  end
end
