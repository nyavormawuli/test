import React from 'react';

function mainHeader () {
    return (
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
    )
}

export default mainHeader;