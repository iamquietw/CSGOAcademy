import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, Header, CardGrid, CardScroll} from '@vkontakte/vkui';
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
            Матчмейкинг
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
                        Соревновательный режим - Это игра где участвуют 2 команды по 5 игроков, счет раундов здесь до 30. Игра заканчивается только при счете в 16 побед одной из команд, либо ничьей ( 15:15 ). В этом режиме невозможно поменять команду, и при выходе или нарушении вас будет ждать наказание. В отличие от обычного режима, в соревновательном другая экономика ( Если в обычном максимум 10 000 долларов, то в соревновательном 16 000 ). В соревновательном режиме запрещено свободно перемещаться и видеть игроков от 3 лица. А теперь расскажем о плюсах и минусах Соревновательного режима!
                    </Div>
                </Card>
            </CardGrid>
            <Div>
                <CardScroll style={{margin: "0 auto"}}>
                    <Card style={{backgroundColor: "var(--button_commerce_background)"}} id={"halfCard"} size={"m"} mode={"shadow"}>
                        <Div>
                            <span style={{color: "white"}}>Игроки более ответственны.</span>
                        </Div>
                    </Card>
                    <Card style={{backgroundColor: "var(--button_commerce_background)"}} id={"halfCard"} size={"m"} mode={"shadow"}>
                        <Div>
                            <span style={{color: "white"}}>Все те, кто мешают нормально играть получат наказание.</span>
                        </Div>
                    </Card>
                    <Card style={{width: "90%", backgroundColor: "var(--destructive)"}} size={"m"} mode={"shadow"}>
                        <Div>
                            <span style={{color: "white"}}>При вылете или намеренном выходе из игры вы получите блокировку ( Хоть это и правильно, но обидно когда вылетает игра и тебе дают бан соревновательного режима ).</span>
                        </Div>
                    </Card>
                </CardScroll>
            </Div>
        </Group>
        <Group separator={"show"}>
            <CardGrid>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        А теперь поговорим о блокировках. <br/><br/> Блокировки дают за нарушение правил игры, есть много видов блокировок, но мы перечислим самые популярные, пойдем по мере увеличения жесткости: <br/><br/>1. Самая безобидная блокировка - Блокировка на 30 минут и на 2 часа, это две минимальные блокировки.<br/><br/>2. Далее идут более длительные блокировки, первая из них длится 24 часа, а самая большая временная блокировка в CS:GO длится 7 дней. Остается лишь VAC бан, снять его никак невозможно, под VAC бан попадают игроки использующие запрещенные программы и софты ( Читы ), но VAC бан запрещает доступ не только к CS:GO, но и к другим играм компании Valve.
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
