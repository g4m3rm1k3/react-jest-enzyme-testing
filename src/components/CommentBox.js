import React from "react";

class CommentBox extends React.Component {
	state = { comment: "" };

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();

		// TODO - Call an action creator
		// And save the comment
		this.setState({ comment: "" });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea onChange={this.handleChange} value={this.state.comment} />
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}
export default CommentBox;
