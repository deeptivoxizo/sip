import { useState } from 'react';

const SipCalculatorForm = ({ calculateSip }) => {
  const [formValues, setFormValues] = useState({
    monthlyInvestment: '',
    annualReturnRate: '',
    investmentDuration: ''
  });

  const [formErrors, setFormErrors] = useState({
    monthlyInvestment: '',
    annualReturnRate: '',
    investmentDuration: ''
  });

  const validate = () => {
    let errors = {};

    if (!formValues.monthlyInvestment) {
      errors.monthlyInvestment = 'Monthly investment is required';
    } else if (formValues.monthlyInvestment <= 0) {
      errors.monthlyInvestment = 'Monthly investment must be a positive number';
    }

    if (!formValues.annualReturnRate) {
      errors.annualReturnRate = 'Annual return rate is required';
    } else if (formValues.annualReturnRate <= 0 || formValues.annualReturnRate > 100) {
      errors.annualReturnRate = 'Annual return rate must be between 0 and 100';
    }

    if (!formValues.investmentDuration) {
      errors.investmentDuration = 'Investment duration is required';
    } else if (formValues.investmentDuration <= 0) {
      errors.investmentDuration = 'Investment duration must be a positive number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      calculateSip(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="monthlyInvestment" className="block text-sm font-medium text-gray-700">Monthly Investment (₹)</label>
        <input
          id="monthlyInvestment"
          name="monthlyInvestment"
          type="number"
          value={formValues.monthlyInvestment}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.monthlyInvestment && <div className="text-red-500 text-sm">{formErrors.monthlyInvestment}</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="annualReturnRate" className="block text-sm font-medium text-gray-700">Annual Return Rate (%)</label>
        <input
          id="annualReturnRate"
          name="annualReturnRate"
          type="number"
          value={formValues.annualReturnRate}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.annualReturnRate && <div className="text-red-500 text-sm">{formErrors.annualReturnRate}</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="investmentDuration" className="block text-sm font-medium text-gray-700">Investment Duration (years)</label>
        <input
          id="investmentDuration"
          name="investmentDuration"
          type="number"
          value={formValues.investmentDuration}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {formErrors.investmentDuration && <div className="text-red-500 text-sm">{formErrors.investmentDuration}</div>}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Calculate SIP
      </button>
    </form>
  );
};

export default SipCalculatorForm;
