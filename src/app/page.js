import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 w-full transition-all duration-300 relative">
          <div className="flex flex-wrap w-full items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="./logoWondr.png"
                className="w-[64px] h-[32px] md:w-[100px] w-[32px] object-contain"
                alt="logo"
              />
            </a>
            <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center odd:divide-x odd:divide-[#7A7A7A] md:me-0 me-1">
                <button className="text-[16px] leading-[24px] font-demibold pe-2 text-[#141414]">
                  ID
                </button>
                <button className="text-[16px] leading-[24px] font-demibold ps-2 text-[#8c8c8c]">
                  EN
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="w-full h-auto overflow-hidden select-none">
          <div className="forstep9 animate-fadeIn">
            <div className="items-center justify-center px-4 mx-auto w-full sm:flex sm:gap-4 lg:gap-8 md:px-0 mt-[12px] md:mt-[148px]">
              <div className="mt-[10px] lg:mt-[30px]">
                <img
                  className="w-[218px] md:w-[364px] mx-auto md:ms-8 logo-animation"
                  src="./logoWondrBig.png"
                  alt="image"
                ></img>
              </div>
              <div className="tagline-animation font-demibold leading-[90px] md:leading-[0] md:leading-none tracking-[-0.0225em] text-[72px] md:text-[120px] text-[#000] text-center">
                {" "}
                Jadiin maumu
              </div>
            </div>
            <div className="px-4 md:px-4 lg:px-5 mx-auto mt-[24px] md:mt-[58px] mb-[36px] md:mb-[64px]">
              <div className="quill select-none text-center font-demibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-[#141414]">
                <div className="quill">
                  <div className="quill">
                    Banking app untuk transaksi, dapetin insight, dan rencanain
                    life goals-mu. Download sekarang!
                  </div>
                </div>
              </div>
              <div className="mt-[24px] md:mt-[96px] block md:flex justify-center text-center gap-[21px]">
                <a
                  href="https://apps.apple.com/id/app/wondr-by-bni/id6499518320?utm_source=Appstore&amp;#x26;utm_medium=Microsite&amp;#x26;utm_campaign=Header_Download_Button"
                  type="button"
                  className="text-[#0E0E0E] select-none hover:bg-[#050708]/90 hover:text-white border border-[#0E0E0E] font-demibold rounded-full leading-[20px] md:leading-[24px] text-[14px] md:text-[16px] w-[225px] md:w-[237px] h-[48px] justify-center text-center inline-flex items-center md:me-[16px] mb-4 md:mb-0"
                >
                  <svg
                    className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] me-2 -ms-1"
                    focusable="false"
                    data-prefix="fab"
                    dat-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  <span className="select-none">Download di App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=id.bni.wondr&amp;#x26;referrer=utm_source=Playstore&amp;#x26;utm_medium=Microsite&amp;#x26;utm_content=Header_Download_Button"
                  type="button"
                  className="text-[#0E0E0E] select-none hover:bg-[#050708]/90 hover:text-white border border-[#0E0E0E] font-demibold rounded-full leading-[20px] md:leading-[24px] text-[14px] md:text-[16px] w-[224px] md:w-[246px] h-[48px] justify-center text-center inline-flex items-center md:me-[16px] mb-4 md:mb-0"
                >
                  <svg
                    className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] me-2 -ms-1"
                    focusable="false"
                    data-prefix="fab"
                    dat-icon="play"
                    role="img"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.03094 0.861691L8.31428 8.00419L1.08511 15.2125C0.967136 15.0583 0.875354 14.8857 0.813444 14.7017C0.780935 14.4932 0.780935 14.281 0.813444 14.0725V1.80586C0.791777 1.47669 0.86761 1.14752 1.03011 0.861691M11.4518 4.88919L9.07428 7.24419L1.87761 0.166691C2.11094 0.0858581 2.36094 0.0633582 2.60511 0.101692C2.98844 0.206692 3.35428 0.368358 3.69011 0.579191L10.2034 4.18336C10.6268 4.41086 11.0393 4.65003 11.4518 4.88919ZM9.07511 8.77503L11.4409 11.0984L9.72594 12.0534L4.49344 14.9617C4.06011 15.2009 3.62511 15.4292 3.20178 15.69C3.02068 15.8029 2.81755 15.8758 2.606 15.9038C2.39445 15.9318 2.17936 15.9144 1.97511 15.8525L9.07511 8.77503ZM15.2084 8.00419C15.215 8.29567 15.1415 8.58338 14.9961 8.83607C14.8507 9.08875 14.6388 9.29677 14.3834 9.43752L12.4284 10.5225L9.85594 8.00419L12.4393 5.44252C13.1018 5.81169 13.7534 6.18086 14.4043 6.52836C14.664 6.67328 14.8773 6.88884 15.0195 7.15005C15.1616 7.41126 15.2277 7.70742 15.2084 8.00419Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="select-none">Download di Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className=" md:pt-[80px] bg-[#6350F8] relative">
          <div className="relative z-[5] overflow-x-hidden pb-0 sm:pb-32 md:pb-0">
            <div className="mt-[48px] md:mt-[80px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl px-[24px] md:px-[30px] mx-auto">
              <div
                className="flex items-center justify-between "
                id="headingPromo"
              >
                <h2 className="text-white text-[40px] leading-[48px] md:text-[80px] font-demibold md:leading-[88px] w-32 md:w-auto w-[60%] md:w-auto">
                  Makin seru pakai promo
                </h2>
                <a
                  href="/promotions"
                  className="font-demibold text-white text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] underline tracking-[-0.0225em] btn-all-promo "
                  id="btnAllPromo"
                >
                  Lihat semuanya
                </a>
              </div>
            </div>
            <div className="swiper swiper-initialized swiper-horizontal mySwiperPromo mt-[32px] md:mt-[80px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl mx-auto flex items-center justify-between px-[24px] md:px-[30px] swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "288.667px", marginRight: "16px" }}
                >
                  <a
                    className=""
                    href="https://bniexperience.bni.co.id/promo/detail/buy-1-get-2-tickets-bni-java-jazz-festival-fvcxro?utm_source=microsite&amp;utm_medium=home_promo&amp;utm_campaign=javajazzfestival&amp;utm_term=jjf&amp;utm_content=jjf"
                  >
                    <img
                      className="rounded-[24px] w-full h-full"
                      src="./jjfPoster.jpg"
                      alt=""
                    />
                    <div className="mt-[24px]">
                      <div className="quill mb-3 font-demibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-white line-clamp-4">
                        <div className="quill">
                          <p>
                            Buy 1 Get 2 Tiket BNI Java Jazz Festival dengan
                            wondr by BNI
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "288.667px", marginRight: "16px" }}
                >
                  <a
                    className=""
                    href="https://bniexperience.bni.co.id/promo/detail/buy-1-get-2-tickets-bni-java-jazz-festival-fvcxro?utm_source=microsite&amp;utm_medium=home_promo&amp;utm_campaign=javajazzfestival&amp;utm_term=jjf&amp;utm_content=jjf"
                  >
                    <img
                      className="rounded-[24px] w-full h-full"
                      src="./jjfPoster.jpg"
                      alt=""
                    />
                    <div className="mt-[24px]">
                      <div className="quill mb-3 font-demibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-white line-clamp-4">
                        <div className="quill">
                          <p>
                            Buy 1 Get 2 Tiket BNI Java Jazz Festival dengan
                            wondr by BNI
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "288.667px", marginRight: "16px" }}
                >
                  <a
                    className=""
                    href="https://bniexperience.bni.co.id/promo/detail/buy-1-get-2-tickets-bni-java-jazz-festival-fvcxro?utm_source=microsite&amp;utm_medium=home_promo&amp;utm_campaign=javajazzfestival&amp;utm_term=jjf&amp;utm_content=jjf"
                  >
                    <img
                      className="rounded-[24px] w-full h-full"
                      src="./jjfPoster.jpg"
                      alt=""
                    />
                    <div className="mt-[24px]">
                      <div className="quill mb-3 font-demibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-white line-clamp-4">
                        <div className="quill">
                          <p>
                            Buy 1 Get 2 Tiket BNI Java Jazz Festival dengan
                            wondr by BNI
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-button-prev swiper-button-disabled swiper-button-lock"></div>
              <div className="swiper-button-next swiper-button-lock swiper-button-disabled"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
