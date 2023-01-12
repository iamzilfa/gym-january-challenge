import Link from "next/link";

const Button = ({ children, link, style }) => {
  return (
    <Link href={`${link}`} target="_blank">
      <div
        className={`py-4 px-[35px] border font-bold tracking-[0.0125rem] leading-[1.625rem] text-base ${style}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
