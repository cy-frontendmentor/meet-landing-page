import Image from 'next/image';

const page = () => {
  return (
    <div className='gird'>
      <div className=' '>
        <Image src='/assets/logo.svg' alt='logo' width={119} height={28} className=' mx-auto pt-12 mb-[54px]'></Image>
      </div>

      <div className=' flex justify-center mb-12  sm:hidden'>
        <Image
          src='/assets/tablet/image-hero.png'
          alt='banner'
          width={414}
          height={153}
          className=' min-w-[414px] '
        ></Image>
      </div>
      <div className='sm:flex sm:justify-center md:items-center md:mb-[194px] sm:mb-[164px]'>
        <div className='sm:grid sm:grid-cols-2 sm:gap-y-[72px] sm:min-w-[820px] md:grid-cols-3 md:min-w-[1504px] md:justify-items-center '>
          <Image
            src='/assets/desktop/image-hero-left.png'
            alt='banner'
            width={394}
            height={303}
            className='hidden sm:block '
          ></Image>
          <Image
            src='/assets/desktop/image-hero-right.png'
            alt='banner'
            width={394}
            height={303}
            className=' hidden sm:block '
          ></Image>
          <div className=' flex-col  text-center max-w-[457px] h-fit  sm:justify-items-center sm:col-span-2 sm:mx-auto mx-6 md:col-span-1 md:col-start-2 md:row-start-1 md:max-w-[540px] md:self-center'>
            <h2 className=' mb-6 sm:text-[48px] sm:leading-[48px] '>Group Chat for Everyone</h2>
            <p className=' mb-8'>
              Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
            </p>

            <div className=' mb-[148px] grid gap-4 sm:grid-cols-2 max-w-fit mx-auto sm:mb-0'>
              <button className=' bg-hippie-Blue px-10 py-4 rounded-[29px] font-black text-white-transparent justify-self-center hover:bg-[#71C0D4]'>
                Download<span className=' ml-1 text-columbia-Blue'>v1.3</span>
              </button>
              <button className=' bg-deep-Lavender px-10 py-4 rounded-[29px] font-black text-white-transparent justify-self-center hover:bg-[#B18BDD]'>
                What is it?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' mx-6 grid justify-items-center sm:mx-10 '>
        <div className='flex justify-center mb-16 '>
          <div className=' relative inline-block text-oslo-Grey font-black border px-[19px] py-[15px]  rounded-full border-[hsl(240,10,57,25%)] bg-white-transparent max-auto'>
            <span>01</span>
            <div className=' absolute -top-[42px] -left-1/4 border-b border-[hsl(240,10,57,25%)] h-[1px] w-[84px] rotate-90 '></div>
          </div>
        </div>
        <div className='grid grid-cols-2 w-full gap-x-[25px] gap-y-[24px] mb-16 sm:grid-cols-4 sm:gap-[11px] justify-items-stretch md:gap-[30px] md:max-w-[1110px] md:mb-20'>
          <Image
            src='/assets/desktop/image-woman-in-videocall.jpg'
            alt='banner'
            width={151}
            height={143}
            layout='responsive'
            className='rounded-lg '
          ></Image>
          <Image
            src='/assets/desktop/image-women-videochatting.jpg'
            alt='banner'
            width={151}
            height={143}
            layout='responsive'
            className='  rounded-lg'
          ></Image>
          <Image
            src='/assets/desktop/image-men-in-meeting.jpg'
            alt='banner'
            width={151}
            height={143}
            layout='responsive'
            className='rounded-lg  '
          ></Image>
          <Image
            src='/assets/desktop/image-man-texting.jpg'
            alt='banner'
            width={151}
            height={143}
            layout='responsive'
            className='rounded-lg '
          ></Image>
        </div>
        <div className='text-center mb-[176px]'>
          <p className='tab text-hippie-Blue mb-6 '>Built for modern use </p>
          <h3 className=' text-[32px] leading-9 text-ebony-Clay font-black mb-8 max-w-[445px] sm:text-[40px] sm:leading-[44px] sm:mx-auto'>
            Smarter meetings, all in one place
          </h3>
          <p className='sm:max-w-[573px]'>
            Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who
            can join with invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
      <div className=' bg-hippie-Blue  px-6 pt-[92px] pb-[72px] relative z-0 md:px-[165px] md:pt-[116px] md:pb-[104px] '>
        <div className='flex justify-center absolute -top-[28px] left-1/2 -translate-x-1/2 z-50'>
          <div className=' relative inline-block text-oslo-Grey font-black border px-[19px] py-[15px]  rounded-full border-[hsl(240,10,57,25%)] bg-white-transparent max-auto'>
            <span>02</span>
            <div className=' absolute -top-[42px] -left-1/4 border-b border-[hsl(240,10,57,25%)] h-[1px] w-[84px] rotate-90 '></div>
          </div>
        </div>
        <div className='z-50 grid  text-center justify-items-center lg:grid-cols-3 lg:text-left lg:content-center'>
          <h3 className='text-[32px] leading-9 text-white-transparent font-black mb-6 max-w-[457px] sm:text-[40px] sm:leading-[44px] lg:mb-0'>
            Experience more together
          </h3>
          <p className='text-white-transparent mb-8 max-w-[573px] lg:mb-0 md:self-center'>
            Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
          </p>
          <button className=' bg-deep-Lavender px-10 py-4 rounded-[29px] font-black text-white-transparent md:self-center hover:bg-[#B18BDD]'>
            Download<span className=' ml-1 text-light-violet'>v1.3</span>
          </button>
        </div>
        <Image
          src='/assets/mobile/image-footer.jpg'
          alt='banner'
          width={375}
          height={428}
          className=' absolute top-0 left-0 h-full w-full mix-blend-mode opacity-10 -z-10 sm:hidden'
        ></Image>
        <Image
          src='/assets/tablet/image-footer.jpg'
          alt='banner'
          width={768}
          height={428}
          className=' absolute top-0 left-0 h-full w-full mix-blend-mode opacity-10 -z-10 hidden sm:block md:hidden'
        ></Image>
        <Image
          src='/assets/desktop/image-footer.jpg'
          alt='banner'
          width={1440}
          height={308}
          className=' absolute top-0 left-0 h-full w-full mix-blend-mode opacity-10 -z-10 hidden md:block'
        ></Image>
      </div>
    </div>
  );
};

export default page;
