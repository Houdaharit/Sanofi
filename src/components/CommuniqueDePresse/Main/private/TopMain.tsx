const TopMain = () =>
    {
        return (
            <div className="flex flex-col gap-6 xl:ml-32 xl:mr-32 lg:ml-9 lg:mr-9 ml-4 mr-4">
                <h2 className="font-bold text-4xl leading-[72px] mt-8">Communiqués de presse</h2>
                <div className="mb-8">
                <button className="bg-purple-900 text-white p-4 rounded-md text-sm">Recevoir des alertes email</button>
                </div>
            </div>
        );
    }
    export default TopMain;