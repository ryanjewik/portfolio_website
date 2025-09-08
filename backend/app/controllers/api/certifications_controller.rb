# app/controllers/certifications_controller.rb
class Api::CertificationsController < ApplicationController
  def index
    certifications = Certification.all.order_by(order: :asc)
    render json: certifications
  end
end
