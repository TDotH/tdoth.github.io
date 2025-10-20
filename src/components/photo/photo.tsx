export interface photoProps {
  src: string;
  title?: string;
  description?: string;
}

function Photo({ src, title, description }: photoProps) {
  return (
    <article className="relative flex-1 flex-shrink-0 h-full w-max shadow-md">
      <img
        src={src}
        alt={title}
        className="object-cover rounded-md pointer-events-none h-full w-full"
      />

      <div className="h-[25%] min-h-[100px] z-1 rounded-b-md absolute bottom-0 w-full text-background flex flex-col justify-end px-2">
        <h4 className="font-extrabold text-4xl md:text-6xl mb-4 text-shadow-lg">
          {title}
        </h4>
      </div>
    </article>
  );
}

export default Photo;
