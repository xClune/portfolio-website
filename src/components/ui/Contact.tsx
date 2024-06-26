"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils/sendEmail";

export type FormData = {
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }

  return (
    <section className="bg-white dark:bg-black w-full p-5 md:p-0 ">
      <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          CONTACT
        </h2>
        <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Get in touch below!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
              {...register("email", { required: true })}
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Subject"
              {...register("subject", { required: true })}
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type message here..."
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium self-center text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
