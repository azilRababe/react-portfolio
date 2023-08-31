import React from 'react'
import { TagCloud, TagCloudOptions } from '@frank-mayer/react-tag-cloud'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const Tag_Cloud = () => (
  <TransformWrapper>
    <TransformComponent>
      <TagCloud
        className="text-red_ font-extrabold text-xl"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          keep: true,
          useContainerInlineStyles: true,
          useItemInlineStyles: true,
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          'Python',
          'React',
          'JavaScript',
          'CSS3',
          'HTML5',
          'Node.js',
          'Express',
          'MongoDB',
          'SQL',
          'Tailwind CSS',
          'Chakra-UI',
          'Material-UI',
          'Git',
          'GitHub',
          '3D animation',
          'MERN',
          'REST',
          'Express.js',
        ]}
      </TagCloud>
    </TransformComponent>
  </TransformWrapper>
)
export default Tag_Cloud
