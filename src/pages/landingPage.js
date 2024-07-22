import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import download from '../assets/download.png';
import therapy from '../assets/icons8-therapy-64.png';
import workshop from '../assets/icons8-workshop-50.png';
import tech from '../assets/knust.jpg';

const LandingPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    const slides = [download, therapy, workshop]; // Add more images as needed

    const changeSlide = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex >= slides.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            return newIndex;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <header className="bg-green-600 p-5 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">CampusCalm</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#about" className="text-white hover:text-gray-300">About Us</a></li>
                            <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
                            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="text-white text-right">
                        <p>+123 456 789</p>
                        <p>info@campuscalm.com</p>
                    </div>
                </div>
            </header>

            <section className="relative bg-cover bg-center text-center py-40" style={{ backgroundImage: `url(${tech})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
                <div className="relative z-10 text-white container mx-auto">
                    <h1 className="text-5xl mb-6">Need someone to confide in from the comfort of your home?</h1>
                    <p className="text-xl mb-8">
                        At CampusCalm, we believe that everyone deserves access to compassionate, confidential, and convenient mental health support. Our online counseling platform connects you with licensed therapists and counselors, offering personalized care tailored to your unique needs.
                    </p>
                    <button onClick={() => navigate('/login')} className="inline-block px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700">Get Appointment</button>
                </div>
            </section>

            <section id="about" className="bg-white py-20 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl mb-10 text-gray-800">About Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600">At CampusCalm, we believe that mental health is a right, not a privilege. Our mission is to provide accessible, confidential, and professional counseling services to students and individuals everywhere.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Our Team</h3>
                            <p className="text-gray-600">Our team of licensed therapists and counselors are dedicated to helping you achieve your personal goals and improve your mental well-being.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Our Approach</h3>
                            <p className="text-gray-600">We offer personalized care tailored to your unique needs, using evidence-based practices and a compassionate approach.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="bg-white py-20 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl mb-10 text-gray-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <div className="mb-4">
                                <img src={download} alt="Service 1" className="mx-auto w-16 h-16" />
                            </div>
                            <h3 className="text-2xl mb-4 text-gray-800">Individual Counseling</h3>
                            <p className="text-gray-600">Personalized counseling sessions tailored to your specific needs.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <div className="mb-4">
                                <img src={therapy} alt="Service 2" className="mx-auto w-16 h-16" />
                            </div>
                            <h3 className="text-2xl mb-4 text-gray-800">Group Therapy</h3>
                            <p className="text-gray-600">Join group sessions to connect and share experiences with others.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <div className="mb-4">
                                <img src={workshop} alt="Service 3" className="mx-auto w-16 h-16" />
                            </div>
                            <h3 className="text-2xl mb-4 text-gray-800">Workshops and Seminars</h3>
                            <p className="text-gray-600">Participate in workshops and seminars focused on mental health topics.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-white py-20 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl mb-10 text-gray-800">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Email Us</h3>
                            <p className="text-gray-600">If you have any questions or would like to schedule an appointment, please reach out to us:</p>
                            <p className="text-gray-600">Email: info@campuscalm.com</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Call Us</h3>
                            <p className="text-gray-600">You can also reach us by phone:</p>
                            <p className="text-gray-600">Phone: +123 456 789</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded shadow">
                            <h3 className="text-2xl mb-4 text-gray-800">Visit Us</h3>
                            <p className="text-gray-600">We are located at:</p>
                            <p className="text-gray-600">123 CampusCalm Street, MentalHealth City</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-5">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 CampusCalm. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4 mt-4">
                        <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                        <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                        <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
