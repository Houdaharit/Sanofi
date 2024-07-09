import Logo from "../Logo";

const NavBar = () => {
  return (
    <nav className="h-[73px] leading-5 text-[15px] font-bold flex justify-between p-6">
      <section className="flex gap-6 items-center">
        <Logo color="black" />
        <div>Notre Entreprise</div>
        <div>Notre science</div>
        <div>Votre Santé</div>
        <div>Partenariat</div>
      </section>

      <section className="flex gap-6 items-center">
        <div>Média</div>
        <div>Investisseurs</div>
        <div>Carrières</div>
        <div>Partenariat Paris 2024</div>
        <img src="/SearchIcon.svg" alt="Search Icon" />

        <section>
          <button className="flex gap-2">
            <img src="/GlobeIcon.svg" alt="Globe Icon" />
            <span>Global</span>
          </button>
        </section>
      </section>
    </nav>
  );
};
export default NavBar;
