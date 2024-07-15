const TopOfPage = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="text-lg leading-4 text-white font-bold flex gap-2 items-center"
      onClick={handleClick}
    >
      Haut de la page
      <img src="/up.svg" className="h-4" />
    </button>
  );
};
export default TopOfPage;
