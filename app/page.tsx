import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px]">
      <section className="flex flex-col-reverse gap-[24px] md:flex-row md:items-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hello! 👋 Hendro here
        </h1>
        <Avatar className="h-[80px] w-[80px]">
          <AvatarImage alt="Hendro logo" className="" src="/hendro-logo.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Building websites, applications and experiences
        </h2>
        <p className="mt-2 leading-7 md:mt-4">
          My name is Hendro Pick Kang and I am a full-stack Software Engineer
          based in Singapore with 4 years of experience designing, developing,
          and deploying 10+ scalable web applications and APIs using Vue.js,
          React.js, Node.js, and PostgreSQL.
        </p>
        <p className="mt-2 leading-7 md:mt-4">
          <a
            href="mailto:hendrohpk@gmail.co?subject=Let's%20work%20together!"
            className="whitespace-nowrap font-medium text-blue-600 hover:underline"
          >
            🔗 Email
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/hendro-pick-kang/"
            target="_blank"
            className="whitespace-nowrap font-medium text-blue-600 hover:underline"
          >
            🔗 LinkedIn
          </a>{" "}
          <a
            href="https://stackoverflow.com/users/12414097/hendro"
            target="_blank"
            className="whitespace-nowrap font-medium text-blue-600 hover:underline"
          >
            🔗 Stack Overflow
          </a>{" "}
          <a
            href="https://github.com/hpkishere"
            target="_blank"
            className="whitespace-nowrap font-medium text-blue-600 hover:underline"
          >
            🔗 GitHub
          </a>
        </p>
      </section>

      <section className="flex flex-col gap-[12px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Work Experience
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2020 - Jan 2025</p>
          <Accordion className="relative top-[1px]" type="single" collapsible>
            <AccordionItem className="border-0" value="item-1">
              <AccordionTrigger className="gap-[12px] py-0 text-left md:justify-start">
                Software Engineer at Heart of God Church (Full-time)
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <p className="py-1 leading-5">
                  Engineering lead for{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href="https://heartofgodchurch.org/"
                    target="_blank"
                  >
                    Heart of God Church
                  </a>
                  &apos;s IT Team
                </p>
                <p className="py-1 leading-5">
                  • Pioneered the team’s engineering capabilities by
                  implementing modern frameworks{" "}
                  <b>(Vue.js, React.js & Node.js)</b> which is currently
                  utilised by over 30 engineers, including volunteers
                </p>
                <p className="py-1 leading-5">
                  • Successfully launched multiple web applications and APIs{" "}
                  <b>(Vue.js, Node.js & PostgreSQL)</b> by collaborating in a
                  cross-functional team
                </p>
                <p className="py-1 leading-5">
                  • Led multiple teams of university and working adult software
                  engineer volunteers to complete projects
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">May 2019 - Aug 2019</p>
          <Accordion className="relative top-[1px]" type="single" collapsible>
            <AccordionItem className="border-0" value="item-1">
              <AccordionTrigger className="gap-[12px] py-0 text-left md:justify-start">
                Digital Transformation Assistant Engineer at Air Liquide
                (Intern)
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <p className="py-1 leading-5">
                  Software Engineer intern for{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href="https://www.airliquide.com/"
                    target="_blank"
                  >
                    Air Liquide
                  </a>
                  &apos;s Digital Transformation team that develops Business
                  Intelligence initiatives and continuous improvements
                </p>
                <p className="py-1 leading-5">
                  • Built an Artificial Intelligence chatbot platform{" "}
                  <b>(Angular.js, C# .NET & Amazon Web Services Lex)</b>
                </p>
                <p className="py-1 leading-5">
                  • Automated deployment pipelines{" "}
                  <b>(Amazon Web Services & GitLab CI/CD)</b>, cutting release
                  cycles to improve efficiency
                </p>
                <p className="py-1 leading-5">
                  • Collaborated with stakeholders from other departments and
                  secured executive approval for a chatbot project by presenting
                  a proof-of-concept demo
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">May 2018 - Feb 2019</p>
          <Accordion className="relative top-[1px]" type="single" collapsible>
            <AccordionItem className="border-0" value="item-1">
              <AccordionTrigger className="gap-[12px] py-0 text-left md:justify-start">
                Full-stack Developer at LEAP Fintech (Intern)
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <p className="py-1 leading-5">
                  Full Stack Engineer intern for{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href="https://www.linkedin.com/company/leap-fintech/posts/?feedView=all"
                    target="_blank"
                  >
                    LEAP Fintech
                  </a>
                  , a startup that specialises in financial applications
                </p>
                <p className="py-1 leading-5">
                  • Developed a REST API <b>(Java Spring Boot)</b> from scratch
                  which handled payments and lending operations
                </p>
                <p className="py-1 leading-5">
                  • Developed a mobile app <b>(React.js & React Native)</b> with
                  a chatbot interface that manages your financial transactions
                  and statements
                </p>
                <p className="py-1 leading-5">
                  • Implemented an automated deployment of the frontend{" "}
                  <b>(Amazon Web Services & GitLab CI/CD)</b>, reducing
                  deployment time
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="flex flex-col gap-[12px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Volunteering Experience
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Apr 2019 - Sep 2020</p>
          <Accordion className="relative top-[1px]" type="single" collapsible>
            <AccordionItem className="border-0" value="item-1">
              <AccordionTrigger className="gap-[12px] py-0 text-left md:justify-start">
                Founder & Software Engineer at codeTolove (Pro-bono freelance)
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <p className="py-1 leading-5">
                  Founder of a pro-bono non-profit which provides IT services to
                  social organizations and featured in{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href="https://www.straitstimes.com/lifestyle/do-good-with-tech#:~:text=CODETOLOVE"
                    target="_blank"
                  >
                    Straits Times
                  </a>
                </p>
                <p className="py-1 leading-5">
                  • Built a website <b>(React.js & Gatsby.js)</b> to raise
                  awareness of migrant workers in Singapore
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="flex flex-col gap-[8px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Skills
        </h2>
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col md:flex-row md:gap-[16px]">
            <p className="min-w-[120px] italic leading-7">Languages</p>
            <div className="flex flex-row flex-wrap gap-[8px]">
              <Badge className="text-[14px]" variant="outline">
                HTML
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                CSS
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                JavaScript
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                TypeScript
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Ruby
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                SQL
              </Badge>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[16px]">
            <p className="min-w-[120px] italic leading-7">Frameworks</p>
            <div className="flex flex-row flex-wrap gap-[8px]">
              <Badge className="text-[14px]" variant="outline">
                Vue.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                React.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Nuxt.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Next.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                TailwindCSS
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Node.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Nest.js
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Ruby on Rails
              </Badge>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[16px]">
            <p className="min-w-[120px] italic leading-7">Cloud / DevOps</p>
            <div className="flex flex-row flex-wrap gap-[8px]">
              <Badge className="text-[14px]" variant="outline">
                AWS
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Terraform
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Docker
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                Datadog
              </Badge>
              <Badge className="text-[14px]" variant="outline">
                CloudFlare
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[12px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Education
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2016 - Jun 2020</p>
          <p className="font-medium leading-7">
            BSc (Information Systems) with Merit at{" "}
            <a
              className="font-medium text-blue-600 hover:underline"
              href="https://admissions.smu.edu.sg/programmes/school-computing-and-information-systems?utm_source=google&utm_medium=cpc&utm_campaign=ug_oh_ug2025admissions&utm_content=sg_na_na_Brand-Progcomputinginfosystem-v2&gad_source=1&gclid=CjwKCAiA2JG9BhAuEiwAH_zf3jU7nDTl2okCpJU4xUPESPy9V1hAcL6dpgTodjh-FJAgVwZS3-G75xoCUS0QAvD_BwE"
              target="_blank"
            >
              Singapore Management University
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
