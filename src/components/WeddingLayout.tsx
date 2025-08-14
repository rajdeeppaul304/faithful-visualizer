import VisuallyCraftedStories from "./VisuallyCraftedStories";
import ImageCollage from "./ImageCollage";
import WeddingVideos from "./WeddingVideos";
import {ImageCarousel} from "./ImageCarousel";

import mehendiHands from "@/assets/mehendi-hands.jpg";
import bridePrep from "@/assets/bride-prep.jpg";
import mandapCeremony from "@/assets/mandap-ceremony.jpg";
import familyPhoto from "@/assets/family-photo.jpg";

const WeddingLayout = () => {
    const images = [
        {
            src: mehendiHands,
            alt: "Mehendi Hands"
        }, {
            src: bridePrep,
            alt: "Bride Preparation"
        }, {
            src: mandapCeremony,
            alt: "Mandap Ceremony"
        }, {
            src: familyPhoto,
            alt: "Family Group Photo"
        }
    ];

    return (
        <div className="bg-background">
            <ImageCarousel images={images}/>
            <div className="max-w-8xl mx-auto relative pt-8 pb-8 md:pt-16 md:pb-16">
                <VisuallyCraftedStories/>
                <ImageCollage/>
                <WeddingVideos/>
            </div>
        </div>
    );
};

export default WeddingLayout;
