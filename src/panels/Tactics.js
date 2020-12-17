import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, CardGrid} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Group from "@vkontakte/vkui/dist/components/Group/Group";

const osName = platform();

const Tactics = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Тактики
        </PanelHeader>
        <Group>
            <CardGrid>
                <Card size={"l"} mode={"shadow"}>
                    <Div>
                        Привет!, в этой статье мы расскажем о тактиках в CS:GO.
                        <br/><br/>
                        В начале мы скажем, самое главное - Коммуникация, за какую бы вы сторону не играли, самое главное держать союзников в курсе всего что происходит. А теперь перейдём к возможным тактикам:
                        <br/><br/>
                        1. Экономика - Одна из самых важных составляющих CS:GO. В зависимости от факторов будет меняться количество денег на счету у игрока, к примеру при проигрыше ты получаешь меньше, но вот при победе больше. Хотя с каждым проигранным раундом сумма денег возрастает, чтобы команда которая проигрывает получила возможность выравнять игру.
                        <br/><br/>
                        Немного про возможно непонятные слова:
                        <br/><br/>
                        Эко раунд - Это тот раунд, когда команда не закупает абсолютно ничего, либо в редких случаях покупая пистолеты и гранаты.
                        <br/><br/>
                        Форс бай - Это тот раунд, который является чем то между эко раундом и полной закупкой, его используют при попытке отыграться после проигранного раунда.
                        <br/><br/>
                        Фулл бай - Полная закупка любого вида оружия ( автоматы и AWP ), но у террористов цена автоматов чуть ниже чем у Спецназа, поэтому террористам будет легче сделать фулл бай.
                    </Div>
                </Card>
            </CardGrid>
        </Group>
    </Panel>
);

Tactics.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Tactics;
