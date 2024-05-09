import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

interface IconProps {
  iconName: string;
  stroke?: string;
  fill?: string;
  position?: Position;
  width: string;
  height: string;
  top?: string;
  right?: string;
}

const Icon: FC<IconProps> = ({
  iconName,
  stroke,
  fill,
  position,
  width,
  height,
  top,
  right,
}) => {
  return (
    <svg
      stroke={`${stroke}`}
      fill={`${fill}`}
      style={{ position, width, height, top, right }}
    >
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;
