"use client";
import React, { useState } from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlinePushpin,
} from "react-icons/ai";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 mx-6 rounded-md dark:bg-[#121212]">
      <h1 className="text-4xl font-bold text-center mb-8">Contact me</h1>
      <section className="flex flex-col md:flex-row justify-around">
        <div className=" w-full md:w-2/6 flex flex-col">
          {/* Call me */}
          <div className="flex items-center p-6">
            <div className="bg-black p-4 rounded-xl text-white">
              <AiOutlinePhone className="text-4xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Call me</h3>
              <h3 className="text-gray-600 dark:text-gray-400">+54 9 11 4408 0057</h3>
            </div>
          </div>

          {/* Email me */}
          <div className="flex items-center p-6">
            <div className="bg-black p-4 rounded-xl text-white">
              <AiOutlineMail className="text-4xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Email me</h3>
              <h3 className="text-gray-600 dark:text-gray-400">zeregalihuel@gmail.com</h3>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center p-6">
            <div className="bg-black p-4 rounded-xl text-white">
              <AiOutlinePushpin className="text-4xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Address</h3>
              <h3 className="text-gray-600 dark:text-gray-400">Buenos Aires, Argentina</h3>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full hidden sm:block md:w-2/6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 dark:text-gray-400 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-gray-400 font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 dark:text-gray-400 font-semibold"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
