import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, Card, CardScroll, CardGrid} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './modes.css';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const osName = platform();

const Tests = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Тесты
        </PanelHeader>
        <Group>
            <Div>
                <CardGrid>
                    <Card size={"m"} mode={"shadow"} onClick={props.go} data-to={"firstTest"}>
                        <Div style={{height: 96}}>
                            Первый тест
                        </Div>
                    </Card>
                    <Card size={"m"} mode={"shadow"}>
                        <Div style={{height: 96}}>
                            Второй тест
                        </Div>
                    </Card>
                </CardGrid>
            </Div>
        </Group>

    </Panel>
);

Tests.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Tests;
