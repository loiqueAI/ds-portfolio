import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="text-white">
          <h2 className="text-lg mb-2">Contactez-nous</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-400 mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="text" className="block text-gray-400 mb-2">
                Subject:
              </label>
              <input
                type="text"
                name="subjet"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your  subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your  message"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        </div>

        <div className="text-white">
          <h2 className="text-lg mb-2">Suivez-nous sur:</h2>
          <div>
            <a
              href="https://www.linkedin.com/in/loique-fogouang-051505179/"
              className="text-blue-400 hover:text-blue-500 mr-2"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a href="#" className="text-green-400 hover:text-green-500 mr-2">
              WhatsApp
            </a>
          </div>
          <div>
            <a
              href="https://github.com/loiqueAI"
              className="text-green-400 hover:text-green-500 mr-2"
            >
              Github
            </a>
          </div>
          <div>
            <a href="#" className="text-green-400 hover:text-green-500 mr-2">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
