import { ProjectDataType } from "@/app/page";

export default function Card(props: { data: ProjectDataType }) {
  const { title, date, image } = props.data;
  return (
    <div>
      <span>{title}</span>
      <span>{date}</span>
    </div>
  );
}
