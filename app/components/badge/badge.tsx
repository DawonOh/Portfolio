import Image from "next/image";

export default function Badge(props: { image: string; title: string }) {
  return (
    <div className="flexCenter gap-2 px-4 py-2 bg-light-gray rounded-full hover:drop-shadow-md hover:-translate-y-0.5  hover:duration-200 [&:not(:hover)]:translate-y-0.5 [&:not(:hover)]:duration-300 cursor-default md:text-sm">
      <Image
        src={props.image}
        alt={`${props.title} logo`}
        width={100}
        height={100}
        className="w-auto h-auto"
      />
      <span>{props.title}</span>
    </div>
  );
}
