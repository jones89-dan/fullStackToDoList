json.tasks do
  json.array! @tasks do |task|
    json.id         task.id
    json.content    task.content
    json.completed  task.completed
    json.due        task.due
    json.created_at task.created_at
    json.updated_at task.updated_at
  end
end
