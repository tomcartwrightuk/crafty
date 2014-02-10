class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :brewery
      t.string :name
      t.string :review
      t.integer :score
    end
  end
end
