
import SlotMachine from "./SlotMachine.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">🎰 Slot Machine</h1>
        <SlotMachine />
      </div>
    </div>
  );
}
