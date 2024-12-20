import { Input } from "@/app/components/ui/input";

export const Hero = () => {
  return (
    <div className="container 2xl:px-[153px] xl:px-32  md:px-6  px-3 items-center  justify-center mt-[50px] mb-7">
      <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
        {/* First Column */}
        <div className="flex-1 max-w-[468px] flex items-center">
          <div>
            <h1 className="text-primary font-semibold text-3xl leading-[35px] xl:text-[64px]  md:text-5xl xl:leading-[75px] mb-4 text-center md:text-left">
              FAANG INVESTING COMMUNITY{" "}
            </h1>
            <p className="text-secondary font-medium xl:text-3xl md:text-xl text-lg text-center md:text-left">
              We help people working in BigTech make better financial decisions
              with the data and insights provided by AI
            </p>
          </div>
        </div>
        {/* Second Column */}
        <div className="bg-[url('/assets/images/Background.svg')] bg-cover bg-center md:p-[25px] p-4 md:rounded-[50px] rounded-[30px] max-w-[590px] w-full">
          <div className="max-w-[537px] min-w-full  bg-white md:rounded-[25px] rounded-[15px] text-center md:py-10 py-5 w-full flex justify-center">
            <div className="max-w-[420px] px-3 w-full">
              <h2 className="text-primary md:text-[28px] text-xl font-semibold md:mb-8 mb-4">
                Welcome Back
              </h2>
              <Input type="text" className="2xl:mb-10 md:mb-8 mb-6" />
              <Input type="password" className="mb-2" />
              <p className="text-primary font-medium 2xl:text-base text-sm text-end md:mb-[30px] mb-5">
                Forgot Password?
              </p>
              <button className="bg-primary rounded-xl w-full md:py-4  py-2 2xl:text-2xl md:text-xl text-lg font-bold text-white">
                Log In
              </button>
              <div className="flex md:flex-row flex-col md:mt-8 mt-4 max-w-max mx-auto 2xl:text-xl text-lg 2xl:gap-[30px] md:gap-5 gap-2 justify-between">
                <p className="text-secondary font-normal">
                  Don’t have an account?
                </p>
                <p className="text-secondary font-bold">Create One</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
