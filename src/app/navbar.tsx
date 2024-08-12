import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center mt-3">
      <Link className="text-blue-800 hover:underline" href={"/"}>
        First Way
      </Link>
      <Link className="text-blue-800 hover:underline" href={"/second"}>
        Second Way
      </Link>
      <Link className="text-blue-800 hover:underline" href={"/third"}>
        Third Way
      </Link>
    </div>
  );
};

export default Navbar;
