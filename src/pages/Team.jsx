import { Container } from '@/components/ui/container';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from 'utils/firebase';

const Team = () => {
    const [team, setTeam] = useState();
    useEffect(() => {
        const fetchMembers = async () => {
            onValue(ref(db, '/members'), (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                setTeam(data);
            });
        };
        fetchMembers();
    }, []);
    console.log(team);
    return (
        <div id="team" className="bg-gray-700 w-full p-6">
            <Container variant="fullMobileConstrainedPadded">
                <div className="bg-white p-4 rounded-md">
                    <h2
                        className="text-center text-5xl text-gray-800 uppercase font-bold mb-8 p-8"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                        }}
                    >
                        Meet the Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-6">
                        {team?.map((member, index) => (
                            <div key={index} className={`p-4 rounded-lg shadow-lg flex flex-col items-center ${member.bgColor}`}>
                                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-white" />
                                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                                <p className="text-white text-sm mt-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;
