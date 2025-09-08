# app/models/resume.rb
class Resume
  include Mongoid::Document
  include Mongoid::Timestamps

  field :file_url, type: String # S3 URL
  field :updated_at, type: DateTime

  validates :file_url, presence: true
end
