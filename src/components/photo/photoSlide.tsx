import Photo, { type photoProps } from "./photo";

interface PhotoSlideProps {
  photos: photoProps[];
}

function PhotoSlide({ photos }: PhotoSlideProps) {
  return (
    <div className="flex justify-center gap-2 mb-6 h-[50vh] items-stretch w-max transition-transform animate-slide hover:animation-scroll-slow">
      {photos.map((photo, index) => (
        <Photo key={index} {...photo} />
      ))}
    </div>
  );
}
export default PhotoSlide;
