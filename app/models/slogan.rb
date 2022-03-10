class Slogan < ApplicationRecord
    validates_presence_of :first_name
    validates_presence_of :last_name
    validates :email, presence: true, uniqueness: true, format: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

    validates :slogan, presence: true, length: {maximum:50}
end
