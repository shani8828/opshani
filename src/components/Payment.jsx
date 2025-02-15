import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { BackgroundCircles } from "./design/Hero";
import {
	payment,
	benefitsForParticipants,
	registration,
	accomo,
	catfour,
} from "../constants/Rules";
import { Gradient } from "./design/Roadmap";
import { useNavigate } from "react-router-dom";
import Loading from "./design/Loading";

const Payment = () => {
	document.title = "Payment | Optima 2025";

	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchUserData = async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/signin");
			return;
		}
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/user/profile`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch user data");
			}

			const data = await response.json();
			if (data.paymentStatus) {
				navigate("/profile");
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<Section id="rules">
			<div className="container relative z-2">
				<Heading
					className="md:max-w-md lg:max-w-2xl text-center"
					title="What will you get?"
				/>
				<BackgroundCircles />
				<div className="rounded-lg p-0.25 w-full">
					{error && (
						<div className="text-red-500 text-center mb-4">
							{error}
						</div>
					)}
					<div className="rounded-lg overflow-hidden relative  w-full p-4 pt-0 gap-4 flex flex-col mb-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{benefitsForParticipants.map((items) => (
								<div className="flex gap-3 p-3 items-start rounded-md bg-white/10 backdrop-blur-md">
									<img
										src={items.img}
										alt=""
										className="w-6 md:w-7 lg:w-8 rounded-md"
									/>
									<div className="flex gap-2 flex-col">
										<h1 className="text-xl font-semibold lg:text-2xl">
											{items.title}
										</h1>
										<div className="opacity-80 pr-2 md:pr-3">
											{items.desc}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-lg bg-none overflow-hidden relative flex items-center justify-center mb-8 w-full h-full pb-4">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdzfCEholwyzqmtr3PrZbUI3sVF2wXmvFVFkR_3esQPus-nSg/viewform?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="group flex justify-center items-center rounded-lg bg-gradient-to-b from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 font-semibold p-4 w-72 h-16 transition-all duration-200 shadow-lg transform active:translate-y-1">
								<h1 className="text-center text-xl md:text-2xl lg:text-3xl bg-transparent text-white drop-shadow-md">
									Payment
								</h1>
							</button>
						</a>
					</div>
				</div>
				<div className="rounded-lg p-0.25 bg-conic-gradient mb-6 w-full">
					<div className="rounded-lg bg-n-8 overflow-hidden relative w-full flex flex-col p-4 gap-4 h-full">
						<h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2">
							Payment Instructions
						</h1>
						{payment.map((item) => (
							<div className="flex gap-4">
								<div className="min-w-3 max-h-3 rounded-full bg-purple-500 translate-y-1.5"></div>
								<div className="opacity-80">{item.text}</div>
							</div>
						))}
						<Gradient />
					</div>
				</div>
				<div className="rounded-lg p-0.25 bg-conic-gradient w-full">
					<div className="rounded-lg bg-n-8 overflow-hidden relative w-full flex flex-col p-4 gap-4 h-full">
						<h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-2">
							Accomodation Rules
						</h1>
						{accomo.map((item) => (
							<div className="flex gap-4">
								<div className="min-w-3 max-h-3 rounded-full bg-purple-500 translate-y-1.5"></div>
								<div className="opacity-80">{item.text}</div>
							</div>
						))}
						<Gradient />
					</div>
				</div>
			</div>
			<Gradient />
		</Section>
	);
};

export default Payment;
