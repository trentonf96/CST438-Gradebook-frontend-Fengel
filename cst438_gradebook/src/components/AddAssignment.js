import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class AddAssignment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			assignment: {
				assignmentName: "",
				dueDate: "",
				courseId: ""
			}
		};
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
		
	};

	handleChange = (e) => {
		this.setState({
			assignment: {
				...this.state.assignment,
				[e.target.name]: e.target.value.trim()

			}
		});
	}

	handleAdd = () => {
		this.props.addAssignment(this.state.assignment,this.state.assignment.courseId);
		this.handleClose();
	}

	render() {
		return (
			<div>
				<Button variant="outlined" color="primary" style={{ margin: 10 }} onClick={this.handleOpen}>
                    Add Assignment
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>New Assignment</DialogTitle>
                    <DialogContent style={{ paddingTop: 20 }} >
                        <TextField autoFocus fullWidth label="Name" name="assignmentName" onChange={this.handleChange} margin="normal" />
                        <TextField autoFocus fullWidth label="Due Date (YYYY-MM-DD)" name="dueDate" onChange={this.handleChange} margin="normal" />
                        <TextField autoFocus fullWidth label="Course ID (6-digits)" name="courseId" onChange={this.handleChange} margin="normal" />
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                        <Button color="primary" onClick={this.handleAdd}>Add</Button>
                    </DialogActions>
                </Dialog>
			</div>
		);
	}
}

AddAssignment.propTypes = {
  addAssignment: PropTypes.func.isRequired
}

export default AddAssignment;