import React from 'react';
import './block.css';

type BlockProps = {
  link: Link,
}

const Block = ({ link }: BlockProps) => {
  return (
    <div className="Block">
      <a href={link.url}>
        <img src={link.imageUrl} alt={link.title} width="100%" />
      </a>
    </div>
  );
}

export default Block;
