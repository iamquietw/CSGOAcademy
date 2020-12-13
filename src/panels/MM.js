import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, CardScroll, Gallery, Header, CardGrid} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import "./mm.css"

const osName = platform();

const MM = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Режимы игры
        </PanelHeader>
        <Group>
            <Div>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        Привет! В этой статье мы тебе расскажем о званиях, уровнях и соревновательном режиме. <br/><br/>Начнем с уровней, всего их в игре 40 ( Начиная от новобранца до Маршала ), после получения 40 уровня вы получаете медаль за службу CS:GO, в случае если у вас нет Prime аккаунта, то при получении 21 ранга ( Лейтенант ) его без покупки. О системе званий: Всего в игре 17 званий ( Начиная от Сильвера 1 заканчивая Глобалом, получить звание можно после успешной калибровки. <br/><br/>После калибровки Вы можете своё звание как повышать, выигрывая матчи, так и понизить, проиграв. Для успешной калибровки необходимо выиграть 10 игр Соревновательного режима ( ММ ).
                    </Div>
                </Card>
            </Div>
            <Group separator="hide" header={<Header mode="secondary">Полный список званий</Header>}>
                <CardGrid>
                    <Card size={"l"} mode={"shadow"}>
                        <img style={{width: "100%"}} src={"https://sun9-36.userapi.com/c850432/v850432927/1d8c0a/QRAtgEdTX9k.jpg"} alt={"Ranks"}/>
                    </Card>
                </CardGrid>
            </Group>
        </Group>
        <Group separator={"show"}>
            <CardGrid>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        Соревновательный режим - Это игра где участвуют 2 команды по 5 игроков, счет раундов здесь до 30. Игра заканчивается только при счете в 16 побед одной из команд, либо ничьей ( 15:15 ). В этом режиме невозможно поменять команду, и при выходе или нарушении вас будет ждать наказание. В отличие от обычного режима, в соревновательном другая экономика ( Если в обычном максимум 10 000 долларов, то в соревновательном 16 000 ). В соревновательном режиме запрещено свободно перемещаться и видеть игроков от 3 лица. А теперь расскажем о плюсах Соревновательного режима!
                    </Div>
                </Card>
            </CardGrid>
        </Group>

    </Panel>
);

MM.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default MM;
