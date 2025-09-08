# app/models/project.rb
class Project
  include Mongoid::Document
  include Mongoid::Timestamps

  field :eng_title, type: String
  field :jap_title, type: String
  field :eng_home_description, type: String
  field :jap_home_description, type: String
  field :home_image_url, type: String # S3 URL
  field :github_url, type: String
  field :live_url, type: String
  field :download_url, type: String
  field :badge, type: String
  field :eng_sticky_scroll_headers, type: Array
  field :jap_sticky_scroll_headers, type: Array
  field :eng_project_description, type: String
  field :jap_project_description, type: String
  field :eng_scroll_description, type: String
  field :jap_scroll_description, type: String
  field :eng_challenges, type: Array
  field :jap_challenges, type: Array
  field :eng_features, type: Array
  field :jap_features, type: Array
  field :screenshot_urls, type: Array

  field :tech_stack, type: Array
  field :order, type: Integer

  # validates :eng_title, presence: true
end
