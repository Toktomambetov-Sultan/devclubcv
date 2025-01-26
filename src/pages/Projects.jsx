import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { db } from 'utils/firebase';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { Carousel } from 'react-responsive-carousel';
import Card1Img from 'assets/Card1Img.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            onValue(ref(db, '/1'), (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                setProjects(data);
            });
        };
        getProjects();
    }, []);

    return (
        <div id="projects" className="w-full bg-gray-800  min-h-screen">
            <Container variant="fullMobileConstrainedPadded" className="text-white ">
                <h2
                    className="text-6xl font-bold text-end mb-8 mt-16 mr-8 uppercase"
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                    }}
                >
                    Successfull
                    <br /> projects
                </h2>
            </Container>
            <Carousel>
                {projects.map((project, index) => (
                    <Container key={index} variant="fullMobileConstrainedPadded" className="text-white flex items-center justify-center h-full">
                        <div className="bg-black text-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row max-w-4xl h-max-[700px]h-[80%]">
                            <div className="md:w-1/2 flex items-center justify-center p-4">
                                <img src={project.image} alt="Face Recognition Illustration" className="rounded-lg object-cover w-full h-auto" />
                            </div>
                            <div className="md:w-1/2 p-6 flex flex-col">
                                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                                <p className="text-lg font-semibold mb-2">
                                    Launching date: <span className="text-yellow-300">{project.date}</span>
                                </p>
                                <p className="text-gray-300 leading-relaxed overflow-y-scroll h-[100px]">{project.description}</p>
                                <p className="mt-auto pt-4">{project.footer}</p>
                            </div>
                        </div>
                    </Container>
                ))}
            </Carousel>
        </div>
    );
};

export default Projects;
