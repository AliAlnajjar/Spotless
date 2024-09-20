'use client';
import { Card } from '@material-tailwind/react';
import React, { useState } from 'react';

export default function ContactForm() {
  const handleClear = () => {
    setFormData((prev) => ({
      ...prev,
      message: '',
    })); // Clear the textarea
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    message: '',
  });
  const [status, setStatus] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form has been submitted

  const validateForm = () => {
    const errors = {};

    // Norwegian phone number validation
    const phoneRegex = /^(?:\+47|47)?[0-9]{8}$/;
    if (formData.telefon && !phoneRegex.test(formData.telefon)) {
      errors.telefon = 'Vennligst oppgi en korrekt telefonnummer.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Vennligst oppgi en korrekt e-postadresse.';
    }

    // Message validation
    if (!formData.message) {
      errors.message = 'Har du glemt å si hva du lurer på?';
    }
    if (formData.message && formData.message.length < 10) {
      errors.message = 'Det er lurt å skrive litt lengre melding.!';
    }

    // Ensure either phone number or email is filled
    if (!formData.telefon && !formData.email) {
      errors.contact = 'Vennligst oppgi enten telefonnummer eller e-post';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the specific field when changed
    if (validationErrors[name]) {
      validateForm(); // Re-validate form to clear specific field errors
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (validationErrors[name]) {
      validateForm(); // Re-validate form to clear specific field errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark as submitted

    if (!validateForm()) {
      setStatus({
        status: 'error',
        msg: 'Vennligst rett opp i feilene ovenfor.',
      });
      return;
    }

    setStatus({
      status: 'normal',
      msg: 'Sender...',
    });

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          status: 'success',
          msg: 'E-posten ble sendt!',
        });
        setFormData({ name: '', email: '', telefon: '', message: '' }); // Clear form
        setValidationErrors({}); // Clear validation errors on success
        setIsSubmitted(false); // Reset submission state
      } else {
        setStatus({
          status: 'error',
          msg: 'Kunne ikke sende e-posten.',
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        status: 'error',
        msg: 'Feil ved sending av e-post.',
      });
    }
  };

  return (
    <section className="flex w-full max-w-screen-2xl m-auto p-4 md:p-12">
      <Card
        shadow={false}
        className="lg:p-10 p-4 border border-gray-400 rounded-xl outline-1 w-full"
      >
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <FieldInput
              id="name"
              placeholder="Ditt navn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur} // Trigger validation on blur
              maxLength={100}
            />
            <FieldInput
              id="telefon"
              placeholder="Telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              onBlur={handleBlur} // Trigger validation on blur
              isValid={!isSubmitted || !validationErrors.telefon}
              errorMessage={isSubmitted ? validationErrors.telefon : ''}
            />
            <FieldInput
              id="email"
              placeholder="E-post"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur} // Trigger validation on blur
              isValid={!isSubmitted || !validationErrors.email}
              errorMessage={isSubmitted ? validationErrors.email : ''}
            />
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur} // Trigger validation on blur
                placeholder="Skriv din melding"
                maxLength={2000}
                className={`w-full h-32 text-m placeholder-gray-500 border rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-primary ${
                  validationErrors.message
                    ? 'border-red-500'
                    : 'border-gray-500'
                }`}
              />
              {formData.message && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  ✖️
                </button>
              )}
              {isSubmitted && validationErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.message}
                </p>
              )}
            </div>
            {isSubmitted && validationErrors.contact && (
              <p className="text-red-500">{validationErrors.contact}</p>
            )}
            <button type="submit">Send</button>
            {status.msg && <FormGeneralStatus status={status} />}
          </div>
        </form>
      </Card>
    </section>
  );
}

const FieldInput = ({
  id,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  isValid,
  errorMessage,
  maxLength,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Trigger validation on blur
        maxLength={maxLength}
        className={`peer h-14 w-full border rounded-lg px-4 pt-4 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-primary ${
          isValid === false ? 'border-red-500' : 'border-gray-300'
        } autofill:bg-gray-50`}
        placeholder={placeholder}
      />

      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform scale-75 origin-top-left 
            peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 
            peer-focus:top-2 peer-focus:scale-75 peer-focus:text-black"
      >
        {placeholder}
      </label>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

const FormGeneralStatus = (status) => {
  console.log(status);
  if (!status) return;
  return (
    <p className="text-red-500 py-5 px-10 h-16 rounded-lg">{status.msg}</p>
  );
};
