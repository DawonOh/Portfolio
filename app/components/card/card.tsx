import { ProjectDataType } from "@/app/page";
import Image from "next/image";

export default function Card(props: { data: ProjectDataType }) {
  const { title, date, image } = props.data;
  return (
    <div className="h-80 py-12 px-8 cursor-pointer bg-white hover:-translate-y-0.5 hover:duration-300 [&:not(:hover)]:translate-y-0.5 [&:not(:hover)]:duration-300 rounded-md">
      <div className="text-center">
        <p className="mb-2 text-xl font-semibold">{title}</p>
        <p className="mb-8">{date}</p>
        <Image
          src={image}
          alt={`${title} logo`}
          width={1000}
          height={0}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
