'use client';

import { FShareButton } from "@climatempo/forest";

function PostSharedButton() {
  const shareButtonProps = {
    copyLinkHref: '#notice',
    label: 'Compartilhar',
    shareAnchors: [
      {
        iconSrc: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-256.png',
        label: 'Facebook',
        href: '#',
      },
      {
        iconSrc: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/23-whatsapp-2-256.png',
        label: 'Whatsapp',
        href: '#',
      },
      {
        iconSrc: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-256.png',
        label: 'Twitter',
        href: '#',
      }
    ]
  }
  return (
    <div className="h-fit">
      <FShareButton {...shareButtonProps} />
    </div>
  );
}

export default PostSharedButton;