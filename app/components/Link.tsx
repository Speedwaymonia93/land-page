import Image from "next/image";

type LinkProps = {
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
}

const Link = ({  title, icon, variant, full, href }: LinkProps) => {
  return (
    <a
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
     href={href}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <p className="bold-16 whitespace-nowrap cursor-pointer">{title}</p>
    </a>
  )
}

export default Link