import { Input } from "@/app/components/ui/input";
import Image from "next/image";

export const ContactUsForm = () => {
  return (
    <div className="bg-[url('/assets/images/Backgroundiconsbottom.svg')] bg-cover bg-[#127398] ">
      <div className="container 2xl:px-40 md:px-10 px-5  2xl:py-[70px] md:py-10 py-5">
        <div className="max-w-[480px] mx-auto text-white text-center">
          <h2 className="font-semibold 2xl:text-4xl md:text-2xl text-xl">
            CONTACT US
          </h2>
          <p className="font-normal wxl:text-3xl md:text-xl text-base ">
            We are here to answer any question you might have. We look forward
            to hearing from you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-14 mt-9">
          <div>
            <Image
              src="/assets/images/contactusForm.svg"
              alt="contactusForm"
              width={562}
              height={621}
            />
          </div>
          <div className="bg-primary rounded-[25px] min-w-full">
            <div className="max-w-[420px] mx-auto mt-16 mb-7 px-3">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-7">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
              </div>
              <Input type="text" className="mb-7" placeholder="Email" />
              <textarea
                name=""
                id=""
                rows={5}
                className="w-full rounded-[10px] mb-7"
                placeholder="Write a message"
              />
              <button className="bg-[#FFC730] rounded-xl w-full md:py-4  py-2 2xl:text-2xl md:text-xl text-lg font-bold text-white mb-7">
                Submit
              </button>
              <p className="text-white font-bold 2xl:text-2xl md:text-xl text-base text-center">
                Thanks for submitting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
