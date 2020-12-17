import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, PanelHeader, PanelHeaderButton, Panel, FixedLayout, SimpleCell, Button, Div, Placeholder, InfoRow, Separator, PanelSpinner } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';
import { SelectedTest } from './SelectTest';

const osName = platform();

let questions = [];
//question - сам вопрос
//correctAnswer - номер ответа. Например, варианты ответа: тест1, тест2, тест3. Если правильный ответ "тест3", то сюда пишем 2.
//answers - варианты ответа через ;

class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			nowQuestion: 0,
			showResult: false,
			correctAnswers: 0,
			loader: true
		};
		
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	componentDidMount() {
		questions = [];
		// eslint-disable-next-line
		switch (SelectedTest) {
			case 0:
				questions = [
					{question: 'Сколько всего режимов в игре CS:GO?', correctAnswer: 1, answers: '5;7;8;4'},
					{question: 'Сколько длится плент бомбы?', correctAnswer: 2, answers: 'Более 5 секунд;Более 4 секунд;Менее 4 секунд;Более 6 секунд'},
					{question: 'Разработчики CS:GO?', correctAnswer: 1, answers: 'Volve;Valve;Valvee;Volvo'},
					{question: 'Сколько видов гранат в CS:GO?', correctAnswer: 0, answers: '6;5;7;8'},
					{question: 'Сколько выстрелов требуется чтобы убить противника из АК-47 если он в шлеме?', correctAnswer: 0, answers: '1 выстрел;2 выстрела;5 выстрелов;3 выстрела'},
					{question: 'Время разминирования бомбы без набора сапёра?', correctAnswer: 0, answers: '10 секунд;8 секунд;12 секунд;7 секунд'},
					{question: 'Время разминирования бомбы с набором сапёра?', correctAnswer: 2, answers: '3 секунды;6 секунд;5 секунд;2 секунды'},
					{question: 'В каком году вышла CS:GO?', correctAnswer: 1, answers: '2011;2012;2010;2013'},
					{question: 'В каком коду прошел первый Major турнир по игре CS:GO?', correctAnswer: 1, answers: '2015;2013;2011;2012'},
					{question: 'Кто занял 1 место на 1 Major турнире по CS:GO?', correctAnswer: 3, answers: 'Natus Vincere;Ninjas in Pyjamas;FaZe Clan;Fnatic'},
				];
				break;
			case 1:
				questions = [
					{question: 'Какое оружие убивает с одного попадания в тело?', correctAnswer: 1, answers: 'AK-47;AWP;M4A1-S;P250'},
					{question: 'Замедляет ли коктейль молотова?', correctAnswer: 0, answers: 'Да;Нет'},
					{question: 'Может ли дымовая граната потушить коктейль молотова?', correctAnswer: 0, answers: 'Да;Нет'},
					{question: 'Есть ли на картах места, где можно убить игрока прострелом?', correctAnswer: 0, answers: 'Да;Нет'},
					{question: 'Можно ли убить заложника?', correctAnswer: 1, answers: 'Да;Нет;Только играя за спецназ;Только играя за террористов'},
					{question: 'Сколько секунд после приземления горит коктейль молотова?', correctAnswer: 2, answers: '5 секунд;9 секунд;7 секунд;11 секунд'},
					{question: 'Сколько стоит Desert Eagle?', correctAnswer: 2, answers: '700$;950$;750$;800$'},
					{question: 'Какое из этих оружий относится к пулемётам?', correctAnswer: 1, answers: 'M4A4;M249;MAG-7;SH 553'}
				];
				break;
		}
		this.setState({
			loader: false
		});
	}
	
	checkAnswer(index) {
		if(index === questions[this.state.nowQuestion].correctAnswer) {
			console.log('Правильный ответ');
			this.setState({
				nowQuestion: this.state.nowQuestion+1,
				correctAnswers: this.state.correctAnswers+1,
			});
		} else {
			console.log('Неправильный ответ');
		}

		if(this.state.nowQuestion === questions.length-1) {
			this.setState({
				showResult: true
			});
		}
		else {
			this.setState({
				nowQuestion: this.state.nowQuestion+1
			});
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
					Тесты
				</PanelHeader>
				{this.state.loader && <PanelSpinner/>}
				{!this.state.loader && !this.state.showResult && <>
					<FixedLayout vertical="top">
						<Div>
							{questions[this.state.nowQuestion].question}
						</Div>
					</FixedLayout>
					<FixedLayout vertical="bottom">
						<Div>
							{questions[this.state.nowQuestion].answers.split(';').map((item, index) => 
								<Button onClick={() => this.checkAnswer(index)} style={{ marginTop: 8 }} size="xl" stretched>{item}</Button>
							)}
						</Div>
					</FixedLayout>
				</>}
				{!this.state.loader && this.state.showResult && <>
					<Div style={{textAlign: 'center'}}>
					<Placeholder
					icon={<Icon56CheckCircleOutline fill="#179c00" />}
					header="Вы успешно прошли тест!"
					>
						<SimpleCell>
							<InfoRow header="Всего вопросов">
								{questions.length}
							</InfoRow>
						</SimpleCell>
						<SimpleCell>
							<InfoRow header="Правильных ответов">
							{this.state.correctAnswers}
							</InfoRow>
						</SimpleCell>
						<SimpleCell style={{marginBottom: 150}}>
							<InfoRow header="Неправильных ответов">
							{questions.length - this.state.correctAnswers}
							</InfoRow>
						</SimpleCell>
					</Placeholder>
					<FixedLayout vertical="bottom">
						<Separator wide />
						<Div>
							<Button onClick={go} data-to="home" size="l" stretched>Вернуться на главную</Button>
						</Div>
					</FixedLayout>
					</Div>
				</>}
			</Panel>
		);
	}
}

Test.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Test;
