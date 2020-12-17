import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Card, CardGrid} from "@vkontakte/vkui";

import "./main.css"

const Home = ({ id, go }) => (
	<Panel id={id}>
			<PanelHeader>Академия CS:GO</PanelHeader>
			<Group>
				<Div>
					<CardGrid>
						<Card onClick={go} id="card_mechanics" data-to={"mechanics"} size="m" mode={"shadow"}>
							<div id={"card_mechanics_parent"} style={{ height: 96 }}>
								<div id={"card_mechanics_text"}>
									Особенности
									механики игры
								</div>
							</div>
						</Card>
						<Card id="card_skins" size="m" mode={"shadow"} onClick={go} data-to={'skins'}>
							<div id="card_skins_parent" style={{ height: 96 }}>
								<div id={"card_skins_text"}>
									Скины

								</div>
							</div>
						</Card>
						<Card id={"card_info"} size="l" mode={"shadow"} onClick={go} data-to={"info"}>
							<div id={"card_info_parent"} style={{ height: 96 }}>
								<div id={"card_info_text"}>
									История и другая информация об игре
								</div>
							</div>
						</Card>
						<Card id={"card_ranks"} size="l" mode={"shadow"} onClick={go} data-to={"mm"}>
							<div id={"card_ranks_parent"} style={{ height: 96 }}>
								<div id={"card_ranks_text"}>
									Всё о званиях и соревновательном режиме
								</div>
							</div>
						</Card>
						<Card id="card_modes" size="s" mode={"shadow"} onClick={go} data-to={"modes"}>
							<div id={"card_modes_parent"} style={{ height: 96 }}>
								<div id={"card_modes_text"} >
									Режимы
								</div>
							</div>
						</Card>
						<Card id={"card_test"} size="s" mode={"shadow"} onClick={go} data-to={"selectTest"}>
							<div id={"card_test_parent"} style={{ height: 96 }}>
								<div id={"card_test_text"}>
									Тесты
								</div>
							</div>
						</Card>
						<Card id={"card_tactic"} size="s" mode={"shadow"} onClick={go} data-to={"tactics"}>
							<div id={"card_tactic_parent"} style={{ height: 96 }}>
								<div id={"card_tactic_text"}>
									Тактики
								</div>
							</div>
						</Card>
						<Card id={"card_stat"} size={"l"} mode={"shadow"} onClick={go} data-to={"apitest"}>
							<div id={"card_stat_parent"} style={{ height: 96 }}>
								<div id={"card_stat_text"}>
									Статистика игрока
								</div>
							</div>
						</Card>
					</CardGrid>
				</Div>
			</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
