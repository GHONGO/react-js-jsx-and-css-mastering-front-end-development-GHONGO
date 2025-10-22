import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ApiData = () => {
  const [dataType, setDataType] = useState('posts');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simple API fetch
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(apiData => {
        console.log('API Data received:', apiData);
        setData(apiData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [dataType]);

  const dataTypes = [
    { value: 'posts', label: 'Posts' },
    { value: 'users', label: 'Users' },
    { value: 'comments', label: 'Comments' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <Card.Header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">API Data Explorer</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real data from JSONPlaceholder API
          </p>
        </Card.Header>
      </Card>

      {/* Data Type Selector */}
      <Card>
        <Card.Body>
          <div className="flex gap-2 mb-4">
            {dataTypes.map((type) => (
              <Button
                key={type.value}
                variant={dataType === type.value ? 'primary' : 'secondary'}
                onClick={() => setDataType(type.value)}
              >
                {type.label}
              </Button>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Currently showing: {dataType}
          </p>
        </Card.Body>
      </Card>

      {/* Data Display */}
      <Card>
        <Card.Body>
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Loading {dataType}...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-8 text-red-600 dark:text-red-400">
              Error: {error}
            </div>
          )}

          {!loading && !error && data && (
            <div>
              <p className="text-green-600 dark:text-green-400 mb-4">
                ✅ Successfully loaded {data.length} {dataType} from API!
              </p>
              
              {/* Show first few items as proof */}
              <div className="space-y-4">
                {data.slice(0, 3).map((item) => (
                  <div key={item.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {item.title || item.name || `Item ${item.id}`}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      ID: {item.id} | Type: {dataType}
                    </p>
                  </div>
                ))}
                {data.length > 3 && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ... and {data.length - 3} more items
                  </p>
                )}
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApiData;