
require 'rest_client'
require 'json'

class PlayersController < ApplicationController
	include PlayersHelper

	def index
		makeplayers			
		players = Player.all
		render json: players
	end
end
