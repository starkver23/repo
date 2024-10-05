import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Save = () => {
  const [goal, setGoal] = useState(0); // Savings goal
  const [income, setIncome] = useState(0); // Monthly income
  const [expenditure, setExpenditure] = useState(0); // Monthly expenditure
  const [months, setMonths] = useState(3); // Months to achieve goal
  const [totalSaved, setTotalSaved] = useState(0); // Track total saved amount
  const [chartData, setChartData] = useState({});
  const [reminder, setReminder] = useState("");

  const handleUpdateChart = () => {
    const remainingAmount = Math.max(goal - totalSaved, 0); // Calculate remaining amount

    // Update chart data
    setChartData({
      labels: ["Invested Amount", "Remaining Amount"],
      datasets: [
        {
          data: [totalSaved, remainingAmount],
          backgroundColor: [
            "#ff80ab", // rmd-pink-a-100
            "#ff4081", // rmd-pink-a-200
          ],
          borderColor: [
            "#ff80ab", // rmd-pink-a-100
            "#ff4081", // rmd-pink-a-200
          ],
          borderWidth: 2,
        },
      ],
    });

    // Calculate required savings per month to meet goal
    const goalPerMonth = goal / months; // Required savings per month
    const availableSavings = income - expenditure; // Calculate available savings

    if (availableSavings < 0) {
      setReminder(
        "Your expenditure exceeds your income. Please adjust your budget."
      );
    } else if (availableSavings < goalPerMonth) {
      setReminder(
        "You are not saving enough to reach your goal in the specified months. Please save more!"
      );
    } else {
      setReminder("You are saving enough to reach your goal!"); // Notify user they are on track
    }
  };

  const handleSave = () => {
    // Calculate savings as income - expenditure
    const savings = income - expenditure; // Savings = Income - Expenditure

    if (savings < 0) {
      alert("Your expenditure exceeds your income. Please adjust your budget.");
      return;
    }

    const newTotalSaved = totalSaved + savings; // Update the total saved amount

    // Check if new total saved exceeds the goal
    if (newTotalSaved > goal) {
      const extraAmount = newTotalSaved - goal;
      alert(
        `Congratulations! You have saved more than your goal by $${extraAmount}.`
      );
    }

    setTotalSaved(newTotalSaved); // Update the total saved amount

    // Update the chart
    handleUpdateChart();
  };

  return (
    <div className="bg-gradient-to-br from-green-200 to-blue-300 min-h-screen p-6 flex justify-center">
      <div className="container mx-auto flex space-x-6">
        {/* Input Section */}
        <div className="flex-1 p-4 bg-white rounded-lg shadow-lg h-full max-w-md">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
            Savings Goal Tracker
          </h1>
          <div className="mb-4">
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-700"
            >
              Goal Amount:
            </label>
            <input
              type="number"
              id="goal"
              placeholder="Enter goal amount"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="income"
              className="block text-sm font-medium text-gray-700"
            >
              Income:
            </label>
            <input
              type="number"
              id="income"
              placeholder="Enter income amount"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="expenditure"
              className="block text-sm font-medium text-gray-700"
            >
              Expenditure:
            </label>
            <input
              type="number"
              id="expenditure"
              placeholder="Enter expenditure amount"
              value={expenditure}
              onChange={(e) => setExpenditure(Number(e.target.value))}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="months"
              className="block text-sm font-medium text-gray-700"
            >
              Months to Achieve Goal:
            </label>
            <input
              type="number"
              id="months"
              placeholder="Enter number of months"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-4 text-lg font-semibold text-gray-800">
            Total Saved Amount:{" "}
            <span className="text-pink-500">${totalSaved}</span>
          </div>

          {/* Reminder Message */}
          {reminder && (
            <div className="mt-4 text-red-600 font-semibold">{reminder}</div>
          )}

          <div className="mt-6 flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-[#ff4081] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#f50057] transition"
            >
              Save Amount
            </button>
            <button
              onClick={handleUpdateChart}
              className="bg-[#ff80ab] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#ff4081] transition"
            >
              Update Chart
            </button>
          </div>
        </div>

        {/* Chart Section */}
        {chartData.labels && (
          <div className="flex-1 p-4 bg-white rounded-lg shadow-lg h-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Savings Progress
            </h2>
            <div className="h-64 w-full">
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Save;
