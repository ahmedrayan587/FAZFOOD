export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-emerald-900">
      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-white text-center mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-emerald-700 dark:text-emerald-200 max-w-4xl mx-auto">
          <p>
            At FazFood, we are committed to protecting your privacy and ensuring
            that your personal information is handled in a safe and responsible
            manner. This Privacy Policy outlines how we collect, use, and
            protect your information when you visit our website or use our
            services.
          </p>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and payment details when you make a reservation or place
              an order.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, such as your IP address, browser type, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience on our website. You can disable cookies in your browser
              settings, but this may affect your ability to use certain features
              of our site.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information for the following purposes:
          </p>
          <ul>
            <li>To process reservations and orders.</li>
            <li>To improve our website and services.</li>
            <li>To send you promotional offers and updates (if you opt-in).</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            3. How We Protect Your Information
          </h2>
          <p>
            We implement a variety of security measures to protect your personal
            information, including:
          </p>
          <ul>
            <li>Encryption of sensitive data.</li>
            <li>Regular security audits.</li>
            <li>Restricted access to personal information.</li>
          </ul>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except in the following cases:
          </p>
          <ul>
            <li>With your consent.</li>
            <li>To comply with legal requirements.</li>
            <li>To trusted third parties who assist us in operating our website
              and services, provided they agree to keep your information
              confidential.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            5. Your Rights
          </h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction or deletion of your information.</li>
            <li>Opt-out of receiving promotional communications.</li>
          </ul>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we encourage you to review this
            policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-emerald-600 dark:text-white mt-8 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@fazfood.com<br />
            <strong>Phone:</strong> +1 (123) 456-7890<br />
            <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
          </p>
        </div>
      </section>
    </div>
  );
}