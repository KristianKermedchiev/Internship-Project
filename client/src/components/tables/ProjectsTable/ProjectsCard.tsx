import EditProjectForm from '@/components/forms/projects-form/ProjectFormEdit/EditProject';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project-types/projectTypes';
import { Link } from 'react-router-dom';

type CardFormProps = {
    projects: Project[];
}

const ProjectsCard = ({ projects }: CardFormProps) => {
    return (
        <>
            {
                projects.map((project) => (
                    <Card key={project.id}>
                        <CardHeader className='bg-header rounded-t-lg p-5'>
                            <CardTitle>
                                <Link to={`/projects/${project.id}/tasks`}>
                                    {project.name}
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='p-5'>
                            <CardDescription>
                                Address: {project.address}
                            </CardDescription>
                            <CardDescription>
                                Deadline: {
                                    new Date(project.end_date!)
                                        .toLocaleDateString()
                                        .slice(0, 10)
                                }
                            </CardDescription>
                            <CardDescription>
                                Status: {project.status}
                            </CardDescription>
                            <CardDescription>
                                Company: {project.company_name}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className='p-1 justify-center rounded-b-lg border-t'>
                            <EditProjectForm
                                project={project}
                                projectId={project.id!}
                            />
                        </CardFooter>
                    </Card>
                ))
            }
        </>
    )
}

export default ProjectsCard