import { toast } from "sonner";
import { X, Warning, CheckCircle, Megaphone } from "@phosphor-icons/react";

export type ToastType = "notification" | "error" | "success";
export interface BaseToastProps {
  desc?: string;
  image?: string;
  message: string;
  type?: ToastType;
  t: string | number;
}

const showToast = ({
  desc,
  image,
  message,
  type = "success",
}: {
  desc?: string;
  image?: string;
  message: string;
  type: ToastType;
}) => {
  const BaseToast = ({
    type = "success",
    message,
    image,
    desc,
    t,
  }: BaseToastProps) => {
    return (
      <div className="app-toast" data-type={type}>
        <div className="app-toast__icon">
          {image ? (
            <img src={image || "/images/avatars/abstract-3.svg"} alt="" />
          ) : type === "error" ? (
            <Warning size={30} weight="fill" />
          ) : type === "notification" ? (
            <Megaphone mirrored size={30} weight="fill" />
          ) : (
            <CheckCircle size={30} weight="fill" />
          )}
        </div>

        <div className="app-toast__content">
          <p className="main">{message}</p>
          {desc && <p className="sub">{desc}</p>}
        </div>

        <button
          className="app-toast__close-btn"
          onClick={() => {
            console.log("close");
            toast.dismiss(t);
          }}
        >
          <X size={16} weight="bold" />
        </button>
      </div>
    );
  };

  toast.custom((t) => (
    <BaseToast message={message} image={image} desc={desc} type={type} t={t} />
  ));
};

export default showToast;
