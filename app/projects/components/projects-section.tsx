import { IProject } from "@/app/types/project";
import React from "react";
import ItemProject from "./item-project";

interface ProjectsSectionProps {
    projects: IProject[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ItemProject key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectsSection;
