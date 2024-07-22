import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase'; // Adjust the import path as necessary
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const MainPage = () => {
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        sex: "",
        role: "",
        profileImage: ""
    });

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileDoc = doc(db, 'users', 'USER_ID'); // Replace 'USER_ID' with the actual user ID
                const profileData = await getDoc(profileDoc);
                if (profileData.exists()) {
                    setProfile(profileData.data());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error("There was an error fetching the profile data!", error);
            }
        };

        fetchProfile();
    }, []);

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const saveProfile = async () => {
        try {
            const profileDoc = doc(db, 'users', 'USER_ID'); // Replace 'USER_ID' with the actual user ID
            await updateDoc(profileDoc, profile);
            alert(`Profile Updated: \nName: ${profile.firstName} ${profile.lastName}\nEmail: ${profile.email}\nSex: ${profile.sex}\nRole: ${profile.role}`);
            setIsEditProfileModalOpen(false);
        } catch (error) {
            console.error("There was an error updating the profile data!", error);
        }
    };

    const handleQuestionChange = (nextQuestion) => {
        setCurrentQuestion(nextQuestion);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <header className="w-full bg-green-600 text-white">
                <nav>
                    <ul className="flex justify-around py-2">
                        <li>CampusCalm</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </header>

            <main className="flex w-full p-5">
                <section className="w-1/5 bg-green-200 p-5 mr-5 rounded-lg">
                    <div className="text-center">
                        <img src={profile.profileImage} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
                        <input type="file" id="profileImageInput" className="hidden" onChange={(e) => {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                                setProfile({ ...profile, profileImage: e.target.result });
                            };
                            reader.readAsDataURL(e.target.files[0]);
                        }} />
                        <button className="mt-2 py-2 px-4 bg-yellow-500 rounded hover:bg-yellow-600" onClick={() => document.getElementById('profileImageInput').click()}>Change Picture</button>
                    </div>
                    <div className="flex flex-col items-center text-lg">
                        <label className="mt-2">Name</label>
                        <input type="text" value={`${profile.firstName} ${profile.lastName}`} className="mt-1 p-2 rounded border border-gray-300" disabled />
                        <label className="mt-2">Email</label>
                        <input type="email" value={profile.email} className="mt-1 p-2 rounded border border-gray-300" disabled />
                        <label className="mt-2">Sex</label>
                        <input type="text" value={profile.sex} className="mt-1 p-2 rounded border border-gray-300" disabled />
                        <label className="mt-2">Role/Occupation</label>
                        <input type="text" value={profile.role} className="mt-1 p-2 rounded border border-gray-300" disabled />
                        <button className="mt-4 py-2 px-4 bg-yellow-500 rounded hover:bg-yellow-600" onClick={() => setIsEditProfileModalOpen(true)}>Edit Profile</button>
                    </div>
                </section>
                <section className="w-4/5 bg-blue-200 p-5 rounded-lg">
                    <section className="flex flex-col items-center">
                        <h2 className="mb-2">Help us match you to the right counsellor.</h2>
                        {currentQuestion === 1 && (
                            <div className="w-full">
                                <p>What type of counseling services would you require?</p>
                                <div className="flex flex-col mt-2">
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(2)}>Mental Health</button>
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(2)}>Educational</button>
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(2)}>Relationship</button>
                                </div>
                            </div>
                        )}
                        {currentQuestion === 2 && (
                            <div className="w-full">
                                <p>Preferred gender of counselor?</p>
                                <div className="flex flex-col mt-2">
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(3)}>Male</button>
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(3)}>Female</button>
                                </div>
                            </div>
                        )}
                        {currentQuestion === 3 && (
                            <div className="w-full">
                                <p>Have you ever had counseling before?</p>
                                <div className="flex flex-col mt-2">
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(4)}>Yes</button>
                                    <button className="py-3 my-1 bg-green-200 rounded hover:bg-green-300" onClick={() => handleQuestionChange(4)}>No</button>
                                </div>
                            </div>
                        )}
                        {currentQuestion === 4 && (
                            <div className="w-full">
                                <p>What led you to consider counseling today?</p>
                                <textarea className="w-full mt-2 p-2 rounded border border-gray-300" rows="4" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Your answer..."></textarea>
                                <button className="mt-4 py-3 bg-green-200 rounded hover:bg-green-300" onClick={() => alert(`Your answer: ${userInput}`)}>Submit</button>
                            </div>
                        )}
                    </section>
                </section>
            </main>

            {isEditProfileModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg w-full max-w-md">
                        <span className="float-right text-2xl cursor-pointer" onClick={() => setIsEditProfileModalOpen(false)}>&times;</span>
                        <h2>Edit Profile</h2>
                        <label className="block mt-4">First Name</label>
                        <input type="text" name="firstName" value={profile.firstName} onChange={handleProfileChange} className="w-full mt-2 p-2 rounded border border-gray-300" />
                        <label className="block mt-4">Last Name</label>
                        <input type="text" name="lastName" value={profile.lastName} onChange={handleProfileChange} className="w-full mt-2 p-2 rounded border border-gray-300" />
                        <label className="block mt-4">Email</label>
                        <input type="email" name="email" value={profile.email} onChange={handleProfileChange} className="w-full mt-2 p-2 rounded border border-gray-300" />
                        <label className="block mt-4">Sex</label>
                        <input type="text" name="sex" value={profile.sex} onChange={handleProfileChange} className="w-full mt-2 p-2 rounded border border-gray-300" />
                        <label className="block mt-4">Role</label>
                        <input type="text" name="role" value={profile.role} onChange={handleProfileChange} className="w-full mt-2 p-2 rounded border border-gray-300" />
                        <button className="mt-4 py-2 px-4 bg-yellow-500 rounded hover:bg-yellow-600" onClick={saveProfile}>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;
