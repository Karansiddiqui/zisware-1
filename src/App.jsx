import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="h-[2000px] p-6 mt-[64px]">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
