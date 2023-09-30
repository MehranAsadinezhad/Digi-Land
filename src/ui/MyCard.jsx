import React from "react";

export default function MyCard() {
  return (
    <div class="group origin-bottom-right -rotate-12 skew-x-0 duration-500 hover:-translate-x-6 hover:translate-y-12 hover:-rotate-0  hover:-skew-x-12">
      <div class="group-hover:duration-400 before:content[''] relative flex h-36 w-64 flex-col items-center justify-center gap-1 rounded-2xl bg-zinc-800 text-gray-50 duration-500  before:absolute  before:right-3 before:top-0  before:-z-10 before:h-32 before:w-64 before:-skew-x-12 before:rounded-2xl before:bg-neutral-700 before:duration-500 group-hover:duration-500 group-hover:before:-right-3 group-hover:before:skew-x-12">
        <span class="text-2xl font-bold">Mehran Asadi Nezhad</span>
        <p class="font-thin text-primary">- Frontend Developer -</p>
      </div>
    </div>
  );
}
