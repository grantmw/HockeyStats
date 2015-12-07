class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name
      t.string :image_url
      t.integer :season_points
      t.integer :season_assists
      t.integer :season_goals


      t.timestamps null: false
    end
  end
end
