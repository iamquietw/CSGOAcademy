import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, CardScroll} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './modes.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

const Modes = props => (
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
                <Card size={"l"} mode={"shadow"} id={"card_title"}>
                    <Div style={{ height: 96 }}/>
                </Card>
            </Div>
        </Group>
        <Group>
            <Div>
                <Card size={"l"} mode={"shadow"} id={"card_sub"}>
                    <Div id={"card_sub_text"}>
                        В Counter Strike: Global Offensive есть несколько различных режимов игры, некоторые из которых сильно различаются по цели, которую необходимо выполнить для победы. В этой статье мы расскажем тебе о всех этих режимах!
                    </Div>
                </Card>
            </Div>
        </Group>
        <Group>
            <Div>
                <CardScroll>
                    <Card size="l" mode={"shadow"}>
                        <Div>
                            <span id={"mode_title"}>Соревновательный режим:</span><span id={"mode_text"}> После выбора этого режима и нажатия кнопки "Начать", начинается поиск игроков с примерно такими же умениями, как у Вас. Это делается с помощью Званий. После того, как все 10 игроков подключились, они попадают в команды по 5 человек. В этом режиме, как и во всех режимах две команды - Террористы и Спецназ. После 15 раунда команды меняются местами. Цель команды Террористов - убить всех противников или взорвать бомбу. Одному из 5 игроков в этой команде в начале каждого раунда выдаётся Бомба C4, которую он должен "заплентить"(поставить). Если Спецназ не успеют её "задефьюзить" за 40 секунд - она взорвётся, а команда Террористов победит. Цель команды Спецназа - убить всех противников и обезвредить. Если Террористы не выполнят ни одну из своих целей, то по истечению времени раунда победит Спецназ. Побеждает та команда, которая первая выиграет в 16 раундах. Всего в этом режиме 30 раундов, игра может закончиться победой одной из команд или ничьёй. За победы Вы повышаете своё звание(про них будет написано подробнее ниже).</span>
                        </Div>
                    </Card>
                    <Card size="l" mode={"shadow"}>
                        <Div>
                            <span id={"mode_title"}>Обычный режим:</span><span id={"mode_text"}> Данный режим почти такой же, как </span><span id={"mode_title"}>Соревновательный режим</span><span id={"mode_text"}>, но с небольшими отличиями. В каждой команде может быть до 10 игроков включительно. Если в противоположной команде есть свободное место - игрок может перейти к ним. Также, для игры в данный режим необязательно иметь второй ранг (не звание!), в отличие от прошлого. За выход из игры до её завершения Вам ничего не будет, в то время как в Соревновательном режиме Вы получите блокировку на несколько дней, недель, и так далее, в зависимости от того, сколько раз Вы так делали. Также, в обычном режиме можно не бояться стрелять по своим, ведь за это они не будут получать урон.</span>
                        </Div>
                    </Card>
                    <Card size="l" mode={"shadow"}>
                        <Div>
                            <span id={"mode_title"}>Бой насмерть:</span><span id={"mode_text"}> Игроки бесконечно возрождаются со случайным оружием, получаю возможность покупать любое оружие в течение 6 секунд. После того, как игрок возродился издаётся звук, который услышат все игроки рядом. Время от времени появляется оружие, за убийство из которого даётся больше очков. Побеждает тот, кто в течение раунда наберёт наибольшее количество очков.</span>
                        </Div>
                    </Card>
                    <Card size={"l"} mode={"shadow"}>
                        <Div>
                            <span id={"mode_text"}>Здесь могло бы быть описание остальных режимов в игре, но так как это MVP нашего супер-мега-пупер приложения, вместо написания описания остальных режимов я ушёл пить чай. (кстати, он был очень вкусный, это стоило того!)
                                <br/>=)</span>
                        </Div>
                    </Card>
                </CardScroll>
            </Div>
        </Group>

    </Panel>
);

Modes.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Modes;
