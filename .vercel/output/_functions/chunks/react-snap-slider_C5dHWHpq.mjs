import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Como hacer un slider con snap-scrolling en React usando hooks",
  "category": "example",
  "createdAt": "2023-01-27T00:00:00.000Z",
  "updatedAt": "2023-01-27T00:00:00.000Z",
  "tags": ["react", "hooks", "slider", "snap-scrolling"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "implement-react-snap-slider",
    "text": "Implement React Snap Slider"
  }, {
    "depth": 2,
    "slug": "create-a-custom-hook",
    "text": "Create a custom hook"
  }, {
    "depth": 2,
    "slug": "create-a-component",
    "text": "Create a component"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "implement-react-snap-slider",
      children: "Implement React Snap Slider"
    }), "\n", createVNode(_components.h2, {
      id: "create-a-custom-hook",
      children: "Create a custom hook"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ts",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "useState"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "RefObject"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'react'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " useSlider"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "RefObject"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "HTMLDivElement"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">, "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "count"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "currentView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "setCurrentView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "setIndex"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "current"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " !=="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "      slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "current"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "scrollTo"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "        left"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "currentView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "        behavior"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'smooth'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }, ["
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "currentView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "])"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "current"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " !=="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "      const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " width"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "current"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "clientWidth"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "      const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " nextView"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " width"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "      setCurrentView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "nextView"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }, ["
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "slider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "])"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    index"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "    setIndex"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "create-a-component",
      children: "Create a component"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "tsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "useRef"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'react'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "useSlider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " '../hooks/useSnapSlider'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Slider"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " cards"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "6"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "7"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "9"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " sliderRef"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " useRef"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "HTMLDivElement"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "setIndex"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " useSlider"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "sliderRef"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "cards"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"slider\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "        {"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "cards"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "card"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"card\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "            {"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "card"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "          </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        ))"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "      {"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "cards"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "card"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66",
              fontStyle: "italic"
            },
            children: " onClick"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " setIndex"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "          {"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "button"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "      ))"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    </>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  )"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/react-snap-slider.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
