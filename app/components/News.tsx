import React from 'react'
import Image from 'next/image'
import Button from './Link'
const News = () => {
  return (
     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
          {/*wyciagnac obrazek zeby nie byl tlme .*/}
          <div className="hero-map " /> 

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/newsimg.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Aktualności</h1>
              <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus congue. Maecenas orci turpis, iaculis sit amet ex ac, fermentum mollis lorem. Morbi eu magna quis purus vulputate aliquet eu et diam. Vestibulum id libero nisl. Proin pretium dapibus ante, sed tempus lorem ornare nec. In efficitur consequat consectetur.
          </p>


        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Dowiedz się więcej" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

     
    </section>
  )
}

export default News
