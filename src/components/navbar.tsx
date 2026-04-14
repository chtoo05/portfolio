import Link from "next/link";

export default function NavBar() {
    return (
        <header>
            <nav aria-label="Main Navigation">
                <ul>
                    <li>
                        <Link href="/#intro" aria-label="Go to home intro section">
                        Christabel Htoo</Link>
                    </li>
                    <li>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/#faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}