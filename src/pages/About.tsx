import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background px-4 py-12 libertinus-sans-regular">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#36454F] leading-tight">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
          Galaxies Photography and Film Productions is a photography and videography company based in Jaipur, led by visual storyteller Apoorv Shrivastava. What began in 2017 as a personal passion has grown into a professional business dedicated to capturing stories with precision, authenticity, and cinematic style.
        </p>
        <p className="text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
          We offer a wide range of photography and filmmaking services, including prewedding and wedding photography, real estate shoots, lifestyle coverage, and behind-the-scenes documentation. We also focus on product manufacturing processes, especially in the textile and block printing sectors.
        </p>
        <p className="text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
          Since our first commissioned shoot in 2019, we’ve worked with individuals, couples, artists, and brands to bring over 250 stories to life. We approach each project with a fresh perspective and genuine creative intent. Over the years, including during the challenges of the pandemic, we’ve continually improved our craft, evolved our visual style, and remained committed to storytelling that connects with people.
        </p>
        <p className="text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
          At Galaxies, every project is a collaboration. We spend time understanding our clients' goals, whether it’s capturing the intimacy of a love story or showcasing the artistry of handcrafted products. Our team uses professional gear, has technical expertise, and follows a flexible approach to deliver high-quality results.
        </p>
        <p className="text-lg md:text-xl text-[#506270] mb-6 leading-relaxed">
          We are open to travel-based assignments across India and internationally. We take pride in being reliable, meeting deadlines, and staying creatively involved from start to finish.
        </p>
        <h2 className="text-xl md:text-xl font-semibold mt-8 mb-3 text-[#36454F]">
          Why Choose Galaxies?
        </h2>
        <ul className="text-lg md:text-xl text-[#506270] list-disc list-inside space-y-2 mb-8">
          <li>Expertise in prewedding and wedding photography</li>
          <li>Specialized in documenting the story of your brand and its manufacturing processes</li>
          <li>Skilled at lifestyle photography and authentic behind-the-scenes storytelling</li>
          <li>Cinematic, high-resolution visuals tailored for personal and commercial projects</li>
          <li>Professional, dependable, and creatively focused team</li>
        </ul>
        <p className="text-lg md:text-xl text-[#36454F] font-semibold mb-10 leading-relaxed">
          Let Galaxies Photography and Film Productions bring your story to life through visuals that communicate your narrative and create lasting memories.
        </p>
        <div className="flex gap-8 font-inter text-base md:text-lg text-[#36454F] mt-8">
          <a href="https://www.instagram.com/galaxiesphotography" className="hover:underline libertinus-sans-regular ">
            Instagram
          </a>
          <a href="mailto:iamapoorv23@gmail.com" className="hover:underline libertinus-sans-regular">
            Mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
