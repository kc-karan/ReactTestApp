import React from 'react'
import Dropdown from '@trendmicro/react-dropdown';
import {MenuItem} from '@trendmicro/react-dropdown';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';

class Dd extends React.Component {
	
	constructor(props) {
		super(props);
		// fetchedQuestions = fetchQuestions(UserID);
		// Dummy data: 
		var fetchedQuestions = {
			question1: {
				content: "<h1>Ad tempor amet aliquip</h1> <p> ullamco est ex. Excepteur ipsum qui mollit aliquip nostrud et. Officia nostrud esse Lorem magna tempor quis pariatur </p> exercitation ut officia voluptate. Reprehenderit ad incididunt esse consequat reprehenderit minim id duis eu eiusmod voluptate eiusmod duis. Reprehenderit et veniam ea nisi Lorem sit minim proident magna consectetur dolore do eiusmod eu. Do mollit ut cillum est mollit ex. Magna adipisicing ea amet in consequat est consectetur adipisicing nulla dolor elit adipisicing id duis."
			},
			question2: {
				content: "<h1>Irure anim enim duis ea mollit </h1> <p> aute reprehenderit ipsum in magna consectetur ipsum adipisicing sit. Ex exercitation ea aliqua reprehenderit consectetur. Veniam esse esse incididunt aliqua sit officia excepteur. </p> Dolor esse fugiat eu qui adipisicing non sit aute excepteur occaecat ut minim. Velit occaecat elit ut consectetur magna quis incididunt ut incididunt commodo laboris sunt. Sunt id esse Lorem nisi id consectetur irure labore et elit officia mollit in. Dolore cillum duis eu cupidatat excepteur amet ipsum tempor commodo."
			}, 
			question3: {
				content: "<h1>Qui tempor quis excepteur dolore occaecat </h1> <p> tempor duis aliquip irure reprehenderit commodo nisi. Magna amet tempor exercitation nostrud laborum velit est dolore eiusmod Lorem aliqua veniam ut. </p> Veniam ex incididunt velit Lorem. Et excepteur in sint sunt. Qui sit esse quis elit amet fugiat reprehenderit culpa eiusmod ex enim do sint. Qui nulla ea reprehenderit excepteur veniam cupidatat irure sint labore id occaecat eu duis exercitation."
			}
		}
		this.state = {questions: fetchedQuestions};
	}

	render() {

		var dropdownSelect = (eventKey) => {
			if(eventKey === 1) { 
				document.getElementById("question").innerHTML = this.state.questions.question1.content; 
			} else if(eventKey === 2) {
				document.getElementById("question").innerHTML = this.state.questions.question2.content;
			} else if(eventKey === 3) {
				document.getElementById("question").innerHTML = this.state.questions.question3.content;
			} else {
				console.log("Invalid option selected");
			}
		}

		return(
		<Dropdown btnSize="lg" onSelect={dropdownSelect}>
			<Dropdown.Toggle title="Select an option" />
			<Dropdown.MenuWrapper>
				<Dropdown.Menu>
					<MenuItem eventKey={1}>
						Question 1
					</MenuItem>
					<MenuItem eventKey={2}>
						Question 2
					</MenuItem>
					<MenuItem eventKey={3}>
						Question 3
					</MenuItem>
				</Dropdown.Menu>
			</Dropdown.MenuWrapper>
		</Dropdown>
		)
	}
}

export default Dd;
