import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

const Projects = () => {

    return <Container variant="fullMobileConstrainedPadded" className="text-white" >
        <h2 className="text-6xl font-bold text-center mb-32">
            Our projects
        </h2>
        <div className="py-10 flex gap-4 ">
            <Card className="w-[350px] bg-opacity-20 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl">Hospital information system</CardTitle>
                    <CardDescription className="text-md">since January 2023</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Hospital Information System is a ...</p>
                </CardContent>
                <CardFooter>
                    <p>Our first project</p>
                </CardFooter>
            </Card>
            <Card className="w-[350px] bg-opacity-20 text-white">
                <CardHeader>
                    <CardTitle className="text-2xl">Face recognition system</CardTitle>
                    <CardDescription className="text-md">since January 2022</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Face Recognition System is a ...</p>
                </CardContent>
                <CardFooter>
                    <p>One of the projects</p>
                </CardFooter>
            </Card>
        </div>
    </Container>

}

export default Projects