# app/models/experience.rb
class Experience
  include Mongoid::Document
  include Mongoid::Timestamps

  field :company, type: String
  field :role, type: String
  field :description, type: String
  field :start_date, type: Date
  field :end_date, type: Date
  field :jap_start_date, type: String
  field :jap_end_date, type: String
  field :bullets, type: Array
  field :order, type: Integer

  validates :company, :role, presence: true
end
