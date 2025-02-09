import { Badge } from "@/components/ui/badge";

interface ISkillSet {
  name: string;
  skills: string[];
}

function SkillSets({}) {
  const skillSets: ISkillSet[] = [
    {
      name: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Ruby", "SQL"],
    },
    {
      name: "Frameworks",
      skills: [
        "Vue.js",
        "React.js",
        "Nuxt.js",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Nest.js",
        "Ruby on Rails",
      ],
    },
    {
      name: "Cloud / DevOps",
      skills: ["AWS", "Terraform", "Docker", "Datadog", "CloudFlare"],
    },
  ];
  return (
    <div className="flex flex-col gap-[12px]">
      {skillSets.map((skillSet: ISkillSet) => (
        <div
          key={skillSet.name}
          className="flex flex-col md:flex-row md:gap-[16px]"
        >
          <p className="min-w-[120px] italic leading-7">{skillSet.name}</p>
          <div className="flex flex-row flex-wrap gap-[8px]">
            {skillSet.skills.map((skill: string) => (
              <Badge key={skill} className="text-[14px]" variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillSets;
