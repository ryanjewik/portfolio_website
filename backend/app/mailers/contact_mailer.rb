class ContactMailer < ApplicationMailer
  def contact_email(name, email, message)
    @name = name
    @email = email
    @message = message

    mail(
      to: "ryanjewik25@gmail.com",              # Your inbox
      from: "contact@ryanhideosmtp.com",       # Or your Gmail if you're using that
      reply_to: email,                       # This is key: sets Reply-To header
      subject: "New Contact Message from #{name}"
    )
  end
end
