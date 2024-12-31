import { Container } from "@/components/ui/container"

const Header = () => {

    return <header className='border-b'>
        <Container variant="fullMobileConstrainedPadded">
            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex items-center">
                        <button
                            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                            type="button"
                            data-twe-collapse-init
                            data-twe-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span
                                className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div
                        className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
                        id="navbarSupportedContentY"
                        data-twe-collapse-item>
                        <ul
                            className="me-auto flex flex-col lg:flex-row"
                            data-twe-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#!"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >General purpose</a
                                >
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <a
                                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#!"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Projects</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>
    </header>
}

export default Header