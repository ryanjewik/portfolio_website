module Api
  class ProjectsController < ApplicationController
    def index
      projects = Project.all.map do |proj|
        {
          _id: proj.id.to_s,
          order: proj.order,
          eng_title: proj.eng_title,
          jap_title: proj.jap_title,
          eng_description: proj.eng_home_description,
          jap_description: proj.jap_home_description,
          image_url: proj.home_image_url,
          badge: proj.badge,
          tech_stack: proj.tech_stack || [],
          github_url: proj.github_url,
          live_url: proj.live_url,
          download_url: proj.download_url
        }
      end
      render json: { projects: projects }
    end
  end
end
