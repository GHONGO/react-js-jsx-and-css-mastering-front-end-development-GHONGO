import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

// Sample photo data with working image URLs
const samplePhotos = [
  {
    id: 1,
    albumId: 1,
    title: "Beautiful Landscape with Mountains",
    thumbnailUrl: "https://picsum.photos/150/150?random=1",
    url: "https://picsum.photos/600/600?random=1"
  },
  {
    id: 2,
    albumId: 1,
    title: "City Skyline at Sunset",
    thumbnailUrl: "https://picsum.photos/150/150?random=2",
    url: "https://picsum.photos/600/600?random=2"
  },
  {
    id: 3,
    albumId: 1,
    title: "Ocean Waves Crashing",
    thumbnailUrl: "https://picsum.photos/150/150?random=3",
    url: "https://picsum.photos/600/600?random=3"
  },
  {
    id: 4,
    albumId: 2,
    title: "Forest Path in Autumn",
    thumbnailUrl: "https://picsum.photos/150/150?random=4",
    url: "https://picsum.photos/600/600?random=4"
  },
  {
    id: 5,
    albumId: 2,
    title: "Modern Architecture Building",
    thumbnailUrl: "https://picsum.photos/150/150?random=5",
    url: "https://picsum.photos/600/600?random=5"
  },
  {
    id: 6,
    albumId: 2,
    title: "Coffee Cup on Wooden Table",
    thumbnailUrl: "https://picsum.photos/150/150?random=6",
    url: "https://picsum.photos/600/600?random=6"
  },
  {
    id: 7,
    albumId: 3,
    title: "Mountain Lake Reflection",
    thumbnailUrl: "https://picsum.photos/150/150?random=7",
    url: "https://picsum.photos/600/600?random=7"
  },
  {
    id: 8,
    albumId: 3,
    title: "Books on Shelf",
    thumbnailUrl: "https://picsum.photos/150/150?random=8",
    url: "https://picsum.photos/600/600?random=8"
  },
  {
    id: 9,
    albumId: 3,
    title: "Street Art Graffiti",
    thumbnailUrl: "https://picsum.photos/150/150?random=9",
    url: "https://picsum.photos/600/600?random=9"
  }
];

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9;

  // Simulate API loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedPhotos = samplePhotos.slice(startIndex, endIndex);
      setPhotos(paginatedPhotos);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [page]);

  const nextPage = () => setPage(prev => prev + 1);
  const prevPage = () => setPage(prev => Math.max(1, prev - 1));

  const totalPages = Math.ceil(samplePhotos.length / itemsPerPage);

  // Function to generate placeholder images
  const getPlaceholderImage = (id) => {
    const colors = ['92c952', '7719aa', '2142b2', 'cf3a3a', 'e67e22', 'f1c40f', '1abc9c', '3498db', '9b59b6'];
    const color = colors[id % colors.length];
    return `https://via.placeholder.com/150/${color}/ffffff?text=Photo+${id}`;
  };

  if (loading) {
    return (
      <Card className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading gallery...</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <Card.Header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Photo Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Browse through a collection of sample images
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            Page {page} of {totalPages} - {photos.length} photos
          </p>
        </Card.Header>
      </Card>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} hover className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.log(`Failed to load image: ${photo.thumbnailUrl}`);
                  e.target.src = getPlaceholderImage(photo.id);
                }}
                loading="lazy"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                #{photo.id}
              </div>
            </div>
            <Card.Body>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {photo.title}
              </h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Album:</span> {photo.albumId}
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  <span className="font-medium">Photo ID:</span> {photo.id}
                </p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Card>
        <Card.Body>
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              onClick={prevPage}
              disabled={page === 1}
            >
              ← Previous
            </Button>
            
            <div className="text-center">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Page {page} of {totalPages}
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Photos {((page - 1) * itemsPerPage) + 1} - {Math.min(page * itemsPerPage, samplePhotos.length)} of {samplePhotos.length}
              </p>
            </div>
            
            <Button
              variant="primary"
              onClick={nextPage}
              disabled={page >= totalPages}
            >
              Next →
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Gallery;