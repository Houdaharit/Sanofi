const NavBar = () => {
  return (
    <div className="h-[73px] leading-5 text-[15px] font-bold flex justify-between p-6">
      <section className="flex gap-6 items-center">
        <div className="text-4xl mr-3">Logo</div>
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
        <img src="/SearchIcon.svg" />
        <section className="flex cursor-pointer gap-3">
          <img src="/GlobeIcon.svg" />
          <label>Global</label>
        </section>
      </section>
    </div>
  );
};
export default NavBar;
