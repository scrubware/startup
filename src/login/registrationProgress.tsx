import * as React from "react";

type RegistrationProgressProps = { progress: 0 | 1 | 2 | 3 };

export function RegistrationProgress({progress} : RegistrationProgressProps) {

  const line: string = "border-1 border-lime-60 h-0 w-10";
  const empty: string = 'border-2 border-lime-60 rounded-full p-2.5'
  const filled: string = empty + " bg-lime-60"

  return (
      <div className="flex mt-4 items-center">
        <div className={progress >= 1 ? filled : empty}></div>
        <div className={line}></div>
        <div className={progress >= 2 ? filled : empty}></div>
        <div className={line}></div>
        <div className={progress >= 3 ? filled : empty}></div>
      </div>
  );
}