import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white py-4 px-8 rounded-2xl shadow-md flex items-center justify-between",
      )}
    >
      <div className="flex items-center ">
        <div className="relative">
          <div className="absolute w-5 h-5 bg-white rounded-full shadow -top-1 -left-1 flex items-center justify-center">
            <CrossIcon />
          </div>
          <Profile className="w-44" />
        </div>
        <div className="mx-3 w-px h-6 bg-slate-200" />
        <div className="text-lg text-slate-900 font-semibold">01:08</div>
      </div>
      <div className="flex items-center">
        <div className="text-lg font-semibold text-orange-600">00:08</div>
        <div className="mx-3 w-px h-6 bg-slate-200" />
        <div className="relative">
          <div className="absolute w-5 h-5 bg-white rounded-full shadow -top-1 -left-1 flex items-center justify-center">
            <ZeroIcon />
          </div>
          <Profile className="w-44" />
        </div>
      </div>
    </div>
  );
}
