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
    Input, Spinner
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();


class APITest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total_kills: "",
            error: false,
            spinner: false,
        };
    }

    f = async () => {
        let id = document.getElementById("idInput").value;
        this.setState({
            spinner: true
        })
        // const res = await fetch("http://178.250.158.200:5000/stat/get/" + id).catch(r => console.log(r));
        const res = await fetch("http://178.250.158.200:5000/test", {
            method: "GET",
            headers: {
                "Content-Security-Policy": "upgrade-insecure-requests"
            },
            mode: "same-origin"
        })
        console.log(res)
        // const json = await res.json();
        // console.log(json);
        // if(json["hits"]) {
        //     this.setState({
        //         error: true,
        //         spinner: false
        //     })
        // } else {
            this.setState({
                // total_kills: json.total_kills,
                // error: false,
                spinner: false
            })
        // }
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
                        {!this.state.error && this.state.total_kills !== "" && <Div>{this.state.total_kills}</Div>}
                        {this.state.error && <Div>Что-то пошло не так.</Div>}
                        {this.state.spinner && <Spinner size="large" style={{ marginTop: 20 }} />}
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
