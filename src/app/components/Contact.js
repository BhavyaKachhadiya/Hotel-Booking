"use client"
import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_pz5kwun', 'template_3ddelgh', event.target,'O5ttPktcrN7_vP5MV')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                // You can show a success message or perform other actions here
            }, (error) => {
                console.error('Error sending email:', error.text);
                // You can show an error message or perform other actions here
            });

        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* Full Name Input */}
                    <div className="sm:col-span-3">
                        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="full_name"
                                id="full-name"
                                autoComplete="given-name"
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#24AB70] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AB70] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#24AB70] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AB70] sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                {/* Message Input */}
                <div className="col-span-full">
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#24AB70] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#24AB70] sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-[#24AB70] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#24AB70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24AB70]">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
