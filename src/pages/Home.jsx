import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <Card className="text-center">
        <Card.Header>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Griffin's Task Manager
          </h1>
        </Card.Header>
        <Card.Body>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A modern task management application built with React.js and Tailwind CSS.
            Organize your tasks, track progress, and boost your productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Simple and intuitive interface for managing your daily tasks
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 text-xl">Save</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auto Save</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Your tasks are automatically saved in your browser
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 text-xl">Theme</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dark Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Comfortable viewing with light and dark theme support
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Task Manager Section */}
      <TaskManager />
    </div>
  );
};

export default Home;