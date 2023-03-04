import React from 'react';

function Tag({ tag, className }: { tag: string; className?: string }) {
  return <span className={className}>{tag}</span>;
}

export default Tag;
