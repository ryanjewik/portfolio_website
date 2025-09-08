# app/controllers/experiences_controller.rb
class Api::ExperiencesController < ApplicationController
  def index
    experiences = Experience.all.map do |exp|
      {
        _id: exp.id.to_s,
        company: exp.company,
        role: exp.role,
        jap_role: exp.jap_role,
        title: exp.title,
        jap_title: exp.jap_title,
        description: exp.description,
        jap_description: exp.jap_description,
        start_date: exp.start_date,
        end_date: exp.end_date,
        jap_start_date: exp.jap_start_date,
        jap_end_date: exp.jap_end_date,
        bullets: exp.bullets || [],
        jap_bullets: exp.jap_bullets || [],
        order: exp.order
      }
    end
    render json: { experiences: experiences }
  end
end
