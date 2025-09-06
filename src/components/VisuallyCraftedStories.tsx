import brideElegant from "@/assets/bride-elegant.jpg";
import weddingCouple1 from "@/assets/wedding-couple-1.jpg";
import destinationWedding from "@/assets/destination-wedding.jpg";

const VisuallyCraftedStories = () => {
  return (
    <section className="w-full max-w-6xl mx-auto text-center px-4 py-12 pb-32">
      <h2 className="libertinus-sans-regular text-xl md:text-4xl text-[#36454F] mb-4">
        Visually Crafted Stories That Go Beyond the Frame
      </h2>
      <p className="libertinus-sans-regular text-sm md:text-base text-[#36454F]/80 max-w-2xl mx-auto mb-12">
        Galaxies Photography is where light meets story a space where timeless love,
        raw craft, and authentic emotion unfold frame by frame.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="flex flex-col items-center">
          <a className="aspect-[4/5] overflow-hidden w-full h-[500px]" 
          href="/photography/1">
            <img
              src={weddingCouple1}
              alt="Heena & Rahul"
              className="w-full h-full object-cover grayscale"
            />
          </a>
          <span className="mt-2 text-sm libertinus-sans-regular text-[#36454F]/80">
            Heena & Rahul
          </span>
        </div>
        <div className="flex flex-col items-center">
          <a className="aspect-[4/5] overflow-hidden w-full h-[500px]"
          href="/photography/2">
            <img
              src={brideElegant}
              alt="Satvir & Bhavandeep"
              className="w-full h-full object-cover grayscale"
            />
          </a>
          <span className="mt-2 text-sm libertinus-sans-regular text-[#36454F]/80">
            Satvir & Bhavandeep
          </span>
        </div>
        <div className="flex flex-col items-center">
          <a className="aspect-[4/5] overflow-hidden w-full h-[500px]"
          href="/photography/3">
            <img
              src="/couples/jyoti_lovejit/A7400029.jpg"
              alt="Jyoti & Lovejit"
              className="w-full h-full object-cover grayscale"
            />
          </a>
          <span className="mt-2 text-sm libertinus-sans-regular text-[#36454F]/80">
            Jyoti & Lovejit
          </span>
        </div>
      </div>
    </section>
  );
};

export default VisuallyCraftedStories;
