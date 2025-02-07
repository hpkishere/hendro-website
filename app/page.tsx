import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px]">
      <section className="flex flex-col-reverse gap-[24px] md:flex-row md:items-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hello! 👋 Hendro here
        </h1>
        <Avatar className="h-[80px] w-[80px]">
          <AvatarImage
            alt="Hendro's logo"
            className=""
            src="/hendro-logo.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Building websites, applications and experiences
        </h2>
        <p className="mt-2 leading-7 md:mt-4">
          My name is Hendro Pick Kang and I'm a full-stack Software Engineer
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

      <section className="flex flex-col gap-[8px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Work Experience
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2020 - Jan 2025</p>
          <p className="font-medium leading-7">
            Software Engineer at{" "}
            <a
              className="underline"
              href="https://heartofgodchurch.org/"
              target="_blank"
            >
              Heart of God Church
            </a>{" "}
            (Full-time)
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">May 2019 - Aug 2019</p>
          <p className="font-medium leading-7">
            Digital Transformation Assistant Engineer at{" "}
            <a
              className="underline"
              href="https://www.airliquide.com/"
              target="_blank"
            >
              Air Liquide
            </a>{" "}
            (Intern)
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2020 - Jan 2025</p>
          <p className="font-medium leading-7">
            Full-stack Developer at{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/company/leap-fintech/posts/?feedView=all"
              target="_blank"
            >
              LEAP Fintech
            </a>{" "}
            (Intern)
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-[8px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Volunteering Experience
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2020 - Jan 2025</p>
          <p className="font-medium leading-7">
            Founder & Software Engineer at{" "}
            <a
              className="underline"
              href="https://www.straitstimes.com/lifestyle/do-good-with-tech#:~:text=CODETOLOVE"
              target="_blank"
            >
              codeToLove
            </a>{" "}
            (Pro-bono freelance)
          </p>
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

      <section className="flex flex-col gap-[8px] md:gap-[0px]">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight md:mb-4">
          Education
        </h2>
        <div className="flex flex-col md:flex-row md:gap-[16px]">
          <p className="min-w-[170px] italic leading-7">Sep 2016 - Jun 2020</p>
          <p className="font-medium leading-7">
            BSc (Information Systems) with Merit at{" "}
            <a
              className="underline"
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
