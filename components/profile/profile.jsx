import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div className={clsx(className, "flex gap-x-2 items-center text-teal-600")}>
      <Image src={avatarSrc} alt="avatar" width={48} height={48} />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}