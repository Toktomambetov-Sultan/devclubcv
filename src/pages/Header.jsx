import { Container } from '@/components/ui/container';
import TextLogo from 'assets/TextLogo.png';

const Header = () => {
    return (
        <header className="w-full bg-gray-800 bg-opacity-80 shadow p-2 sticky top-0 z-10">
            <Container variant="fullMobileConstrainedPadded" className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    <img src={TextLogo} />
                </h1>
                <nav className="space-x-9 text-end">
                    <a href="#home" className="text-gray-300 hover:text-white no-underline text-xl">
                        Home
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white no-underline text-xl">
                        Projects
                    </a>
                    <a href="#stack" className="text-gray-300 hover:text-white no-underline text-xl">
                        Technology Stack
                    </a>
                    <a href="#contact" className="text-gray-300 no-underline hover:text-white text-xl">
                        Contact
                    </a>
                    <a href="#team" className="text-gray-300 no-underline hover:text-white text-xl">
                        Team
                    </a>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
