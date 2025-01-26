import { Container } from '@/components/ui/container';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from 'utils/firebase';

const Footer = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async () => {
            onValue(ref(db, '/footer'), (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                setData(data);
            });
        };
        getData();
    }, []);
    console.log(data);
    return (
        <footer id="contact" className="bg-gray-800 text-gray-300 py-6 w-full">
            <Container>
                <div className="flex  justify-between">
                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                        <p>Email: {data?.email}</p>
                        <p>Phone: {data?.phone}</p>
                        <p>Address: {data?.address}</p>
                    </div>

                    {/* References Section */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold text-white mb-2">Message us via</h3>
                        {data?.links &&
                            Object.keys(data?.links).map((key) => (
                                <p>
                                    <a href={data?.links?.[key]} className="hover:text-white">
                                        {key}
                                    </a>
                                </p>
                            ))}
                    </div>
                </div>
            </Container>

            <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                <p>&copy; 2025 Dev. Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
