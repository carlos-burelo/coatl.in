import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Diseñando un lenguaje de programación enfocado en la experiencia de desarrollo",
  "category": "Idea",
  "createdAt": "2023-01-16T00:00:00.000Z",
  "updatedAt": "2023-01-16T00:00:00.000Z",
  "tags": ["lenguaje", "programación", "diseño", "experiencia", "desarrollo"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "riot-language-specification",
    "text": "Riot Language specification"
  }, {
    "depth": 2,
    "slug": "data-types",
    "text": "Data types"
  }, {
    "depth": 2,
    "slug": "variables",
    "text": "Variables"
  }, {
    "depth": 2,
    "slug": "constants",
    "text": "Constants"
  }, {
    "depth": 2,
    "slug": "tuple",
    "text": "Tuple"
  }, {
    "depth": 2,
    "slug": "objects",
    "text": "Objects"
  }, {
    "depth": 2,
    "slug": "lists",
    "text": "Lists"
  }, {
    "depth": 2,
    "slug": "functions",
    "text": "Functions"
  }, {
    "depth": 2,
    "slug": "arrow-functions",
    "text": "Arrow Functions"
  }, {
    "depth": 2,
    "slug": "classes",
    "text": "Classes"
  }, {
    "depth": 3,
    "slug": "basic-class",
    "text": "Basic class"
  }, {
    "depth": 3,
    "slug": "static-class",
    "text": "Static class"
  }, {
    "depth": 3,
    "slug": "no-constructable-class",
    "text": "No constructable class"
  }, {
    "depth": 2,
    "slug": "inheritance",
    "text": "Inheritance"
  }, {
    "depth": 2,
    "slug": "interfaces",
    "text": "Interfaces"
  }, {
    "depth": 2,
    "slug": "generics",
    "text": "Generics"
  }, {
    "depth": 1,
    "slug": "in-progress",
    "text": "in progress…"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "riot-language-specification",
      children: "Riot Language specification"
    }), "\n", createVNode(_components.h2, {
      id: "data-types",
      children: "Data types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Type"
          }), createVNode(_components.th, {
            children: "Definition"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Numbers"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "int"
            }), " , ", createVNode(_components.code, {
              children: "float"
            }), " , ", createVNode(_components.code, {
              children: "bigint"
            }), ", ", createVNode(_components.code, {
              children: "i8"
            }), ", ", createVNode(_components.code, {
              children: "i16"
            }), ", ", createVNode(_components.code, {
              children: "i32"
            }), ", ", createVNode(_components.code, {
              children: "i64"
            }), ", ", createVNode(_components.code, {
              children: "i128"
            }), ", ", createVNode(_components.code, {
              children: "u8"
            }), ", ", createVNode(_components.code, {
              children: "u16"
            }), ", ", createVNode(_components.code, {
              children: "u32"
            }), ", ", createVNode(_components.code, {
              children: "u64"
            }), ", ", createVNode(_components.code, {
              children: "u128"
            }), ", ", createVNode(_components.code, {
              children: "f64"
            }), ", ", createVNode(_components.code, {
              children: "f128"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Strings"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "str"
            }), ", ", createVNode(_components.code, {
              children: "char"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Booleans"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "bool"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Objects"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "list"
            }), ", ", createVNode(_components.code, {
              children: "object"
            }), ", ", createVNode(_components.code, {
              children: "func"
            }), ", ", createVNode(_components.code, {
              children: "tuple"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "Empty"
            })
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              children: "void"
            }), ", ", createVNode(_components.code, {
              children: "unknown"
            }), ", ", createVNode(_components.code, {
              children: "none"
            }), ", ", createVNode(_components.code, {
              children: "undefined"
            }), ", ", createVNode(_components.code, {
              children: "any"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "variables",
      children: "Variables"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal variable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num1"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// multiple variables"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "num2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// multiple variables with value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num2"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "num3"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// multiple variables with diferent type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "say"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"string\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "constants",
      children: "Constants"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal constant"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " num1"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// multiple constants (initial value is required)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " num1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 1"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "num2"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// multiple constants with diferent type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " num3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "say"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"string\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tuple",
      children: "Tuple"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal tuple"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " tuple"
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
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// tuple with type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " tuple"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "tuple"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
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
              color: "#98C379"
            },
            children: "\"Hello\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// tuple with other type declaration (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " otherTuple"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "int"
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
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
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
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "objects",
      children: "Objects"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal object"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// object with type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "object"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// object with other type declaration (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " otherObj"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "Person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// object with mixed types"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "object"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
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
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ->"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// object with mixed types (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": () -> "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " "
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " otherObj"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "Person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
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
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ->"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "lists",
      children: "Lists"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal list"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " list"
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
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with type"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " listOfStrings"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"World\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with other type declaration (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " otherListOfStrings"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "srt"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[] "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"World\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with mixed types"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " mixedList"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "any"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
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
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with mixed types (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " otherMixedList"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "any"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "[] "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
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
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with multiple types"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " multipleTypesList"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "list"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "bool"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
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
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// list with multiple types (recomended)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " otherMultipleTypesList"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": ("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "int"
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
            children: "str"
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
            children: "bool"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")[] "
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: "="
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
              color: "#98C379"
            },
            children: "\"Hello\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "functions",
      children: "Functions"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "rust",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// function with parameters"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
              color: "#61AFEF"
            },
            children: "  print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// function with return"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// function with parameters and return"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\" years old\""
          })]
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
      id: "arrow-functions",
      children: "Arrow Functions"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal arrow function (single line)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// normal arrow function (multiple lines)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
              color: "#61AFEF"
            },
            children: "  print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"World\""
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// anonymous function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " pet"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  getName"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "str"
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
              color: "#ABB2BF"
            },
            children: "    return "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Dog\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// anonymous arrow function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "const person = {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  getAge"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": (): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// async/await is supported by default!!!"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// anonymous async function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " pet"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
            children: "  getName"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "str"
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
              color: "#ABB2BF"
            },
            children: "    await "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(1000)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    return \"Dog\""
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// anonymous async arrow function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
              color: "#61AFEF"
            },
            children: "  getAge"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": (): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    await "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sleep"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "(1000)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    return 20"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// method style"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
              color: "#61AFEF"
            },
            children: "  getAge"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " (): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 20"
          })]
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
      id: "classes",
      children: "Classes"
    }), "\n", createVNode(_components.h3, {
      id: "basic-class",
      children: "Basic class"
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // constructor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " age"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" years old\""
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// create object"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// with named parameters"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " person"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "20"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "static-class",
      children: "Static class"
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " StaticClass"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // static method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  static"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello\""
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
    }), "\n", createVNode(_components.h3, {
      id: "no-constructable-class",
      children: "No constructable class"
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " NoConstructableClass"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // private constructor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  public"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " NoConstructableClass"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'Hello World'"
          })]
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// create string of no constructable class"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " message"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " NoConstructableClass"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "message"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// Hello world"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "inheritance",
      children: "Inheritance"
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // constructor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " age"
          })]
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
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" years old\""
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// extend class Person"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Student"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // constructor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "school"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
              color: "#E5C07B",
              fontStyle: "italic"
            },
            children: "    super"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
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
              color: "#E5C07B"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "school"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " school"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" years old and you study in \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "school"
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
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// extends multiple classes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " StudentWithFriends"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " extends"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "Student"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // constructor"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "school"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
              color: "#E5C07B",
              fontStyle: "italic"
            },
            children: "    super"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Person"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
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
              color: "#E5C07B",
              fontStyle: "italic"
            },
            children: "    super"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "Student"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "school"
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
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" years old and you study in \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "school"
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
      id: "interfaces",
      children: "Interfaces"
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
            children: "interface"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  readonly"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " constructor"
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
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// implements interface"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Student"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " implements"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " Person"
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
            children: "  name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "  age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "  constructor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
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
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "int"
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
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "    this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " age"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// method"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "  sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " () {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "    print"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \", you are \""
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " this"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \" years old\""
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
      id: "generics",
      children: "Generics"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "rs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// generic function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "fn"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " \"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "name"
          })]
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// use generic function"
          })
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
              color: "#E5C07B"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// generic arrow function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "): "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "T"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " -> "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"Hello \""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " + "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "name"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// use generic arrow function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sayHello"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "str"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"John\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h1, {
      id: "in-progress",
      children: "in progress…"
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

const url = "src/content/blog/designing-a-programing-language.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/designing-a-programing-language.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/designing-a-programing-language.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
