import React from 'react';
import PropTypes from 'prop-types';
import {
    platform,
    IOS,
    PanelHeader,
    PanelHeaderButton,
    Panel,
    Button,
    Div,
    CardGrid,
    Card,
    Input
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();


class APITest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total_kills: 0,
            error: false
        };
    }

    f = async () => {
        let id = document.getElementById("idInput").value;
        const res = await fetch("http://localhost:5000/stat/get/" + id);
        const json = await res.json();
        if(json.total_kills) {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                total_kills: json.total_kills
            })
        }
    }

    render() {
        const {id, go} = this.props;

        return (
            <Panel id={id}>

                <PanelHeader
                    left={<PanelHeaderButton onClick={go} data-to="selectTest">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </PanelHeaderButton>}
                >
                    Тестовая панель
                </PanelHeader>
                <Div>
                    <Input id={"idInput"} type={"text"} placeholder={"Введите SteamID"}/>
                </Div>
                <Div>
                    <Button size={"xl"} onClick={() => this.f()}>Клик</Button>
                </Div>
                <CardGrid>
                    <Card size={"l"} mode={"shadow"}>
                        {!this.state.error && <Div>{this.state.total_kills}</Div>}
                    </Card>
                </CardGrid>
            </Panel>
        );
    }
}

APITest.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default APITest;
