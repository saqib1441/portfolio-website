import Socials from "@/components/Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-secondary hover:text-primary text-[25px] transition-all p-2 bg-white rounded-full"
          />

          {/* Copy Right */}
          <p className="text-muted-foreground">
            Copyright &copy; 2024 | M Saqib Ali | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
