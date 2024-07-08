const id = "react-snap-slider.mdx";
						const collection = "blog";
						const slug = "react-snap-slider";
						const body = "\r\n# Implement React Snap Slider\r\n\r\n## Create a custom hook\r\n\r\n```ts title=\"hooks/useSnapSlider.ts\"\r\nimport { useEffect, useState, RefObject } from 'react'\r\n\r\nconst useSlider = (slider: RefObject<HTMLDivElement>, count: number) => {\r\n  const [currentView, setCurrentView] = useState(0)\r\n  const [index, setIndex] = useState(0)\r\n\r\n  useEffect(() => {\r\n    if (slider.current !== null) {\r\n      slider.current.scrollTo({\r\n        left: currentView,\r\n        behavior: 'smooth'\r\n      })\r\n    }\r\n  }, [currentView, slider])\r\n\r\n  useEffect(() => {\r\n    if (slider.current !== null) {\r\n      const width = slider.current.clientWidth\r\n      const nextView = index * width\r\n      setCurrentView(nextView)\r\n    }\r\n  }, [index, slider])\r\n\r\n  return {\r\n    index,\r\n    setIndex\r\n  }\r\n}\r\n```\r\n\r\n## Create a component\r\n\r\n```tsx title=\"components/SnapSlider.tsx\"\r\nimport { useRef } from 'react'\r\nimport { useSlider } from '../hooks/useSnapSlider'\r\n\r\nconst Slider = () => {\r\n  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\r\n  const sliderRef = useRef<HTMLDivElement>(null)\r\n  const { index, setIndex } = useSlider(sliderRef, cards.length)\r\n\r\n  return (\r\n    <>\r\n      <div className=\"slider\">\r\n        {cards.map((card, i) => (\r\n          <div key={i} className=\"card\">\r\n            {card}\r\n          </div>\r\n        ))}\r\n      </div>\r\n      {cards.map((card, i)=>(\r\n        <button key={i} onClick={()=> setIndex(i)}>\r\n          {i + 1}\r\n        </button>\r\n      ))}\r\n    </>\r\n  )\r\n}\r\n```";
						const data = {title:"Como hacer un slider con snap-scrolling en React usando hooks",tags:["react","hooks","slider","snap-scrolling"]};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
