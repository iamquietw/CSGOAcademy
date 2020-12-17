import React from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, PanelHeaderBack, Panel, CardGrid, Card } from '@vkontakte/vkui';

const tests = [
	{
		id: 0,
		image: 'https://sun9-35.userapi.com/impf/HBkFRFKMwujwUM3VEXT5V7H5p7smN61cs2ClZA/Cm1Fe4mGizk.jpg?size=460x215&quality=96&proxy=1&sign=3771c579aa16277a9d74825129489c92&type=album',
		title: 'История и механика игры',
		padding: "9%"
	},
	{
		id: 1,
		image: 'https://sun9-18.userapi.com/impf/q_Z0IMQ1C3uhQBC11jWZ7XZrMtwbOE6qZ3B0WA/jBCMDKn7_FM.jpg?size=1280x720&quality=96&proxy=1&sign=aa720363aac8aff2496c63d2e6864e4c&type=album',
		title: 'Оружие',
		padding: "30%"
	},
];

// eslint-disable-next-line
var SelectedTest = 0;

class SelectTest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
		};
		
	}

	render() {
        const {id, go} = this.props;

        return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={go} data-to="home"/>}
				>
					Выбор теста</PanelHeader>
				{tests.map((item) => <CardGrid>
					<Card style={{ background: 'url(' + item.image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} size="l"  onClick={(e) => {
						SelectedTest = item.id;
						go(e);
					}} data-to={"test"}>
						<div style={{ height: 96, display: 'table' }}>
							<div style={{ fontFamily: '"SF Pro Display Semibold", monospace', color: 'white', display: 'table-cell', verticalAlign: 'middle', paddingLeft: item.padding, whiteSpace: 'nowrap' }}>
								{item.title}
							</div>
						</div>
					</Card>
				</CardGrid>)}
			</Panel>
		);
	}
}

SelectTest.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SelectTest;
// eslint-disable-next-line
export var SelectedTest;