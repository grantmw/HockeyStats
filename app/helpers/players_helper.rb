require 'json'
require 'rest_client'

module PlayersHelper

	def makeplayers
		response = RestClient.get('https://www.kimonolabs.com/api/d0jzznle?apikey=XwbNtFLFYkhZgNwsPN8e8edYSrE9Y7dS')
		parsed_response = JSON.parse(response)
		p parsed_response
		Player.find_by(name: "Alexander Ovechkin").update(
			season_points: parsed_response['results']['Ovechkin'][0]['seasonpoints'], 
			season_assists: parsed_response['results']['Ovechkin'][0]['seasonassists'],
			season_goals: parsed_response['results']['Ovechkin'][0]['seasongoals'],
			)
		Player.find_by(name: "Nicklas Backstrom").update(
			season_points: parsed_response['results']['Backstrom'][0]['s-points'], 
			season_assists: parsed_response['results']['Backstrom'][0]['s-assists'],
			season_goals: parsed_response['results']['Backstrom'][0]['s-goals'],
			)
		p parsed_response['results']['Backstrom'][0]['fullname']['text']
	end
end