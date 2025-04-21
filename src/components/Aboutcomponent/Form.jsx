import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: '',
    address: '', // Added address field
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address } = formData;

    if (!name || !email || !address) {
      alert('Please fill in all required fields: Name, Email, and Address.');
      return;
    }

    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto font-Nunito pt-24 pb-28 text-gray-700">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Share your ideas with us</h2>
          <p className="mb-4">
            Meet HungAnh and discuss exciting technology topics along with hundreds of successful application stories in the digital era.
          </p>
          <p className="mb-2 font-semibold">Phone</p>
          <p className="mb-4">(+84) 90-1134-886</p>
          <p className="mb-2 font-semibold">Email</p>
          <p className="mb-4">Contact@HungAnh.com</p>
          <p className="mb-2 font-semibold">Office</p>
          <p className="mb-4">
            Hanoi (Headquarters): Floor 3 - B1, Roman Plaza Building, To Huu Street, Dai Mo Ward, Nam Tu Liem District, Hanoi
          </p>
          <p>
            Japan: Floor 3, Araki Building 1-1-17, Seshin, Chuou Ward, Sagamihara City, Kanagawa Prefecture, Japan, 2520216
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Send a message to HungAnh</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div>
                <label className="block mb-2 font-semibold">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Please select</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                I agree to the to allow Rabiloo to store and process my personal data following{' '}
                <a href="#" className="text-blue-500 underline">
                  Terms of Use and Privacy Policy
                </a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;