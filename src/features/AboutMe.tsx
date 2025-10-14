interface AboutMeProps {
  className?: string;
}

function AboutMe({ className }: AboutMeProps) {
  return (
    <section
      className={
        "w-full max-w-4xl p-4 mx-auto my-8 bg-slate-800 rounded-lg shadow-lg " +
        (className ?? "")
      }
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-slate-300">
        Hello! I'm Tyde, a passionate software developer with a love for
        creating innovative solutions. With a background in computer science and
        years of experience in full-stack development, I enjoy working on
        projects that challenge me to learn and grow. When I'm not coding, you
        can find me exploring the outdoors, reading tech blogs, or experimenting
        with new programming languages and frameworks.
      </p>
    </section>
  );
}

export default AboutMe;
