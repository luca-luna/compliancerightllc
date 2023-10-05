import React from 'react';

const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Feature 2',
      description: 'Sed tincidunt arcu eget augue placerat, in viverra turpis vehicula.',
    },
    {
      title: 'Feature 3',
      description: 'Integer vel elit eu lorem scelerisque laoreet in vel mi.',
    },
    {
      title: 'Feature 4',
      description: 'Aenean ut ante eu erat sagittis varius sit amet eu urna.',
    },
    {
      title: 'Feature 5',
      description: 'Nulla vel tortor sit amet ipsum bibendum congue a eget arcu.',
    },
  ];

  return (
    <section id="features" className="bg-bright-turquoise-600 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-4 text-white">Key Features</h2>
          <p className="text-gray-200">
            Explore the features that make us stand out.
          </p>
        </div>

        {/* Flex container for feature tiles */}
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-4"
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-bright-turquoise-500">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
