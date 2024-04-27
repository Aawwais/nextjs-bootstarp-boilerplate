import Image from "next/image";
import lock from "@/assets/images/lock.jpeg";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="px-5 py-10">
          <div className="mx-auto d-flex w-100 max-w-3xl flex-column align-items-center text-center">
            <div className="bg-light h-72 w-72 p-10 d-flex align-items-center justify-content-center rounded-circle">
              <Image
                src={lock}
                alt="lock"
                className="mx-auto rounded-circle mb-8 d-inline-block mt-8 h-56 w-56 flex-none object-cover"
              />
            </div>
            <h1 className="mb-4 text-4xl mt-10 text-primary font-bold md-text-6xl">
              Route is Protected .
            </h1>
            <p className="mx-auto mb-5 max-w-lg text-sm text-secondary sm-text-base md-mb-6 lg-mb-8">
              Commodo, consequat turpis placerat ultrices sapien, tortor
              tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
            </p>
            <Link
              href={"/"}
              className="btn btn-primary rounded-md px-8 py-2 text-center font-semibold mb-4"
            >
              Back to Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
