import OurMissionImg from 'assets/our_mission.jpg';
const Mission = () => {
    return (
        <div className="w-full bg-gray-300 p-4">
            <div className="flex flex-col justify-evenly md:flex-row p-4">
                <div className="p-8">
                    <h3 className="text-6xl font-bold text-gray-800 m-4 mb-8">OUR MISSION</h3>
                    <p className="shadow-md p-8 rounded-lg m-2 my-8 bg-gray-50 text-2xl">Bring together talented individuals with shared ambitions</p>
                    <p className="shadow-md p-8 rounded-lg m-2 my-8 bg-gray-50 text-2xl">Provide an environment for hands-on project development</p>
                    <p className="shadow-md p-8 rounded-lg m-2 my-8 bg-gray-50 text-2xl">Transform innovative ideas into tangible solutions</p>
                </div>
                <div className="bg-white  rounded-2xl w-[400px]">
                    <img className="  border-2 overflow-hidden rounded-2xl" src={OurMissionImg} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Mission;
