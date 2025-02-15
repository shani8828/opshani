import React, { useState, useEffect } from "react";
import Section from "./Section";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { Gradient } from "./design/Services";
import { BackgroundCircles } from "./design/Hero";
import { heroBackground } from "../assets";

const Profile = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [withAccommodation, setWithAccommodation] = useState(false);

	// Dummy registered events data
	const registeredEvents = [
		{
			id: 1,
			name: "Roborace",
			image: "/images/competitions/roborace.jpg",
			date: "2024-04-15",
			status: "Registered",
		},
		{
			id: 2,
			name: "Robosoccer",
			image: "/images/competitions/robosoccer.jpg",
			date: "2024-04-16",
			status: "Registered",
		},
		{
			id: 3,
			name: "Drone Workshop",
			image: "/images/workshops/drone.jpg",
			date: "2024-04-14",
			status: "Registered",
		},
	];

	useEffect(() => {
		const fetchUserData = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				navigate("/signin");
				return;
			}
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/profile`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (!response.ok) {
					throw new Error("Failed to fetch user data");
				}

				const data = await response.json();
				console.log(data);
				setUserData(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
	}, [navigate]);

	if (loading) {
		return (
			<Section className="pt-[5rem] -mt-[5.25rem] ">
				<div className="container relative z-2 min-h-[25rem] flex flex-col items-center justify-center text-center lg:mt-10">
					<h2 className="h2 mb-4">Redirecting...</h2>
					<p className="body-2 mb-8 text-500">
						You will be redicted to the Informations page in a moment.
					</p>
					<Link
						to="/"
						className="button button-gradient px-8 py-4 hover:scale-105 transition-transform"
					>
						Back to Homepage
					</Link>

					{/* Background decorative elements */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] opacity-10 pointer-events-none">
						<div className="absolute inset-0 rotate-45 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl"></div>
						<div className="absolute inset-0 -rotate-45 bg-gradient-to-l from-primary to-secondary rounded-full blur-3xl"></div>
					</div>
				</div>
				<div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[102%]">
					<img
						src={heroBackground}
						className="w-full"
						width={1440}
						height={1800}
						alt="hero"
					/>
				</div>
			</Section>
		);
	}

	return (
		<Section>
			<div className="container relative z-2">
				<div className="max-w-[1000px] mx-auto">
					{error && (
						<div className="text-red-500 text-center mb-4">{error}</div>
					)}

					{/* Basic Info Section */}
					<div className="bg-n-6/80 rounded-t-2xl p-6 mb-1">
						<h2 className="text-3xl font-bold mb-4">Basic Information</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<p className="text-n-4">Full Name</p>
								<p className="font-medium">{userData?.fullName}</p>
							</div>
							<div>
								<p className="text-n-4">Email</p>
								<p className="font-medium">{userData?.email}</p>
							</div>
							<div>
								<p className="text-n-4">Phone</p>
								<p className="font-medium">{userData?.phone}</p>
							</div>
							<div>
								<p className="text-n-4">College</p>
								<p className="font-medium">{userData?.college}</p>
							</div>
							<div>
								<p className="text-n-4">Year of Study</p>
								<p className="font-medium">{userData?.yearOfStudy}</p>
							</div>
							<div>
								<p className="text-n-4">Gender</p>
								<p className="font-medium">{userData?.gender}</p>
							</div>
							<div>
								<p className="text-n-4">OPID</p>
								<p className="font-medium">{userData?.OPID}</p>
							</div>
							{userData?.caID && (
								<div>
									<p className="text-n-4">CA ID</p>
									<p className="font-medium">{userData?.caID}</p>
								</div>
							)}
						</div>
					</div>

					{/* Payment Status Section */}
					<div className="bg-n-6/80 rounded-b-2xl p-6 mb-6">
						<h2 className="text-2xl font-bold mb-4">Payment Status</h2>
						<div className="mb-4">
							{userData?.paymentStatus ? (
								<>
									<p className="text-n-4">Status</p>
									<p className="font-medium text-green-500">Paid</p>
									<p className="font-medium text-n-4">Payment Amount:</p>
									<p className="font-medium text-green-500">
										₹{userData?.paymentAmount}
									</p>
								</>
							) : (
								<div className="flex justify-between">
									<div>
										<p className="text-n-4">Status</p>

										<p className="font-medium text-yellow-500">Incomplete</p>
									</div>
									<div>
										<p className="font-medium text-n-4">
											Please proceed to payment to complete the registration.
											<br />
											If payment has been made, please wait for the changes to
											reflect.
										</p>
									</div>
								</div>
							)}
						</div>

						<div className="flex items-center justify-end">
							<div className="flex items-center gap-2">
								{!userData?.paymentStatus && (
									<Button href="/rules">Proceed to Payment</Button>
								)}
								<Button href="/query-us">Contact Us</Button>
							</div>
						</div>
					</div>

					{/* Registered Events Section
          <div className="bg-n-8/80 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Registered Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {registeredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-n-7 rounded-lg p-4 flex flex-col"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-bold mb-2">{event.name}</h3>
                  <p className="text-n-4 text-sm mb-2">Date: {event.date}</p>
                  <p className="text-green-500 text-sm mb-3">{event.status}</p>
                  <Button className="mt-auto" href={`/events/${event.id}`}>
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div> */}
				</div>
			</div>
			<Gradient />
		</Section>
	);
};

export default Profile;
