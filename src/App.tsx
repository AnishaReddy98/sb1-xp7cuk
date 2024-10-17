import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { MessageSquare, Send, Plane } from 'lucide-react';
import PassengerRights from './PassengerRights';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

// Predefined responses for common scenarios
const passengerRightsTemplates = {
  introduction: `
    Fly Informed, Reach Relaxed.

    Air travel is now a part of everyday life, with many first-time flyers experiencing the ease and convenience of flying.
    At the Ministry of Civil Aviation, we strive to keep the system efficient, fair, and approachable to provide you with a smooth experience. 
    Less than 0.1% of flyers face inconvenience in flying, but sometimes things don’t work out as planned.
    Knowing your rights as a passenger can help you enjoy a more comfortable and relaxed journey.

    This Passenger Charter outlines the rules and rights that apply to your air travel in an easy-to-understand format.
  `,

  flightDelay: (scenario, hours) => `
    If you experience a flight delay while traveling, your rights depend on the scenario:

    Scenario ${scenario}: 
    - You have checked in on time, but the airline expects a delay of:
      • 2 hours or more for flights with a block time of up to 2.5 hours.
      • 3 hours or more for flights with a block time between 2.5 and 5 hours.
      • 4 hours or more for flights not falling in the above two categories.
    Your Right: You must be offered meals and refreshments free of charge, in relation to the waiting time.
  `,

  flightDelayLong: `
    Scenario 2: 
    If your domestic flight is expected to be delayed by more than 6 hours:
    Your Right:
    - Rescheduled time should be communicated to you more than 24 hours before the original scheduled departure time.
    - The airline must offer either an alternative flight within a period of 6 hours or a full refund of your ticket.
  `,

  flightDelayExtended: `
    Scenario 3: 
    If the airline communicates a delay more than 24 hours prior to the original scheduled time, and the delay is more than:
    • 24 hours, or 
    • 6 hours for flights scheduled to depart between 20:00 and 03:00 hours:
    Your Right: Free hotel accommodation.
  `,

  missedConnectingFlight: `
    If your flight is delayed and you miss your connecting flight due to the airline's fault, you have the right to be rebooked on the next available flight at no extra cost.
    The airline may also provide meals, refreshments, and accommodation if the delay is significant, depending on the length of your layover and the airline's policies.
    You may also be eligible for compensation based on the situation and travel distance.
  `,

  passengerWithDisability: `
    Rights for Passengers with Disabilities:
    - No airline can refuse to carry you along with your assistive aids/devices, escorts, and guide dogs.
    - All necessary information about your specific requirements should be obtained by the airline during the ticketing/online booking process.
    - You must notify the airline about your needs at least 48 hours before the scheduled departure time.
    - If assisted by an escort, airlines shall make reasonable efforts to seat them next to you.
  `,

  medicalEmergency: `
    Navigating Medical Situations at the Airport:
    If you feel unfit or experience a medical emergency, stay calm. Airports are equipped with:
    • Medical doctors, 
    • Ambulances, 
    • Medical support equipment, 
    • Paramedical personnel, 
    • Expert handling of medical emergencies.
  `,

  internationalTravelCompensation: `
    During International Travel:
    - In case of death or bodily injury to a passenger on board an aircraft, the airline is liable to pay damages up to 113,100 SDR per passenger.
    - In case of death inside the aircraft due to natural causes, the airline is not liable to pay any compensation.
  `,

  domesticTravelCompensation: `
    For Domestic Travel:
    - In case of death or bodily injury to a passenger on board an aircraft, the airline is liable to pay up to ₹2,000,000 per passenger.
    - In case of death inside the aircraft due to natural causes, the airline is not liable to pay any compensation.
  `,

  baggageDamageCompensation: `
    Lost or Damaged Baggage: Know Your Rights.
    - You can claim damages if the event causing the loss, delay, or damage took place on board the aircraft or while the baggage was in the airline's care.
    - For unchecked baggage, the carrier is liable if the damage resulted from its fault or that of its agents.

    International Carriage:
    - In case of loss, delay, or damage to baggage, the liability is limited to 1,131 SDR per passenger.
    - For cargo, liability is limited to 19 SDR per kg.

    Domestic Carriage:
    - In case of death or bodily injury to a passenger on board an aircraft, the airline is liable to pay up to ₹2,000,000 per passenger.
  `,

  rightToInformation: `
    Right to Information:
    A clearly legible notice must be displayed at check-in stating:
    "If you are denied boarding or if your flight is cancelled or delayed, ask at the check-in counter or boarding gate for your rights regarding compensation and assistance."

    - If you are denied boarding or a flight is cancelled, the operating carrier must provide written notice setting out the rules for compensation and assistance.
    - For visually impaired passengers, this information shall be provided through alternative means.
    - Go through the Passenger Charter provided with your ticket, or find it along with in-flight magazines and at airports.
    - Airlines are required to regularly submit data on cases of denied boarding, cancellations, and delays to the DGCA, which can be viewed on the DGCA portal.
  `
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
      botResponse = passengerRightsTemplates.flightDelay('1', hours);
    } else if (lowercaseInput.includes('cancel')) {
      botResponse = passengerRightsTemplates.flightDelayLong;
    } else if (
      lowercaseInput.includes('baggage') ||
      lowercaseInput.includes('luggage') ||
      lowercaseInput.includes('suitcase')
    ) {
      botResponse = passengerRightsTemplates.baggageDamageCompensation;
    } else if (lowercaseInput.includes('missed connecting flight')) {
      botResponse = passengerRightsTemplates.missedConnectingFlight;
    } else if (lowercaseInput.includes('medical emergency')) {
      botResponse = passengerRightsTemplates.medicalEmergency;
    } else {
      botResponse =
        "I'm sorry, but I don't have specific information about that scenario. Please try asking about flight delays, cancellations, or baggage damage. For other issues, I recommend contacting your airline directly or checking their website for more information.";
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
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send />
          </button>
        </div>
        <button
          onClick={() => setShowRights(!showRights)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {showRights ? 'Hide Passenger Rights' : 'Show Passenger Rights'}
        </button>
        {showRights && (
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <PassengerRights />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
