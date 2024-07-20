import React from "react";


const LandingPage = () =>{
    return(
        <section className="hero min-h-screen bg-cover bg-center flex items-center justify-center relative">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Welcome to StudyRoom</h1>
                <p className="text-xl text-gray-200 mb-12">A Space to Empower Students Through Enhanced Learning and Collaboration.</p>
                <div className="flex justify-center">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 mr-4">
                    Sign Up
                </button>
                <button className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-100">
                    Login
                </button>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;