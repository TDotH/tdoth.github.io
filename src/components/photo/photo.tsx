export interface photoProps {
  src: string;
  title?: string;
  description?: string;
}

function Photo({ src, title, description }: photoProps) {
  return (
    <article className="relative flex-1 flex-shrink-0 h-full w-max shadow-lg">
      <img
        src={src}
        alt={title}
        className="object-cover rounded-md pointer-events-none h-full w-full"
      />

      <div className="h-[25%] min-h-[100px] z-1 rounded-b-md absolute bottom-0 w-full bg-primary-400/30 backdrop-blur-md text-primary-50 flex flex-col justify-center items-center">
        <h4 className="font-semibold text-base md:text-lg mb-4">{title}</h4>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </article>
  );
}

export default Photo;
