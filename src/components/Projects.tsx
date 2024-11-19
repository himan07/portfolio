import { ExternalLink, Github } from "lucide-react";
import modernMart from "../assets/ModernMart-login.png";
import meetSphere from "../assets/MeetSphere.png";
import youtube from "../assets/youtube.png";

export default function Projects() {
  const projects = [
    {
      title: "ModernMart",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: modernMart,
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com/himan07/ModernMart.git",
      demo: "https://github.com/himan07/ModernMart.git",
    },
    {
      title: "MeetSphere – A virtual space for gatherings",
      description:
        "High-performance video conferencing app with real-time chat, optimized streaming, and scalable architecture for seamless user experience.",
      image: meetSphere,
      tags: ["Next.js", "Tailwind CSS", "Clerk.js", "Stream API"],
      github: "https://github.com/yourusername/task-management-app",
      demo: "https://unite-meet.vercel.app/",
    },
    {
      title: "youtube Clone",
      description:
        "YouTube clone application with video streaming, user authentication, and responsive UI built using React.js, Node.js, and MongoDB.",
      image: youtube,
      tags: ["React.js", "Tailwind CSS"],
      github: "https://github.com/yourusername/analytics-dashboard",
      demo: "https://youtube-clone-app-zeta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Explore a selection of my latest projects and side ventures,
            showcasing innovative solutions, technical expertise, and creative
            problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
