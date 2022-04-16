class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.belongs_to :user, index: true
      t.string :content
      t.boolean :completed, default: false
      t.datetime :due

      t.timestamps
    end
  end
end
