class Player < ActiveRecord::Base
	validates :name, length: {maximum: 50}

	def print_hund
		p "8"*100
	end
end
