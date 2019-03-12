import React from 'react'
import Dropdown from '@trendmicro/react-dropdown';
import {MenuItem} from '@trendmicro/react-dropdown';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';

function Dd() {
	return(
	<Dropdown>
		<Dropdown.Toggle title="Select an option" />
		<Dropdown.MenuWrapper>
			<Dropdown.Menu>
				<MenuItem>
					Menu item one
				</MenuItem>
				<MenuItem>
					Menu item two
				</MenuItem>
				<MenuItem>
					Menu item three
				</MenuItem>
			</Dropdown.Menu>
		</Dropdown.MenuWrapper>
	</Dropdown>
	)
}

export default Dd;
