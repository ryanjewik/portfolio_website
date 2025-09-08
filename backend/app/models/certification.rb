# app/models/certification.rb
class Certification
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :issuer, type: String
  field :issue_date, type: Date
  field :expiration_date, type: Date
  field :jap_issue_date, type: String
  field :jap_expiration_date, type: String
  field :credential_url, type: String
  field :eng_description, type: String
  field :jap_description, type: String
  field :eng_subheader, type: String
  field :jap_subheader, type: String
  field :eng_tag, type: String
  field :jap_tag, type: String
  field :validation_id, type: String
  field :order, type: Integer

  validates :name, :issuer, presence: true
end
