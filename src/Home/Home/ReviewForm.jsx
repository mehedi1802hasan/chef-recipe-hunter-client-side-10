import { useState } from 'react';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    comment: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ email: '', phone: '', comment: '' }); // reset form data
    console.log(formData); // replace with your own submit logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-5">
      <div className="mb-4">
        <h2 className='font-bold text-red-900'>Please Send Your valuable Openion Or suggestion</h2>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2 font-medium text-gray-700">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-opacity-50"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
