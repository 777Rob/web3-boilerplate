import { themes } from "data/themes";
import React from "react";
import { Options } from "assets/icons";
export default function ThemeChange() {
  let dropdownClassNames = "";
  let btnClassNames = "btn-ghost";
  let contentClassNames = "mt-8";
  return (
    <div
      title="Change Theme"
      className={`dropdown dropdown-end ${dropdownClassNames}`}
    >
      <div
        tabindex="0"
        className={`btn btn-sm gap-1 normal-case ${btnClassNames}`}
      >
        <Options />
      </div>
      <div
        className={`dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl ${contentClassNames}`}
      >
        <div className="grid grid-cols-1 gap-3 p-3" tabindex="0">
          {themes.map((theme) => (
            <div
              className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"
              data-set-theme={theme.id}
              data-act-className="outline"
            >
              <div
                data-theme={theme.id}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                    <div className="flex-grow text-sm font-bold">
                      {theme.id}
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                      <div className="bg-primary w-2 rounded" />
                      <div className="bg-secondary w-2 rounded" />
                      <div className="bg-accent w-2 rounded" />
                      <div className="bg-neutral w-2 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
