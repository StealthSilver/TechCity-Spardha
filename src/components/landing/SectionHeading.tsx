export default function SectionHeading({
  title,
  titleClassName = "text-[1.7rem] sm:text-[2rem]",
}: {
  title: string;
  titleClassName?: string;
}) {
  return (
    <h2
      className={`max-w-xl font-normal leading-[1.1] tracking-tight text-foreground ${titleClassName}`}
    >
      {title}
    </h2>
  );
}
