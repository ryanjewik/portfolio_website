# app/controllers/certifications_controller.rb
class Api::CertificationsController < ApplicationController
    def index
      certifications = Certification.all.map do |cert|
        {
          _id: cert.id.to_s,
          eng_title: cert.name,
          jap_title: cert.name, # If you have a Japanese title field, use it
          eng_description: cert.eng_description,
          jap_description: cert.jap_description,
          eng_date: cert.issue_date,
          jap_date: cert.jap_issue_date,
          validation_id: cert.validation_id,
          issuer: cert.issuer,
          order: cert.order,
          jap_expiration_date: cert.jap_expiration_date,
          expiration_date: cert.expiration_date
        }
      end
      render json: { certifications: certifications }
    end
end
