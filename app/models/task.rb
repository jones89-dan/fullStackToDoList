class Task < ApplicationRecord
  validates :content, length: { maximum: 200 }, presence: true

  belongs_to :user
end
