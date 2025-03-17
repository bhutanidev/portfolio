import { Badge } from "../ui/badge"

const Skills = ()=>{
    const skills = [
        "TypeScript", "JavaScript", "React.js", "React Native", "Node.js",
        "Next.js", "CSS", "HTML", "PostgreSQL", "C", "C++", "C#"
    ]
    return(
        <div className="max-w-3xl mx-auto text-center py-8 ">
        <h2 className="text-5xl font-display font-bold text-primary mb-4">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} className="bg-muted/40 font-mono text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

    )
}

export default Skills