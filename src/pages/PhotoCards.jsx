import { Carousel } from 'react-responsive-carousel';
import AboutUs1Img from 'assets/about_us1.png';
import AboutUs2Img from 'assets/about_us2.png';
import AboutUs3Img from 'assets/about_us3.png';
import AboutUs4Img from 'assets/about_us4.png';

const PhotoCards = () => {
    return (
        <div className="relative w-full">
            <Carousel showThumbs={false}>
                <div>
                    <img src={AboutUs1Img} alt="" className="w-full h-auto object-cover max-h-[100vh]" />
                    {/* Overlay Text */}
                    <div className="w-full h-full top-0 absolute flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-8xl font-bold">INNOVATIVE</h1>
                    </div>
                </div>
                <div>
                    <img src={AboutUs3Img} alt="" className="w-full h-auto object-cover max-h-[100vh]" />
                    {/* Overlay Text */}
                    <div className="w-full h-full top-0 absolute flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-8xl font-bold">FUN</h1>
                    </div>
                </div>
                <div>
                    <img src={AboutUs2Img} alt="" className="w-full h-auto object-cover max-h-[100vh]" />
                    {/* Overlay Text */}
                    <div className="w-full h-full top-0 absolute flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-8xl font-bold">COLLABORATIVE</h1>
                    </div>
                </div>
                <div>
                    <img src={AboutUs4Img} alt="" className="w-full h-auto object-cover max-h-[100vh]" />
                    {/* Overlay Text */}
                    <div className="w-full h-full top-0 absolute flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className="text-8xl font-bold">HARDWORKING</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default PhotoCards;
