class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @todo = Todo.new(params.require(:todo).permit([:text, :project_id]))
		if @todo.save
			redirect_to projects_path
		end
  end

  def update
		@todo = Todo.find(params[:id])
		@todo.update(:isCompleted => !@todo.isCompleted)
  end
  
  # private
  # def todo_params
  #   params.require(:todo).permit(:text, :project_id)
  # end

  
end