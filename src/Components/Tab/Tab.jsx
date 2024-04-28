import React, { useState } from 'react';
import Title from '../Title/Title';

const FaqTab = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4">
            <button
                className="flex justify-between items-center w-full py-4 px-2 border-t text-gray-800 font-semibold "
                onClick={toggleAccordion}
            >
                <span className='text-2xl font-thin'>{question}</span>
                <svg
                    className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 9l-6 6 1.41 1.41L12 11.83l4.59 4.58L18 15z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="bg-white p-4 mt-2">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqTabContainer = () => {
    return (
        <>
            <Title title={"You may be wondering"} className={"text-center my-8 text-3xl font-thin"}/>
            <div className="container mx-auto mt-8">
                <FaqTab
                    question="How can I reset my password?"
                    answer="To reset your password, go to the 'Forgot Password' page and follow the instructions."
                />
                <FaqTab
                    question="How do I update my billing information?"
                    answer="To update your billing information, go to the 'Billing' section in your account settings."
                />
                <FaqTab
                    question="How can I contact customer support?"
                    answer="You can contact customer support via email at support@example.com or by phone at +123456789."
                />
            </div>
        </>
    );
};

export default FaqTabContainer;
