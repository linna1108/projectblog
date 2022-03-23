import "./commentForm.css"

export default function CommentForm() {
  return (
    <div className="commentForm">
        <h2 className="commentTitle">Add Comments</h2>
        <form >
				<textarea
					className="commentTextArea"
					rows="5"
					value=""
				></textarea>				
		</form>
        <button className="commentBtn" type="submit">Submit</button>                                                
    </div>
  )
}
