import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, Group, CardScroll, CardGrid} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './skins.css';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

const Skins = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Скины
        </PanelHeader>
        <Group>
            <Div>
                <Card size={"l"} mode={"shadow"}>
                    <Div id={"secondary_text"}>
                        Привет!

                        В этой статье мы расскажем о скинах. <br/><br/>
                        Для начала, объясним, что это вообще такое, и с чем их едят (P.S. есть их нельзя).<br/><br/>
                        Скины - (от англ. Skin - кожа) Визуальная часть геймплея. Меняет вид(обёртку, кожу) игрового оружия на тот, который Вы выберете из своего инвентаря.
                    </Div>
                </Card>
            </Div>
        </Group>

        <Group>
            <Div>
                <span id={"secondary_text"}>Все скины делятся по уровню износа. От него зависит качество скина, будут ли на нём различные царапины и другие неприятные глазам штуки. <br/><br/>Перечислим их от лучшего к худшему.</span>
            </Div>
            <Div>
                <CardScroll>
                    <Card size={"m"} mode={"outline"}>
                        <Div>1. Прямо с завода</Div>
                    </Card>
                    <Card size={"m"} mode={"outline"}>
                        <Div>2. Немного поношенное</Div>
                    </Card>
                    <Card size={"m"} mode={"outline"}>
                        <Div>3. После полевых испытаний</Div>
                    </Card>
                    <Card size={"m"} mode={"outline"}>
                        <Div>4. Поношенное</Div>
                    </Card>
                    <Card size={"m"} mode={"outline"}>
                        <Div>5. Закаленное в боях</Div>
                    </Card>
                </CardScroll>
            </Div>
            <CardGrid>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        Цены меняются от множества факторов, таких как:
                        <br/><br/>
                        1. Технология StatTrak. Скины с Технологией StatTrak являются самыми дорогыми в своей категории. Данная технология добавляет на скин небольшой счетчик, данный счетчик считает количество всех убийств игрока.
                        <br/><br/>
                        Сувенирный ли скин?
                        - Если да, то цена вероятно будут высокой! Сувенирные скины можно получить просматривая турнир Major
                    </Div>
                </Card>
            </CardGrid>
        </Group>
    </Panel>
);

Skins.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Skins;
