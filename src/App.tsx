import "./App.css";
import logo from "./assets/images/logo.svg";
import ExpensesChart from "./ExpensesChart";

function App() {
  return (
    <main className="space-y-6 max-w-md flex flex-col items-center justify-center m-auto p-4 w-full min-h-screen">
      <article className="bg-soft-red text-cream p-6 rounded-xl flex justify-between w-full">
        <div className="space-y-1">
          <h3 className="text-start">My balance</h3>
          <h1 className="font-semibold text-3xl text-white">$921.48</h1>
        </div>
        <img src={logo} alt="Logo"></img>
      </article>

      <article className="bg-very-pale-orange px-4 py-6 rounded-xl text-start space-y-6 w-full">
        <h1 className="font-bold text-2xl sm:text-3xl">Spending - Last 7 days</h1>
        <ExpensesChart />
        <hr className="my-4 border-cream border-2 rounded-2xl" />
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-medium-brown">Total this month</p>
            <h1 className="font-bold text-3xl sm:text-4xl">$478.33</h1>
          </div>
          <div className="flex flex-col justify-end items-end">
            <p className="font-semibold">+2.4%</p>
            <p className="text-medium-brown">from last month</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
