import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { MessageSquare, Send, Plane, Info } from 'lucide-react';
import PassengerRights from './PassengerRights';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

// Predefined responses for common scenarios
const predefinedResponses = {
  flightDelay: (hours: number) => `
    For a flight delay of ${hours} hours, you have the following rights:
    1. Right to care: The airline should provide meals and refreshments, two free phone calls, emails or faxes.
    2. Compensation: For delays of 3 hours or more, you may be entitled to compensation of €250 to €600, depending on the flight distance.
    3. Refund or re-routing: If the delay is 5 hours or more, you have the right to a refund of your ticket or a return flight to your first point of departure.
    4. Accommodation: If the delay extends overnight, the airline should provide hotel accommodation and transport between the airport and the hotel.
    Always check with your specific airline for their policies, as they may offer additional compensation or services.
  `,
  cancelledFlight: `
    If your flight is cancelled, you have the following rights:
    1. Re-routing or refund: You can choose between an alternative flight to your destination or a full refund of your ticket.
    2. Compensation: You may be entitled to compensation between €250 and €600, unless the cancellation was due to extraordinary circumstances.
    3. Right to care: The airline must provide meals, refreshments, communication facilities, and if necessary, accommodation.
    4. Information: The airline must inform you about your rights and the reason for the cancellation.
    Contact your airline immediately to discuss your options and any potential compensation.
  `,
  baggageDamage: `
    If your baggage is damaged during a flight, you have the following rights:
    1. Report immediately: File a Property Irregularity Report (PIR) at the airport before leaving the baggage claim area.
    2. Deadline: You must file a written claim within 7 days of receiving your baggage.
    3. Compensation: Airlines are liable for damages up to approximately 1,300 SDR (Special Drawing Rights).
    4. Evidence: Keep all receipts for any replacement items you need to purchase and take photos of the damage.
    5. Insurance: Check if your travel insurance covers baggage damage for additional compensation.

    Steps to take:
    1. Document the damage with photos and keep all relevant travel documents (boarding pass, baggage tag).
    2. Contact your airline's customer service immediately to start the claim process.
    3. Follow up with a written claim if required, including all evidence and receipts.
    4. Be persistent and know your rights under the Montreal Convention or applicable air passenger rights regulations.

    Remember, airlines are responsible for baggage damage during transport, but they may try to limit their liability. Stay informed and assertive about your rights.
  `,
};

function App() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [showRights, setShowRights] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    let botResponse = '';

    // Improved keyword matching for predefined scenarios
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('delay') && lowercaseInput.includes('hour')) {
      const hours = parseInt(input.match(/\d+/)?.[0] || '3');
      botResponse = predefinedResponses.flightDelay(hours);
    } else if (lowercaseInput.includes('cancel')) {
      botResponse = predefinedResponses.cancelledFlight;
    } else if (
      lowercaseInput.includes('baggage') ||
      lowercaseInput.includes('luggage') ||
      lowercaseInput.includes('suitcase')
    ) {
      if (
        lowercaseInput.includes('damage') ||
        lowercaseInput.includes('broken') ||
        lowercaseInput.includes('destroyed')
      ) {
        botResponse = predefinedResponses.baggageDamage;
      }
    }

    if (!botResponse) {
      botResponse = "I'm sorry, but I don't have specific information about that scenario. Please try asking about flight delays, cancellations, or baggage damage. For other issues, I recommend contacting your airline directly or checking their website for more information.";
    }

    const botMessage = { text: botResponse, isUser: false };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold flex items-center">
          <Plane className="mr-2" /> Flight Passenger Rights Chatbot
        </h1>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                message.isUser ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your flight rights..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={20} />
          </button>
        </div>
        <button
          onClick={() => setShowRights(!showRights)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <Info size={16} className="mr-1" />
          {showRights ? 'Hide' : 'Show'} Passenger Rights Information
        </button>
      </div>
      {showRights && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Passenger Rights Information</h3>
              <div className="mt-2 px-7 py-3">
                <PassengerRights />
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={() => setShowRights(false)}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;