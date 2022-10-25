import React, { useState } from 'react';
import InformationGame from '../components/InformationGame';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Coin from './Coin';
import Swal from 'sweetalert2';
import coinCara from './../assets/img/cara.png';
import coinSello from './../assets/img/sello.png';
import Datatable from './DataTable';

export default function Main() {
	let [gamesPlayed, setgamesPlayed] = useState(0);
	let [currentValue, setCurrentValue] = useState(0);

	const MAX_MAGES = 100;
	const [optionUser, setOptionUser] = useState(undefined);
	const [imgSideCoin, setImgSideCoin] = useState(coinCara);
	const [gameData, setGameData] = useState([]);

	// Configuracion para la tabla
	const optionsPagination = {
		rowsPerPageText: 'Filas por p\u00e1ginas',
		rangeSeparatorText: 'de',
		selectAllRowsItem: false,
		selectALlRowsItemText: 'Todos',
	};

	// Definicion de las columnas de la tabla de los datos
	const columnsDataTable = [
		{
			name: '#',
			selector: (row) => row.num,
		},
		{
			name: 'Lado de la moneda',
			selector: (row) => row.sideCoin,
		},
		{
			name: 'Ganó',
			selector: (row) => row.isWinner,
		},
		{
			name: 'Dinero apostado',
			selector: (row) => row.bet,
		},
		{
			name: 'Saldo inicial',
			selector: (row) => row.initialBalance,
		},
		{
			name: 'Saldo final',
			selector: (row) => row.endingBalance,
		},
	];

	// window.addEventListener('beforeunload', function (e) {
	// 	setgamesPlayed(0);
	// });

	// Reiniciar la partida
	const restartGame = () => {
		setCurrentValue(0);
		setgamesPlayed(0);
		setImgSideCoin(coinCara);
		showAlert('success', `Muchos intentos, vamos de nuevo`);
	};

	// Metodo para cambiar la imagen segun la cara que caiga
	const changeImgCoin = (winner) => {
		if (winner === 'CARA') {
			return setImgSideCoin(coinCara);
		}
		setImgSideCoin(coinSello);
	};

	// Mostrar alerta que dura 3 segundos
	const showAlert = (icon, message) => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
			},
		});
		Toast.fire({
			icon: `${icon}`,
			title: `${message}`,
		});
	};

	// Duplicar el valor apostado al ganador
	const addBetToWinner = (valueToBet) => {
		valueToBet = valueToBet * 2;
		setCurrentValue(currentValue + valueToBet);
		return currentValue + valueToBet;
	};

	// Restar lo apostado al ganador
	const subtractBetToLoser = (valueToBet) => {
		console.log(`Antes de actualizarlo: ${currentValue}`);
		setCurrentValue(currentValue - valueToBet);
		return currentValue - valueToBet;
	};

	// Obtener el lado de la moneda (hacer girar la moneda)
	const getSideRandom = () => {
		const SIDES = [];

		const NUM_MAX_RANDOM = Math.floor(Math.random() * (20 - 5 + 1) + 5);

		for (let index = 0; index < NUM_MAX_RANDOM; index++) {
			const num = parseInt(Math.random() * (100 - 5 + 1) + 5);
			if (num % 2 === 0) {
				SIDES.push('CARA');
				SIDES.push('SELLO');
				continue;
			}
			SIDES.push('SELLO');
			SIDES.push('CARA');
		}
		const positionRandom = parseInt(Math.random() * (SIDES.length - 1 + 1));
		return SIDES[positionRandom];
	};

	// Obtener el ganador de la partida
	const getWinner = (valueToBet) => {
		// Almacenar los datos parcialmente para pasarselos a la tabla
		let isWinner;
		let newValueCurrentValue;
		let initialBalance = currentValue;

		if (gamesPlayed >= MAX_MAGES) {
			return restartGame();
		}

		const side = getSideRandom();
		changeImgCoin(side);

		if (side === optionUser) {
			newValueCurrentValue = addBetToWinner(valueToBet);
			isWinner = 'Verdadero';
			showAlert('success', `Cay\u00f3 ${side.toLowerCase()}, Ganaste`);
		} else {
			isWinner = 'Falso';
			showAlert('error', `Cay\u00f3 ${side.toLowerCase()}, Perdiste`);
			newValueCurrentValue = subtractBetToLoser(valueToBet);
		}

		setgamesPlayed(++gamesPlayed);
		// Agregar los datos a la tabla
		setGameData(
			gameData.concat([
				{
					num: gamesPlayed,
					isWinner: isWinner,
					sideCoin: side,
					initialBalance: new Intl.NumberFormat().format(initialBalance),
					endingBalance: new Intl.NumberFormat().format(newValueCurrentValue),
					bet: new Intl.NumberFormat().format(valueToBet),
				},
			])
		);
	};

	return (
		<>
			<InformationGame gamesPlayed={gamesPlayed} currentValue={currentValue} />{' '}
			<div className="container">
				<div className="row background py-5 mt-5">
					{/* </div> */}
					<div className="col-md-6 d-flex align-items-center justify-content-center">
						<Coin sideCoin={imgSideCoin} />
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-2"></div>
							<div className="col-md-8 text-center">
								<h3 className="mb-4 text-center fw-bold display-5">Elige una opción</h3>
								<Formik
									initialValues={{
										valueBet: `1000`,
									}}
									validate={(values) => {
										let errors = {};

										if (!values.valueBet || values.valueBet <= 0) {
											errors.valueBet = '¿Cuanto vas a apostar?';
										}

										return errors;
									}}
									onSubmit={(values, { resetForm }) => {
										getWinner(values.valueBet);
										resetForm();
									}}>
									{({ errors }) => (
										<Form className="">
											<div className="mb-3">
												<label htmlFor="valueBet" className="form-label">
													¿Cuanto apuestas?
												</label>
												<Field
													type="number"
													step="any"
													className="form-control"
													name="valueBet"
													id="valueBet"
												/>
												<small className="text-danger">
													<ErrorMessage
														name="valueBet"
														component={() => <span>{errors.valueBet}</span>}
													/>
												</small>
											</div>
											<div className="d-flex justify-content-evenly">
												<button
													type="submit"
													onClick={() => {
														setOptionUser('CARA');
													}}
													name="side"
													value="CARA"
													className="btn btn-light btn-lg">
													CARA
												</button>
												<button
													type="submit"
													onClick={() => {
														setOptionUser('SELLO');
													}}
													name="side"
													value="SELLO"
													className="btn btn-light btn-lg">
													SELLO
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</div>
							<div className="col-md-2"></div>
						</div>
					</div>
				</div>
				{gamesPlayed > 0 && (
					<Datatable columnsDataTable={columnsDataTable} gameData={gameData} optionsPagination={optionsPagination} />
				)}
			</div>
		</>
	);
}
