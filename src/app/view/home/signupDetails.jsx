import Image from "next/legacy/image";

export const SignUpDetails = () => {
  return (
    <div>
      <div className="container 2xl:px-[153px] xl:px-32  md:px-6  px-3  flex">
        <Image src="/assets/images/faces.svg" width={1593} height={259} />
      </div>
      <div className="bg-[url('/assets/images/Background.svg')] bg-cover bg-center md:p-[25px] rounded-none w-full">
        <div className="container 2xl:px-[153px] xl:px-32  md:px-6  px-3 flex gap-3  md:py-[70px] py-11 ">
          <div className="flex lg:flex-row flex-col gap-4 ">
            <div className="2xl:max-w-[450px] md:block hidden mx-auto  max-w-[380px] ">
              <Image
                src={"/assets/images/QR Code.svg"}
                width={450 * 2}
                height={540 * 2}
                className="h-full w-full min-h-full "
                alt="QR Code"
              />
            </div>
            <div className="bg-white rounded-[25px] flex-1 2xl:gap-[60px] md:gap-10 gap-5 md:flex-row flex-col flex items-center 2xl:p-10 p-5">
              <div className="relative  md:min-w-max min-w-max">
                {/* <div className="-left-[20%] sm:-left-[50%] absolute md:hidden flex sm:max-w-[80%] max-w-[60%] inset-y-0 my-auto ">
                  <Image
                    src={"/assets/images/QR Code.svg"}
                    width={450 * 2}
                    height={540 * 2}
                    className="h-full w-full min-h-full "
                    alt="QR Code"
                  />
                </div> */}
                <div className="2xl:min-w-[344px] md:min-w-[284px] md:max-w-none max-w-[260px] md:mx-0 ml-auto lg:-ml-[140px] ">
                  <Image
                    src={"/assets/images/Illistration.svg"}
                    width={344}
                    height={400}
                    className="w-full h-full min-h-[400px]"
                  />
                </div>
              </div>
              <p className="text-secondary md:font-bold md:text-left text-center font-medium 2xl:text-2xl md:text-xl text-lg">
                <span className="lg:text-[33px]">Sign up today </span> and
                manage your portfolio like a pro with personalized assistant and
                access to a trusted tech community of 1,200 members who
                connected $150M+ of total assets.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
