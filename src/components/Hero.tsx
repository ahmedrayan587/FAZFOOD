import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage: string;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <div className="space-x-4">
          <Link
            to={primaryButtonLink}
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              to={secondaryButtonLink}
              className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}