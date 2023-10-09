'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Avatar, Dropdown, Navbar as NavBarFlowbite } from 'flowbite-react';
import avatar from '@public/avatar.png';
import trelloLogo from '@public/Trello-logo-blue.svg.png';

const Navbar = () => {
  return (
    <NavBarFlowbite fluid>
      <Link href='/'>
        <Image alt='trelloLogo' src={trelloLogo} width={100} height={100} />
      </Link>
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt='User settings' img={avatar.src} rounded />}
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <>Dashboard</>
          <>Settings</>
          <>Earnings</>
          <Dropdown.Divider />
          <>Sign out</>
        </Dropdown>
        <NavBarFlowbite.Toggle />
      </div>
      <NavBarFlowbite.Collapse>
        <Link href='#'>Home</Link>
      </NavBarFlowbite.Collapse>
    </NavBarFlowbite>
  );
};

export default Navbar;
