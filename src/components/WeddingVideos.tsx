const VisuallyCraftedStories = () => {
    return (
        <section className="w-full mx-auto text-center items-center px-4 py-3 md:py-12">
            <h1 className=" libertinus-sans-regular text-2xl md:text-4xl text-[#36454F]/80  mb-2 md:mb-4">
                Films
            </h1>
            <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden">
                        <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Heena & Rahul" className="w-full" style={{
                            aspectRatio: "16 / 9"
                        }} // keeps proportions but no big padding gap
                        ></iframe>
                    </div>
                    <span className="mt-1 text-l  text-[#36454F]/80 libertinus-sans-regular font-bold ">
                        Heena & Rahul
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full overflow-hidden">
                        <iframe
                            src="https://player.vimeo.com/video/357274789?h=50a0947f73"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Satvir & Bhavandeep"
                            className="w-full"
                            style={{
                            aspectRatio: "16 / 9"
                        }}></iframe>
                    </div>
                    <span className="mt-1 text-l  text-[#36454F]/80 libertinus-sans-regular font-bold">
                        Satvir & Bhavandeep
                    </span>
                </div>
            </div>
        </section>
    );
};

export default VisuallyCraftedStories;
