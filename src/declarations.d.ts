declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>; 

  // When "Mode.TOC" is requested
  const toc: { level: string, content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.RAW" is requested
  const raw: string;

  const markdown: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from 'react'
  const ReactComponent: React.VFC;

  // Modify below per your usage
  export { attributes, toc, html, ReactComponent, markdown };
}

declare interface expJson {
  readonly company:string;
  readonly role:string;
  readonly startDate:string;
  readonly endDate:string;
  readonly description:string;
  readonly techStack:string;
}

declare interface projJson {
  readonly name:string;
  readonly startDate:string;
  readonly endDate?:string;
  readonly description:string;
  readonly techStack:string;
  readonly url?:string;
}
