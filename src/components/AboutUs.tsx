export default function AboutUs() {
  return (
    <section className="container w-10/12 mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-white">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-emerald-50">
          Discover the story behind our passion for food and hospitality.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-600 dark:text-white mb-4">Our Story</h2>
        <p className="text-gray-600 dark:text-emerald-50 leading-relaxed">
          Welcome to FAZFOOD, where every dish tells a story. Founded in 1950, our restaurant was born out of a love for authentic flavors and a commitment to creating memorable dining experiences. From our humble beginnings as a small family-owned eatery, we’ve grown into a beloved destination for food lovers in Italy.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-600 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-emerald-50 leading-relaxed">
          Our mission is simple: to serve delicious, high-quality food made with fresh, locally sourced ingredients. We believe in the power of food to bring people together, and we strive to create a warm, welcoming atmosphere for every guest.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div>
        <h2 className="text-2xl font-semibold text-emerald-600 dark:text-white mb-4">Meet the Team</h2>
        <p className="text-gray-600 dark:text-emerald-50 leading-relaxed">
          Behind every great meal is a team of passionate individuals. From our talented chefs to our friendly servers, everyone at FAZFOOD is dedicated to making your visit special. Meet the faces behind the flavors!
        </p>
        {/* Team Gallery (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1697898109582-40f15c65f174?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chef"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-white">Chef John Doe</h3>
            <p className="text-gray-600 dark:text-emerald-50">Head Chef</p>
          </div>
          <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Manager"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-white">Jane Smith</h3>
            <p className="text-gray-600 dark:text-emerald-50">Restaurant Manager</p>
          </div>
          <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Server"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-white">Alice Johnson</h3>
            <p className="text-gray-600 dark:text-emerald-50">Lead Server</p>
          </div>
        </div>
      </div>
    </section>
  );
}