import React from 'react';
import style from "@/app/modules/toast.module.css";

interface Props {
  message: string
  show: boolean
}

const Toast: React.FC<Props> = ({ message, show }) => {
  return (
    <div className={`${style.toast} ${show && style.show}`}>
      {message}
    </div>
  );
}

export default Toast;
