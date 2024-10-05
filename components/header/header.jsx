import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../ui-kit";

export function Header() {
  return (
    <header className="flex items-center h-24 bg-white px-8 shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" size={"lg"} variant={"primary"}>
        Играть
      </UiButton>
      <button className="ml-auto flex gap-x-2 items-center text-teal-600 text-start">
        <Profile name="Paromovevg" rating="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
