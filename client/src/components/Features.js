import React from 'react';

const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      title: 'Corporate Compliance Programs',
      description: "Let us help you build a Corporate Compliance Program so that your business and employees can easily manage the many risks that come from both intention and unintentional compliance violations. In today's work environment, a small investment in your compliance program will provide significant benefits to your Company.",
    },
    {
      title: 'Strategic Planning and Risk Management',
      description: "We work with Boards and Senior Management to facilitate the Strategic Planning Process including customizable templates helping you identify risks and opportunities to build and grow better businesses.",
    },
    {
      title: 'Investigations and Conflict Resolution',
      description: "In today's work environment, over 99% of employee complaints can be effectively managed and mitigated through fair independent incident investigation. A cost-effective process to resolve problems, improve trust and build a culture that employees thrive in. Have a difficult situation? Let us do the investigation work for you and offer you guidance on resolution.",
    },
    {
      title: 'Talent Retention and Leadership Development',
      description: "With employee turnover being at historically high levels, succession planning and developing your talent is more important than ever. We have been helping companies identify and keep key talent by providing a comprehensive succession planning tool as well as a variety of leadership development courses.",
    },
    /* {
      title: 'Safety Training',
      description: 'Describe feature 5',
    }, */
  ];

  return (
    <section id="features" className="bg-bright-turquoise-500 py-20">
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
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-bright-turquoise-500">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
