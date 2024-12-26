import React from 'react';
const Dashboard = () => {
  const [inventoryItems, setInventoryItems] = React.useState([
    { id: 1, name: 'Item 1', quantity: 10, category: 'Category A' },
    { id: 2, name: 'Item 2', quantity: 15, category: 'Category B' },
    // Add more sample items as needed
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid gap-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-4 rounded-lg shadow">
            <h2 className="font-semibold">Total Items</h2>
            <p className="text-2xl">{inventoryItems.length}</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-4 rounded-lg shadow">
            <h2 className="font-semibold">Total Quantity</h2>
            <p className="text-2xl">
              {inventoryItems.reduce((sum, item) => sum + item.quantity, 0)}
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-4 rounded-lg shadow">
            <h2 className="font-semibold">Categories</h2>
            <p className="text-2xl">
              {new Set(inventoryItems.map(item => item.category)).size}
            </p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow mt-4">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
