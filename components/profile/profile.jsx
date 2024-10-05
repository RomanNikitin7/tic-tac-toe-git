import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, avatar = avatarSrc, name, rating }) {
  return (
    <div className={clsx(className, "flex gap-x-2 items-center text-teal-600")}>
      <Image src={avatar} alt="avatar" width={48} height={48} />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
