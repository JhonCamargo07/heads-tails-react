import React, { useState } from 'react';
import InformationGame from '../components/InformationGame';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Coin from './Coin';
import Swal from 'sweetalert2';
import coinCara from './../assets/img/cara.png';
import coinSello from './../assets/img/sello.png';

export default function Main() {
	let [gamesPlayed, setgamesPlayed] = useState(0);
	const [optionUser, setOptionUser] = useState(undefined);
	const [imgSideCoin, setImgSideCoin] = useState(coinCara);

	// window.addEventListener('beforeunload', function (e) {
	// 	setgamesPlayed(0);
	// });

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

	const changeImgCoin = (winner) => {
		if (winner === 'CARA') {
			return setImgSideCoin(coinCara);
		}
		setImgSideCoin(coinSello);
	};

	const showAlert = (icon, message) => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000,
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

	const getWinner = () => {
		const side = getSideRandom();
		changeImgCoin(side);
		setgamesPlayed(++gamesPlayed);
		// console.log(`side: ${side}, option: ${optionUser}`);
		setTimeout(() => {
			if (side === optionUser) {
				showAlert('success', `Cay\u00f3 ${side.toLowerCase()}, Ganaste`);
			} else {
				showAlert('error', `Cay\u00f3 ${side.toLowerCase()}, Perdiste`);
			}
		}, 200);
	};

	return (
		<>
			<div className="container">
				<InformationGame gamesPlayed={gamesPlayed} currentValue="1234567890.95" />
				<div className="row mt-5">
					{/* <div className="d-flex justify-content-around mt-5 py-5"> */}
					<Coin className="col-md-5" sideCoin={imgSideCoin} />
					<div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
						<h3 className="mb-4">Elige una opción</h3>
						<Formik
							initialValues={{
								valueBet: '',
							}}
							validate={(values) => {
								let errors = {};

								if (!values.valueBet) {
									errors.valueBet = '¿Cuanto vas a apostar?';
								}

								return errors;
							}}
							onSubmit={(values, { resetForm }) => {
								getWinner();
								resetForm();
							}}>
							{({ errors }) => (
								<Form className="">
									<div className="mb-3">
										<label htmlFor="valueBet" className="form-label fw-bold">
											¿Cuanto apuestas?
										</label>
										<Field type="number" step="any" className="form-control" name="valueBet" id="valueBet" />
										<small className="text-danger">
											<ErrorMessage name="valueBet" component={() => <span>{errors.valueBet}</span>} />
										</small>
									</div>
									<div className="d-flex justify-content-around">
										<button
											type="submit"
											onClick={() => {
												setOptionUser('CARA');
											}}
											name="side"
											value="CARA"
											className="btn btn-info btn-lg">
											CARA
										</button>
										<button
											type="submit"
											onClick={() => {
												setOptionUser('SELLO');
											}}
											name="side"
											value="SELLO"
											className="btn btn-info btn-lg">
											SELLO
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
				{/* </div> */}
			</div>
		</>
	);
}
