import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://lucaluna.tech/sendEmail', { name, email, message });
      setIsSent(true);
      // Reset form values after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setIsSent(false);
      }, 1500); // Display success message for 3 seconds
    } catch (error) {
      console.log('Failed to send email:', error);
    }
  };

  return (
    <div id="contact" className="bg-bright-turquoise-100 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-8">
                <div className="contact-message">
                  <h2 className="text-3xl font-bold mb-4 text-bright-turquoise-800">Contact Me</h2>
                  <p className="text-bright-turquoise-700">
                    If you have any questions or would like to discuss a project, feel free to reach out to me.
                  </p>
                  <div className="mt-4">
                    <a href="https://www.linkedin.com/company/complianceright" className="text-bright-turquoise-700 hover:text-bright-turquoise-900 ml-4">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="contact-form">
                  {isSent ? (
                    <div className="success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                      <p>Your email has been sent successfully!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-bright-turquoise-700 text-sm font-bold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full p-2 border border-bright-turquoise-300 rounded focus:outline-none focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-bright-turquoise-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-2 border border-bright-turquoise-300 rounded focus:outline-none focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-bright-turquoise-700 text-sm font-bold mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows="5"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full p-2 border border-bright-turquoise-300 rounded focus:outline-none focus:border-blue-500"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-bright-turquoise-500 text-white py-2 px-4 rounded hover:bg-bright-turquoise-700 focus:outline-none focus:shadow-outline-blue active:bg-bright-turquoise-800"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
