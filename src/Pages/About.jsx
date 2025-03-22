import React from 'react'

const About = () => {
    return (
      <section className="bg-gray-100 py-12 px-6 text-center h-[600px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Our <strong>Inventory Management System</strong> is designed to help businesses efficiently 
            track stock, manage suppliers, and optimize operations. With real-time analytics 
            and automated inventory tracking, we empower businesses to minimize losses and 
            maximize productivity.
          </p>
  
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Why Choose Us?</h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li>✅ Real-time stock updates</li>
              <li>✅ User-friendly & secure</li>
              <li>✅ Scalable for small to large businesses</li>
            </ul>
          </div>
  
          <div className="mt-6">
            <a href="/contact" className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              Contact Us
            </a>
          </div>
          {/* Credit Section */}
          <div className="mt-10 text-gray-500 text-sm">
            <p>Project guided by <strong>Prof. Kumar Gaurav</strong>. We are grateful for his invaluable support and guidance in the development of this project.</p>
          </div>
        </div>
      </section>
    );
  };
  
export default About;
