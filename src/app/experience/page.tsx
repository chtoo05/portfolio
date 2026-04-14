import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function ExperiencePage() {
    return (
        <>
            <h1> Experience &amp; Skills</h1>

            <section id="experience" aria-labelledby="experience-heading">
                <Experience />
            </section>

            <section id="skills" aria-labelledby="skills-heading">
                <Skills />
            </section>
        </>
    );
}