import React from "react";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "Beautiful, user-friendly interfaces with strong visual hierarchy.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description:
        "Optimized apps focused on speed and smooth user experience.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Clear communication and strong collaboration mindset.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      <div className="absolute top-1/4 left-1/3 h-72 w-72 bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I build modern, high-quality digital experiences that are fast,
            intuitive, and visually engaging.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m a passionate web developer with 3+ years of experience
              building everything from elegant landing pages to scalable web
              applications. What started as curiosity quickly turned into a deep
              love for crafting meaningful digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on modern JavaScript frameworks, responsive design, and
              performance-driven development. I enjoy learning new technologies
              and solving real-world problems with clean solutions.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Python",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full text-sm font-medium
                      bg-primary/10 text-primary
                      hover:bg-primary hover:text-white
                      transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image (Optional) */}
          {/* <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-lg opacity-40 group-hover:opacity-70 transition" />
              <img
                src="#"
                alt="Profile"
                className="relative w-72 h-72 object-cover rounded-full border-4 border-background
                  shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div> */}
        </div>

        {/* Feature Cards */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-background/70 backdrop-blur border
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <feature.icon className="h-9 w-9 text-primary group-hover:scale-110 transition" />
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
