import React from 'react';

const PassengerRights: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fly Informed, Reach Relaxed</h2>
      <p className="mb-4">
        Air travel is now a part of everyday life: many first time fliers are now experiencing the ease and 
        convenience of flying.
      </p>
      <p className="mb-4">
        At the Ministry of Civil Aviation, we strive to keep the system efficient, fair and approachable to 
        provide you with a smooth experience: less than 0.1% of flyers face inconvenience in flying. However, 
        sometimes things don't work out as planned. We believe that if you know your rights, as a passenger 
        you can enjoy a more comfortable and a relaxing journey.
      </p>
      <p className="mb-4">
        This Passenger Charter brings to you rules and rights that apply to your air travel in an easy to 
        understand format.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Flight Delay Scenarios</h3>
      <h4 className="text-lg font-semibold mt-4 mb-2">Scenario 1:</h4>
      <p className="mb-2">You have checked-in on time, but the airline expects a delay of:</p>
      <ul className="list-disc list-inside mb-2">
        <li>2 hours or more in case of flights having a block time of up to 2.5 hours.</li>
        <li>3 hours or more in case of flights having a block time of more than 2.5 and up to 5 hours, or</li>
        <li>4 hours or more in case of flights not falling in the above two categories.</li>
      </ul>
      <p className="font-semibold">Your Right:</p>
      <p>You must be offered free of charge meals and refreshments, in relation to waiting time</p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Scenario 2:</h4>
      <p className="mb-2">If your domestic flight is expected to be delayed by more than 6 hours:</p>
      <p className="font-semibold">Your Right:</p>
      <ul className="list-disc list-inside mb-2">
        <li>Rescheduled time should be communicated to you more than 24 hours prior to original 
        scheduled departure time</li>
        <li>The airline shall offer an option of either an alternate flight within a period of 6 hours or full 
        refund of ticket to you.</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">Scenario 3:</h4>
      <p className="mb-2">
        The airline experiences a delay in flight departure communicated more than 24 hours prior to its 
        original scheduled time and if delay is more than 24 hours or more than 6 hours for flights 
        scheduled to depart between 20:00 and 03:00 hours:
      </p>
      <p className="font-semibold">Your Right:</p>
      <p>Free hotel accommodation</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Missed Connecting Flights</h3>
      <p className="mb-4">
        If your flight is delayed and you miss your connecting flight due to the airline's fault, you typically 
        have the right to be rebooked on the next available flight at no extra cost, and the airline may also 
        provide meals, refreshments, and accommodation if the delay is significant, depending on the length 
        of your layover and the airline's policies; you may also be eligible for compensation depending on the 
        situation and your travel distance.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Passengers with Disabilities</h3>
      <p className="font-semibold">Your Rights:</p>
      <ul className="list-disc list-inside mb-4">
        <li>No airline can refuse to carry you along with your assistive aids/devices, escorts and guide dogs</li>
        <li>All the necessary information about your specific requirements shall be obtained by the airlines at 
        the time of ticketing/online booking processes</li>
        <li>You must notify the airlines about your needs at least 48 hours prior to scheduled departure time</li>
        <li>If you are assisted by an escort, the airlines shall make all reasonable efforts to give him/her a seat 
        next to you</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Medical Emergency</h3>
      <p className="mb-2">Navigating Medical Situations at the Airport</p>
      <p className="mb-4">
        If you ever feel unfit or can sense a medical emergency, stay calm. All the airports are equipped 
        with the following:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Medical doctors</li>
        <li>Ambulance</li>
        <li>Medical support equipment</li>
        <li>Paramedical personnel</li>
        <li>Expert handling of medical emergencies</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">During International Travel:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>In case of death of or bodily injury to a passenger on-board an aircraft, the airline is liable to 
        pay damages up to 113,100 SDR per passenger.</li>
        <li>In case of death inside the aircraft due to natural causes, airline is not liable to pay any 
        compensation.</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">For Domestic Travel:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>In case of death or bodily injury to a passenger on-board an aircraft, airline is liable to pay up 
        to * 20,00,000 per passenger</li>
        <li>In case of death inside the aircraft due to natural causes, airline is not liable to pay any 
        compensation</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Lost/Damaged Baggage</h3>
      <p className="mb-4">
        Lost Luggage? Know Your Rights and Claim Compensation at the Airport.
      </p>
      <p className="mb-4">
        You can claim damages from the airlines only when the event which caused the loss, delay or 
        damage took place on board the aircraft or during any period within which the checked baggage was 
        in the charge of the carrier.
      </p>
      <p className="mb-4">
        Additionally, in case of unchecked baggage, the carrier is liable if the damage has resulted from its 
        fault or that of its agents.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">International Carriage:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>In case of loss, delay or damage to baggage, the liability is limited to 1,131 SDR per 
        passenger</li>
        <li>In case of loss, delay or damage to cargo, the liability is limited to 19 SDR per kg</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">Domestic Carriage:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>In case of death of or bodily injury to a passenger on-board an aircraft, the airline is liable to 
        pay damages up to 113,100 SDR per passenger.</li>
        <li>In case of death inside the aircraft due to natural causes, airline is not liable to pay any 
        compensation.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Right to Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>A clearly legible notice is displayed at check-in, containing the following text, 'if you are denied 
        boarding or if flight is cancelled or delayed, ask at the check-in counter or boarding gate for the text 
        stating your rights, particularly with regards to compensation and assistance.</li>
        <li>If you are denied boarding or a flight is cancelled, the operating carrier must provide you with 
        written notice setting out the rules for compensation and assistance in line with this regulation. The 
        contact details of the escalation mechanism shall also be given to you in written.</li>
        <li>If you are visually impaired, the provision of this article shall be applied using alternative means</li>
        <li>Go through the copy of the Passenger Charter given along with your ticket. It's also kept along with 
        in-flight magazines and at airports</li>
        <li>Airlines are required to regularly submit data on number of cases of denied boarding, cancellations 
        and delays on a monthly basis to DGCA. You can see the details on the DGCA portal</li>
      </ul>
    </div>
  );
};

export default PassengerRights;