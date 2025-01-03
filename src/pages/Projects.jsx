import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { db } from 'utils/firebase';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
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
        <Container variant="fullMobileConstrainedPadded" className="text-white">
            <h2 className="text-6xl font-bold text-center mb-32">Our projects</h2>
            <div className="py-10 flex flex-wrap">
                {projects.map((project, index) => (
                    <div key={index} className={cn('w-1/3 w-min-[350px] p-2', project.class || '')}>
                        <Card key={index} className={'bg-opacity-[80%] bg-black text-white flex flex-col w-full h-full'}>
                            <CardHeader>
                                <CardTitle className="text-2xl">{project.title}</CardTitle>
                                <CardDescription className="text-md">{project.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{project.description}</p>
                            </CardContent>
                            <CardFooter className="italic mt-auto">
                                <p>{project.footer}</p>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Projects;
