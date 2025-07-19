import React from 'react'; //

import RecurrenceForm from './components/RecurrenceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Recurring Date Picker</h1>
      <RecurrenceForm />
    </div>
  );
}

export default App;
