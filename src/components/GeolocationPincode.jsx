import React, { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { TypeAnimation } from 'react-type-animation'
import Carousel from './Carousel';

const centers = {
    delhi: { lat: 28.7041, lng: 77.1025 },
    pune: { lat: 18.5204, lng: 73.8567 },
    mumbai: { lat: 19.0760, lng: 72.8777 },
};

const GeolocationPincode = () => {
    const [pincode, setPincode] = useState('');
    const [nearestCenter, setNearestCenter] = useState(null);
    const [distances, setDistances] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setPincode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNearestCenter(null);
        setDistances([]);
        try {
            const geoResponse = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${pincode}&key=d4976f5c626847b88124bdeee4458f8d`
            );

            const userLocation = geoResponse.data.results[0].geometry;

            const distancePromises = Object.keys(centers).map(async (center) => {
                const distanceResponse = await axios.get(
                    `http://www.mapquestapi.com/directions/v2/route?key=eMbgxnHP8dqWB8dtPUhpQGvpj1grqDOG&from=${userLocation.lat},${userLocation.lng}&to=${centers[center].lat},${centers[center].lng}`
                );
                return {
                    center,
                    distance: distanceResponse.data.route.distance,
                };
            });

            const distances = await Promise.all(distancePromises);

            const nearest = distances.reduce((prev, curr) => (prev.distance < curr.distance ? prev : curr));

            setDistances(distances);
            setNearestCenter(nearest.center);
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setLoading(false);
        }
    };

    return (

        <>
            <Carousel />



            <div className='flex justify-around bg-gradient-to-r from-green-400 to-blue-500 p-10'>

                <div className='w-[40rem] text-white  left-14 text-xl md:top-[30%] text-justify sm:top-0 xsm:top-10 md:w-[40rem] xsm:w-[80%] z-50 hidden md:block md:mr-5'>

                    <TypeAnimation
                        sequence={[
                            `Gynoveda combines Ayurveda, Technology, Content & Community to solve Fertility, PCOS, Periods related disorders.

It is on a mission to impact the lives of 10 million couples by helping them fulfil their dreams to become parents.`,
                            1000,

                        ]}

                        wrapper='span'
                        speed={100}

                        cursor={false}
                    />
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line' }}
                        sequence={[
                            2500,
                            `\n\nGynoveda is certified as a Great Place to Work and also won several awards like Times Brand Icon 2021, Most Admired D2C Brand Of 2022, Economics Times D2C Ayurveda Brand of the Year.\n\nWe have located 3 center (Delhi, Pune, Mumbai) of Gynoveda. Find the nearest center to your location by entering pincode into the form.`,


                        ]}

                        wrapper='span'
                        speed={100}
                        cursor={false}

                    />
                </div>



                <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Find Nearest Center</h1>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
                                Enter Pincode
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                value={pincode}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline
                                focus:bg-green-200"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                                disabled={loading}
                            >
                                {loading ? <ClipLoader size={24} color="#ffffff" /> : 'Submit'}
                            </button>
                        </div>
                    </form>
                    {nearestCenter && (
                        <div className="transition-transform transform duration-500 ease-in-out opacity-0 animate-fade-in">
                            <h2 className="text-xl font-bold mb-4 text-center">Nearest Center: {nearestCenter}</h2>
                            <div className="space-y-2">
                                {distances.map((d) => (
                                    <div key={d.center} className="flex justify-between items-center bg-red-400 p-2 rounded shadow-sm transition-transform transform hover:scale-105">
                                        <p className="text-gray-800">{d.center.charAt(0).toUpperCase() + d.center.slice(1)}</p>
                                        <p className="text-gray-600">{d.distance.toFixed(2)} km</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>

    )
}

export default GeolocationPincode
