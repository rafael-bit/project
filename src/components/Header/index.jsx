import Image from 'next/image';
import Link from 'next/link';
import { Cheader, Button } from './style';
import Script from 'next/script';

export default function Header() {
    return (
        <Cheader id="header">
            <nav className='menu'>
                <div className='logo'>
                    <Image src="/icon-logo.png" width="225px" height="90px" />
                    <a href="#" className='btn-menu' id="btn-menu"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg></a>
                </div>
                <div className='enlaces' id="enlaces">
                    <Link href="#"><a>Quem Somos</a></Link>
                    <Link href="#"><a>Como Funciona</a></Link>
                    <Link href="#"><a>Blog</a></Link>
                    <Link href="#"><Button>Login</Button></Link>
                    <Link href="#"><Button>Cadastrar</Button></Link>
                </div>
            </nav>
            <Script src='/script/script.js'></Script>
        </Cheader>
    );
}
