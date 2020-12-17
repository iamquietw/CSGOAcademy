import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, CardGrid, Card} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './mechanics.css';
import {Div} from "@vkontakte/vkui/dist/es6";

const osName = platform();

const Mechanics = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Механика игры
		</PanelHeader>
		<CardGrid>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					Привет!
					<br/><br/>
					В этой статье мы расскажем тебе о механике игры CS:GO, пожалуй, начнем с самого банального.
				</Div>
			</Card>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					Не стреляйте когда вы бежите, так как от этого увеличивается разброс пуль, и поэтому попасть в противника будет гораздо сложнее, поэтому при стрельбе рекомендуется либо стоять, либо сидеть ( при том что когда вы сидите, вам будет легче контролировать отдачу оружия )
				</Div>
			</Card>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					Многие игроки перед тем как заплентить бомбу бегут с ножом, думая что так быстрее, на самом деле это работает немного не так, и чтобы быстрее заплентить бомбу рекомендуется бежать сразу с ней, так как скорость от этого не изменится, а вот плент произойдет гораздо быстрее, чем когда вы бежите с ножом и так плентите бомбу.
				</Div>
			</Card>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					При попадании в голову с AK-47, смерть будет моментальной, даже если у вас куплен шлем, поэтому если у ваших противников есть AK-47, шлем покупать не рекомендуется, так как при попадании 1 пули в голову вы сразу умрете. ( Кстати хорошее оружие, только отдача большая ).
				</Div>
			</Card>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					На карте Инферно есть курицы, но мало кто знал, что они помогут вычислить врага. Курица убегает от человека, поэтому если вы видите что курица бежит, значит рядом прячется враг.
				</Div>
			</Card>
			<Card mode={"shadow"} size={"l"}>
				<Div>
					Время плента бомбы составляет около 4 секунд, поэтому если до конца раунда останется 3 секунды и меньше, поставить бомбу Вы, к сожалению, не успеете.
				</Div>
			</Card>
		</CardGrid>
	</Panel>
);

Mechanics.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Mechanics;
