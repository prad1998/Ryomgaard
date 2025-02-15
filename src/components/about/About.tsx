// src/pages/About.tsx
import MapComponent from '../Mapcomponent';

const About = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-end justify-center mt-14 bg-[url('./assets/img/aboutUs.jpg')] bg-cover bg-no-repeat">
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-0e4d7137-1f91-4813-98c9-5a153b8ba530" data-elfsight-app-lazy></div>
      {/* Leaflet Map Component */}
      <div className="w-full h-96 flex justify-center items-center mt-8">
        <MapComponent />
      </div>
    </div>
  );
};

export default About;
