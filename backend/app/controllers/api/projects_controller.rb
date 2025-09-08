module Api
  class ProjectsController < ApplicationController
    def index
      s3_base = "https://ryan-jewik-portfolio-website.s3.us-west-2.amazonaws.com/"
      projects = Project.all.map do |proj|
        img_path = proj.home_image_url&.start_with?("s3://") ? proj.home_image_url.sub("s3://", "") : proj.home_image_url
        img_url = img_path.present? ? s3_base + img_path : nil
        {
          _id: proj.id.to_s,
          order: proj.order,
          eng_title: proj.eng_title,
          jap_title: proj.jap_title,
          eng_description: proj.eng_home_description,
          jap_description: proj.jap_home_description,
          image_url: img_url,
          badge: proj.badge,
          tech_stack: proj.tech_stack || [],
          github_url: proj.github_url,
          live_url: proj.live_url,
          download_url: proj.download_url
        }
      end
      render json: { projects: projects }
    end
  
     def show
      s3_base = "https://ryan-jewik-portfolio-website.s3.us-west-2.amazonaws.com/"
      project = Project.where(order: params[:id].to_i).first
      if project
        doc = project.as_document
        # Convert home_image_url and image_url
        img_path = doc["home_image_url"]&.start_with?("s3://") ? doc["home_image_url"].sub("s3://", "") : doc["home_image_url"]
        doc["image_url"] = img_path.present? ? s3_base + img_path : nil
        # Convert screenshot_urls array
        if doc["screenshot_urls"].is_a?(Array)
          doc["screenshot_urls"] = doc["screenshot_urls"].map do |url|
            url&.start_with?("s3://") ? s3_base + url.sub("s3://", "") : url
          end
        end
        render json: doc.merge({ _id: project.id.to_s })
      else
        render json: { error: 'Project not found' }, status: :not_found
      end
     end
  end
end
