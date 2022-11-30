import Link from "next/link";

import { LoaderCircle } from "../loader-circle";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: string;
  href?: string;
  type?: "submit" | "button";
  loading?: boolean;
  svg?: {
    icon: string;
    size: number;
  };
  target?: string;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  target,
  svg,
  ...props
}: ButtonProps) {
  return (
    <S.Button backgroundColor={backgroundColor} $loading={loading}>
      {href && !type ? (
        <Link href={href}>
          <a
            href="replace"
            className="link-1-bold-graphie"
            target={target}
            style={{ pointerEvents: props.disabled ? "none" : "all" }}
            {...props}
          >
            {svg && (
              <i
                dangerouslySetInnerHTML={{
                  __html: svg.icon,
                }}
              ></i>
            )}
            
            {loading ? <LoaderCircle size={32} /> : text}
          </a>
        </Link>
      ) : (
        <button
          className="link-1-bold-graphie"
          type={type ? type : "submit"}
          disabled={loading}
          {...props}
        >
          {loading ? <LoaderCircle size={32} /> : text}
        </button>
      )}
    </S.Button>
  );
}
