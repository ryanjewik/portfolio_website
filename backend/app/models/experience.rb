# app/models/experience.rb
class Experience
  include Mongoid::Document
  include Mongoid::Timestamps

  field :company, type: String
  field :role, type: String
  field :jap_role, type: String
  field :title, type: String
  field :jap_title, type: String
  field :description, type: String
  field :jap_description, type: String
  field :start_date, type: String
  field :end_date, type: String
  field :jap_start_date, type: String
  field :jap_end_date, type: String
  field :bullets, type: Array
  field :jap_bullets, type: Array
  field :order, type: Integer

  validates :company, :role, presence: true
    field :start_date, type: String
    field :end_date, type: String
    # validates :company, :role, presence: true
end
