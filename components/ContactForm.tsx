import useFormData from 'app/stores/form';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

type Props = {};

const ContactForm = (props: Props) => {
  const formState = useFormData();
  const submitHandler = async (e: any) => {
    // console.log(formState.name, formState.email, formState.message);
    e.preventDefault();
    toast('Sending!', {
      icon: '⌛',
      style: {
        borderRadius: '2px',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #4D5BCE',
        background: '#1e2d3d',
        color: '#fff',
      },
    });
    let response = await axios.post('/api/contact', {
      name: formState.name,
      email: formState.email,
      message: formState.message,
    });
    const { status, message } = response.data;
    toast.dismiss();

    if (status === false) {
      toast('Error Occured!', {
        icon: '❌',
        style: {
          borderRadius: '2px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #4D5BCE',
          background: '#1e2d3d',
          color: '#fff',
        },
      });
      return;
    } else {
      formState.resetValues();
      (document.getElementById('contact-form') as HTMLFormElement).reset();

      toast('Message Sent!', {
        icon: '👏',
        style: {
          borderRadius: '2px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #4D5BCE',
          background: '#1e2d3d',
          color: '#fff',
        },
      });
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={submitHandler}
      className="text-sm font-fira_retina max-w-[370px] lg:min-w-[220px] xl:max-w-[320px] xl:max-h-[400px] w-full text-menu-text
      "
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-3">
          _name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onBlur={(e) => formState.setName(e.target.value)}
          className="p-2 mb-5 placeholder-slate-600 bg-[#011221] border-2 border-gray-theme rounded-lg"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-3">
          _email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onBlur={(e) => formState.setEmail(e.target.value)}
          className="p-2 mb-5 placeholder-slate-600 bg-[#011221] border-2 border-gray-theme rounded-lg"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-3">
          _message:
        </label>
        <textarea
          id="message-input"
          name="message"
          placeholder="message"
          rows={5}
          onBlur={(e) => formState.setMessage(e.target.value)}
          className="p-2 placeholder-slate-600 bg-[#011221] resize-none  border-2 border-gray-theme rounded-lg"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-2 px-4 font-fira_retina text-white text-xs bg-gray-theme rounded-[7px] mt-[20px] cursor-pointer hover:bg-[#263B50]"
      >
        submit-message
      </button>
    </form>
  );
};

export default ContactForm;
