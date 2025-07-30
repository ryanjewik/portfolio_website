class ContactController < ApplicationController
  def create
    begin
      name = params[:name]
      email = params[:email]
      message = params[:message]
      
      # Basic validation
      if name.blank? || email.blank? || message.blank?
        render json: { error: 'All fields are required' }, status: :bad_request
        return
      end

      # Validate email format
      unless email =~ /\A[^@\s]+@[^@\s]+\z/
        render json: { error: 'Invalid email format' }, status: :bad_request
        return
      end
      # Log the contact form submission
      Rails.logger.info "Contact form submitted: #{name}, #{email}, #{message}"

      # Send email
      ContactMailer.contact_email(name, email, message).deliver_now
      
      render json: { message: 'Email sent successfully' }, status: :ok
    rescue => e
      Rails.logger.error "Contact form error: #{e.message}"
      render json: { error: 'Failed to send email' }, status: :internal_server_error
    end
  end
end