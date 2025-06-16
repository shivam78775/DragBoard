import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full text-gray-300 py-4 z-[4]">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-3">
                <div className="flex gap-4">
                    <a 
                        href="https://github.com/shivam78775" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/iamshivamrathore/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p className="text-sm text-gray-300">© 2024 Shivam Rathore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 