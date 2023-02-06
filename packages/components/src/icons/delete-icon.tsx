import { FC } from "react";

export type DeleteIconProps = {
  onClick: () => void;
}

export const DeleteIcon: FC<DeleteIconProps> = (props) => {
  return (
    <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
    </svg>
  );
}