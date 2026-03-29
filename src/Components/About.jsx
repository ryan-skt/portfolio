import ScrollTimeline from "../ui/ScrollTimeline";

const events = [
  {
    year: "2022",
    title: "12th Grade - Science Stream",
    subtitle: "Pranab Vidyapith, Dimapur",
    description: "Completed 12th grade in Science Stream.",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Nims University, Jaipur",
    description: "Pursuing B.Tech with a focus on Software Development and System Design.",
  },
]

const AboutmeText = [
  {
  paragraph: `Hi there!
I’m Ryan Sivakoti, a full-stack developer with a strong foundation in the MERN stack and modern web technologies.

I specialize in building scalable, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB. I focus on writing clean, maintainable code and creating smooth user experiences.

I have completed a Web Developer internship at 91 Digitals (Delhi), where I worked on real-world applications and gained hands-on experience in building production-ready solutions.

Currently pursuing B.Tech in Computer Science, I’m continuously improving my skills in system design, performance optimization, and full-stack development.

I’m actively looking for opportunities to grow as a developer and contribute to impactful products.`
}

]

export default function About() {
  return (
    <>  
  
    <div className="flex items-center justify-center gap-3 mb-6 mt-12">
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>

      <span className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase">ABOUT</span>

      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>

    <ScrollTimeline 
      events={events}
      title="My Journey so far"
      subtitle="Scroll to explore the timeline"
      aboutTitle="About Me"
      aboutText={AboutmeText[0].paragraph}
      animationOrder="sequential"
      progressIndicator={true}
      cardAlignment="Right"
      revealAnimation="fade"
      darkMode={true}
    />
    </>
  )
}