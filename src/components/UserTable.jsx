import React from "react";

const users = [
  {
    userId: "U001",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+91-9876543210",
    activePackage: "Gold",
    joinedAt: "2025-01-12",
  },
  {
    userId: "U002",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+91-9123456780",
    activePackage: "Silver",
    joinedAt: "2025-03-04",
  },
  {
    userId: "U003",
    name: "Charlie Davis",
    email: "charlie@example.com",
    phone: "+91-9988776655",
    activePackage: "Platinum",
    joinedAt: "2025-06-10",
  },
];

const UserTable = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-6 py-3">User ID</th>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Phone</th>
              <th className="text-left px-6 py-3">Active Package</th>
              <th className="text-left px-6 py-3">Joined At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-t border-gray-200">
                <td className="px-6 py-4">{user.userId}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.activePackage}</td>
                <td className="px-6 py-4">{user.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
