import Image from 'next/image'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';
import HeaderIcons from './HeaderIcons';

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderIcons Icon={HomeIcon} title='Home' />
                <HeaderIcons Icon={LightningBoltIcon} title='Trending' />
                <HeaderIcons Icon={BadgeCheckIcon} title='Verified' />
                <HeaderIcons Icon={CollectionIcon} title='Collections' />
                <HeaderIcons Icon={SearchIcon} title='Search' />
                <HeaderIcons Icon={UserIcon} title='Account' />
            </div>

            <Image
                className='object-contain'
                src='https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg'
                width={200}
                height={100}
            />
        </header>
    );
}

export default Header;
