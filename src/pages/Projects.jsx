import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const Projects = () => {
    const projects = [
        {
            title: 'Health Information System (HIS)',
            date: 'since January 2023',
            description: `
                        A comprehensive healthcare management system that combines a robust web-based platform 
                        for hospital administrators with a user-friendly mobile application for patients. 
                        The platform enables administrators to efficiently manage patient records, doctor schedules, 
                        treatment plans, and other healthcare services. Meanwhile, 
                        the mobile application empowers patients to track their health conditions, appointments, 
                        lab results, and medications. It also facilitates communication with doctors and provides personalized health insights, 
                        enhancing patient engagement and improving the overall quality of care.
                        `,
            class: 'w-full',
            footer: 'Website, Mobile App',
        },
        {
            title: 'Canteen',
            date: 'since September 2024',
            description: `
                        The UCA Campus Canteen App is a mobile application designed to modernize and 
                        streamline the campus dining experience at the University of Central Asia's Naryn and Khorog campuses. 
                        The app aims to digitize canteen operations, simplify payment processes, 
                        and improve the overall dining experience for students while providing efficient management tools for canteen administrators.
                        `,
            footer: `Mobile App`,
            class: 'w-2/3',
        },
        {
            title: 'AI price Audit',
            date: 'was done on Dig Dev hackaton',
            description: `
                        The project is designed to compare the prices of different products. 
                        Prices are compared using AI and data provided by the user.
                        `,
            footer: 'Website, Data Science',
        },
        {
            title: 'Cullinarium',
            date: `(I don't know)`,
            description: `
                        This project is running as start up and already got investments                       
                        `,
            footer: 'Mobile App',
        },
        {
            title: 'University Transportation Management System',
            date: `(I don't know)`,
            description: `
                This is platform for UCA staff for tracking vehicles of campus. 
                Platform is developed to optimize manual work of staff, who are making report of fuel`,
            footer: 'Website, Backend',
        },
        {
            title: 'Face Recognition: Check In - Check out System',
            date: 'since January 2022',
            description: 'The system is designed to facilitate entry by utilizing facial recognition technology.',
            footer: 'Website, Backend, Machine Learning',
        },
        {
            title: 'Crowdfunding Platform',
            date: 'since January 2023',
            description: 'People who would like to support projects. Or people who are running community based proejcts',
            footer: 'Website',
        },
        {
            title: 'Baby Guide',
            date: 'since June/Jule 2024',
            description: 'Online courses for parents for taking care of their noddlers',
            footer: 'Mobile App',
        },
        {
            title: 'Class Attendance Tracker',
            date: "I don't know",
            description: `
                    WebApp for tracking the attendance of students. 
                    Professor can set limit of GPS from where students will be able to take attendance. 
                    A mobile app for tacking attendance according to GPS location.  
                    `,
            footer: 'Website, Mobile App',
        },
    ];

    return (
        <Container variant="fullMobileConstrainedPadded" className="text-white">
            <h2 className="text-6xl font-bold text-center mb-32">Our projects</h2>
            <div className="py-10 flex flex-wrap">
                {projects.map((project, index) => (
                    <div className={cn('w-1/3 w-min-[350px] p-2', project.class || '')}>
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
