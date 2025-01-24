export default function Events() {
  return (
    <section className="container w-10/12 mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-white">Events & Private Dining</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-emerald-50">
          Host your next event with us and create unforgettable memories.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-emerald-600 dark:text-white mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event 1 */}
          <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-white mb-2">Wine Tasting Night</h3>
            <p className="text-gray-600 dark:text-emerald-50 mb-2">Every Friday, 7:00 PM - 9:00 PM</p>
            <p className="text-gray-600 dark:text-emerald-50">
              Join us for an evening of exquisite wines paired with gourmet bites. Perfect for wine enthusiasts!
            </p>
          </div>
          {/* Event 2 */}
          <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-white mb-2">Live Music Saturdays</h3>
            <p className="text-gray-600 dark:text-emerald-50 mb-2">Every Saturday, 6:00 PM - 9:00 PM</p>
            <p className="text-gray-600 dark:text-emerald-50">
              Enjoy live performances by local artists while savoring your favorite dishes.
            </p>
          </div>
        </div>
      </div>

      {/* Private Dining Section */}
      <div>
        <h2 className="text-2xl font-semibold text-emerald-600 dark:text-white mb-4">Private Dining</h2>
        <p className="text-gray-600 dark:text-emerald-50 leading-relaxed mb-6">
          Looking for a unique venue for your next celebration? Our private dining room is perfect for birthdays, anniversaries, corporate events, and more. Custom menus and personalized service are available to make your event truly special.
        </p>
        <div className="bg-white dark:bg-emerald-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-emerald-600 dark:text-white mb-2">Contact Us for Events</h3>
          <p className="text-gray-600 dark:text-emerald-50">
            To book an event or inquire about private dining, please call us at <strong>01234567890</strong> or email us at <strong>Manager@gmail.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}