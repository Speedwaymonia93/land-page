import Image from "next/image";
import Button from "./Link";

interface ManagementProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

const ManagementSite = ({ backgroundImage, title, subtitle, description }: ManagementProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
            <p className="text-white">{description}</p>
        </div>
      </div>
     </div>
    </div>
  )
}

const Management = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <ManagementSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus congue. Maecenas orci turpis, iaculis sit amet ex ac, fermentum mollis lorem. Morbi eu magna quis purus vulputate aliquet eu et diam. Vestibulum id libero nisl. Proin pretium dapibus ante, sed tempus lorem ornare nec. In efficitur consequat consectetur."
        />
        <ManagementSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus congue. Maecenas orci turpis, iaculis sit amet ex ac, fermentum mollis lorem. Morbi eu magna quis purus vulputate aliquet eu et diam. Vestibulum id libero nisl. Proin pretium dapibus ante, sed tempus lorem ornare nec. In efficitur consequat consectetur."
        />
         <ManagementSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus congue. Maecenas orci turpis, iaculis sit amet ex ac, fermentum mollis lorem. Morbi eu magna quis purus vulputate aliquet eu et diam. Vestibulum id libero nisl. Proin pretium dapibus ante, sed tempus lorem ornare nec. In efficitur consequat consectetur."
        />
         <ManagementSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus congue. Maecenas orci turpis, iaculis sit amet ex ac, fermentum mollis lorem. Morbi eu magna quis purus vulputate aliquet eu et diam. Vestibulum id libero nisl. Proin pretium dapibus ante, sed tempus lorem ornare nec. In efficitur consequat consectetur."
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Poznaj nas</strong> dowiedz sie więcej na temat członków naszego zarządu
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor at elit luctus con.
            </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
         <Button 
            type="button" 
            title="Poznaj nas" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
    </section>
  )
}

export default Management