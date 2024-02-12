import React from 'react';

const FooterLink = ({ main, menus }) => {
  return (
    <div>
      <h4 className='text-[1.5rem]'>{main}</h4>
      <ul className='list-none'>
        {menus.map((menu) => (
          <li key={menu.id} className='mt-[1rem] text-[1rem]'>
            <a href={menu.link}>{menu.linkName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
