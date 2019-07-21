import React, {Component} from 'react';
import AppContext from '../context/AppContext';
import Table from './Table';
import Cards from './Cards';
import PassButton from './PassButton';
import Arrow from './Arrow';
import Filters from './Filters';
import gameState from '../lib/gameState';
import delayedFunctions from '../lib/delayed-functions';
import * as helpers from '../lib/helpers';
import '../stylesheets/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				width: 1024,
				height: 768
			},
			isPlaying: false,
			playersNumber: 6,
			players: [],
			cards: {
				deck: [],
				players: [],
				table: [],
				discarded: []
			},
			possibleCards: [],
			attacker: null,
			defender: null,
			trumpSuit: null,
			showButton: false,
			movedCard: null
		};

		this.cardStyles = null;
		this.handleStateUpdate = this.handleStateUpdate.bind(this);
		this.updateViewport = this.updateViewport.bind(this);
		this.startGame = this.startGame.bind(this);
		this.makeMove = this.makeMove.bind(this);
		this.pass = this.pass.bind(this);
		this.updateCardStyles = this.updateCardStyles.bind(this);
		this.addMovedCard = this.addMovedCard.bind(this);
		this.removeMovedCard = this.removeMovedCard.bind(this);
	}

	addObserver() {
		return gameState.observable.subscribe(updates => {
			delayedFunctions.add(() => this.handleStateUpdate(updates));
		});
	}

	updateCardStyles(cardId, style) {
		this.cardStyles = {
			...this.cardStyles,
			[cardId]: style
		};
	}

	updateViewport() {
		const html = document.documentElement;
		const width = html.clientWidth;
		const height = html.clientHeight;
		this.setState({
			viewport: { width, height }
		});
	}

	addResizeListener() {
		let throttled = false;
		const fn = () => {
			if (!throttled) {
				throttled = true;
				setTimeout(() => {
					throttled = false;
					this.updateViewport();
				}, 300);
			}
		};
		window.addEventListener('resize', fn);
		return () => window.removeEventListener('resize', fn);
	}

	genPlayers(playersNumber) {
		const players = Array.from(
			{ length: playersNumber },
			(_, i) => ({ name: 'Player' + i })
		);
		return players;
	}

	handleStateUpdate(updates) {
		const updateObject = {};
		for (let { prop, value } of updates) {
			updateObject[prop] = value;
		}

		this.setState(updateObject);
	}

	addMovedCard(cardId) {
		this.setState({movedCard: cardId});
	}

	removeMovedCard() {
		this.setState({movedCard: null});
	}

	initGame() {
		const { playersNumber } = this.state;
		gameState.initNewGame(playersNumber);

		this.setState({
			players: this.genPlayers(playersNumber)
		});
	}

	startGame() {
		this.setState({ isPlaying: true });
		gameState.startGame();
	}

	makeMove(cardId) {
		gameState.makeUserMove(cardId);
	}

	pass() {
		gameState.pass();
	}

	handleStartTrick(prevState) {
		const prevAttacks = prevState.cards.table;
		const currAttacks = this.state.cards.table;
		const prevTrump = prevState.trumpSuit;
		const currTrump = this.state.trumpSuit;
		const tableGetEmpty = !!prevAttacks.length && !currAttacks.length;
		const trumpHasChosen = !prevTrump && currTrump;
		if (tableGetEmpty || trumpHasChosen) gameState.startTrick();
	}

	handleShowButton(prevState) {
		const { possibleCards: prevPossibleCards } = prevState;
		const { possibleCards, cards: { table: attacks }, showButton } = this.state;
		if (possibleCards.length && attacks.length) {
			if (prevPossibleCards.length !== possibleCards.length && !showButton) {
				this.setState({ showButton: true });
			}
		} else if (showButton) this.setState({ showButton: false });
	}

	componentDidMount() {
		this.updateViewport();
		this.removeListener = this.addResizeListener();
		this.unsubscribe = this.addObserver();
		this.initGame();
	}

	componentDidUpdate(_, prevState) {
		this.handleStartTrick(prevState);
		this.handleShowButton(prevState);
	}

	componentWillUnmount() {
		this.removeListener();
		this.unsubscribe();
	}

	render() {
		const { cardStyles, addMovedCard, removeMovedCard,
						 startGame, updateCardStyles, makeMove } = this;
		const { cards, players, possibleCards, defender, 
						trumpSuit, showButton, movedCard } = this.state;
		const field = helpers.getFieldProps(this.state.viewport);
		return (
			<AppContext.Provider value={{
				cardStyles, 
				possibleCards, 
				trumpSuit, 
				movedCard,
				startGame, 
				updateCardStyles, 
				makeMove,
				addMovedCard,
				removeMovedCard
			}}>
				<svg className="app" >
					<g className="field" width={field.width} height={field.height} style={field.style}>
						<Table field={field} />
						<Cards cards={cards} field={field} players={players} />
						<PassButton
							show={showButton}
							text={defender === 0 ? 'Pick up' : 'Pass'}
							onClick={showButton ? this.pass : null}
						/>
						<Arrow 
							field={field}
							defenderIndex={defender} 
							playersCount={players.length} 
						/>
					</g>
					<Filters />
				</svg>
			</AppContext.Provider>
		);
	}
}

export default App;
