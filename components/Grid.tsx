import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid2'
import { gridItems2 } from '@/data'

const Grid = () => {
  return (
    <section>
      <BentoGrid className="w-full lg:py-20 max-w-7xl">
        {gridItems2.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid