import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  [key: string]: unknown;
};

export default function Image({ src, alt, ...props }: ImageProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} />;
}
