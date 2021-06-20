import React from 'react';
import Link from '../Link';

const Header = () =>{
    return (
        <header>
            <div className="row">
                <div className="col-lg-6">
                    Logo
                </div>
                <div className="col-lg-6">
                    <nav>
                        <ul className="">
                            <li>
                                <Link href="/" className="nav-list">
                                    CSS
                                </Link>
                            </li>
                            <li>
                                <Link href="/js" className="nav-list">
                                    Javascript/jQuery
                                </Link>
                            </li>
                            <li>
                                <Link href="/php" className="nav-list">
                                    PHP
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
