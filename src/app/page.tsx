"use client";
import { useState } from 'react';
import SipCalculatorForm from './components/SipCalculatorForm';

const calculateSip = ({ monthlyInvestment, annualReturnRate, investmentDuration }: { monthlyInvestment: number; annualReturnRate: number; investmentDuration: number }) => {
  const monthlyRate = annualReturnRate / 100 / 12;
  const months = investmentDuration * 12;
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  return futureValue.toFixed(2);
};

const Home = () => {
  const [futureValue, setFutureValue] = useState<string | null>(null);

  const handleCalculateSip = (values: { monthlyInvestment: number; annualReturnRate: number; investmentDuration: number }) => {
    const calculatedFutureValue = calculateSip(values);
    setFutureValue(calculatedFutureValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">SIP Calculator</h1>
      <SipCalculatorForm calculateSip={handleCalculateSip} />
      {futureValue !== null && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Future Value of SIP:</h2>
          <p className="text-2xl text-indigo-600">₹{futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
