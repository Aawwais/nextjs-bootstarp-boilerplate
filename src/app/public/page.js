import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      about
      <Link href={"/admin/dashboard"} className="btn btn-primary">
        dashboard
      </Link>
    </div>
  );
};

export default page;
