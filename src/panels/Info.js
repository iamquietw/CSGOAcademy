import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './info.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

const Info = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            История игры
        </PanelHeader>
        <Group>
            <Div>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        <span id={"title"}>Counter-Strike</span> – это онлайн-шутер, суть которого заключается в противостоянии двух команд –
                        террористов и контртеррористов. У обеих команд есть цели в раунде, завершив которые, либо
                        полностью уничтожив команду противника, они получают матч-поинт. Выиграв определенное количество
                        раундов, команда выигрывает матч. Самый популярный сценарий – это когда террористам нужно заложить
                        бомбу в определённой точке, а спецназу её обезвредить. <br/><br/>Идея видеоигры о противостоянии террористов и
                        спецназовцев возникла в конце 90-х. Её создатель, канадец вьетнамского происхождения Мин «Gooseman» Ли, делал не
                        коммерческий продукт об актуальной и острой проблеме, а модификацию  другой игры на интересующую его тематику.
                        <br/><br/>
                        Но все игры меркли по сравнению с новой Half-Life от Valve, идеальной во всех отношениях на тот момент игре. Именно
                        для нее Мин Ли решил делать новый мод, потому что движок давал больший простор фантазии разработчика – удобный
                        мультиплеер, современный на 1999 год инструментарий и более подходящие для реализации задуманного декорации.
                        По словам разработчика, он работал от 30 до 40 часов в неделю во время обучения в университете.
                        <br/><br/>
                        <span id={"quote"}>«Я надеялся, что в игру будет играть хотя бы кто-нибудь, и что начнется все с нескольких
                            игроков и будет впоследствии расти» </span>- Мин «Gooseman» Ли.
                        Однако отзывы игроков после релиза ошеломили Ли. Огромное количество позитива и энтузиазма сподвигли ли
                        продолжать работу.
                    </Div>
                </Card>
            </Div>
            <Div>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        <img style={{width: "100%"}} src={"https://i.playground.ru/p/vxI_n5JCZgZ9Lz-bXy2rug.jpeg"} alt={"Counter Strike"}/>
                    </Div>
                </Card>
            </Div>
            <Div>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        Стремление Ли создать более реалистичный шутер принесло свои плоды, и в 2000 году Valve заинтересовались модом.
                        Они связались с Ли и взяли его на работу. Как оказалось, это было одно из лучших решений за время существования
                        компании.
                        <br/><br/>
                        По сравнению с Quake и UT, у CS был более медленный геймплей и упор на командную работу. 8 ноября 2000 года вышла
                        первая версия Counter-Strike под номером 1.0. Counter-Strike под началом Valve становится хитом. Простые механики и
                        упор на реализм делают игру привлекательной для геймеров и помогают продвижению в киберспорте.
                        <br/><br/>
                        Сегодня <span id={"title"}>Counter Strike: Global Offensive</span> –  это одна из самых популярных видеоигр в мире. Она занимает первые
                        строчки в Steam, а о ее существовании знают почти все. Однако 18 лет назад, когда первая версия игры
                        только появилась, никто не мог предсказать такого успеха.

                    </Div>
                </Card>
            </Div>
        </Group>
    </Panel>
);

Info.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Info;
