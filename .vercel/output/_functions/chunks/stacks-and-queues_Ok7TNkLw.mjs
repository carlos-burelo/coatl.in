import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Como funcionan las pilas y colas en la programación y como implementarlas en diferentes lenguajes de programación",
  "category": "explain",
  "createdAt": "2023-04-16T00:00:00.000Z",
  "updatedAt": "2023-04-16T00:00:00.000Z",
  "tags": ["pilas", "colas", "stacks", "queues", "data-structures", "programming"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introducción",
    "text": "Introducción"
  }, {
    "depth": 2,
    "slug": "pilas",
    "text": "Pilas"
  }, {
    "depth": 3,
    "slug": "operaciones",
    "text": "Operaciones"
  }, {
    "depth": 3,
    "slug": "implementacion-de-pilas-en-diferentes-lenguajes-de-programación",
    "text": "Implementacion de pilas en diferentes lenguajes de programación"
  }, {
    "depth": 3,
    "slug": "resumen",
    "text": "Resumen"
  }, {
    "depth": 2,
    "slug": "colas",
    "text": "Colas"
  }, {
    "depth": 3,
    "slug": "operaciones-1",
    "text": "Operaciones"
  }, {
    "depth": 3,
    "slug": "implementacion-de-pilas-en-diferentes-lenguajes-de-programación-1",
    "text": "Implementacion de pilas en diferentes lenguajes de programación"
  }, {
    "depth": 3,
    "slug": "resumen-1",
    "text": "Resumen"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introducción",
      children: "Introducción"
    }), "\n", createVNode(_components.p, {
      children: "Las pilas y colas son estructuras de datos que se utilizan en la programación para almacenar datos. Las pilas y colas son estructuras de datos lineales, lo que significa que solo pueden almacenar datos en una dirección. Las pilas y colas son estructuras de datos de tipo LIFO (último en entrar, primero en salir) y FIFO (primero en entrar, primero en salir), respectivamente."
    }), "\n", createVNode(_components.h2, {
      id: "pilas",
      children: "Pilas"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/media/stacks-and-queues-1.png",
        alt: "Stack introduction"
      })
    }), "\n", createVNode(_components.p, {
      children: "Las pilas son esa estructura de datos que usariamos en la vida real para apilar informacion y poder acceder a la ultima informacion que se agrego.\r\nSupongamos que tenemos una pila de libros, y queremos acceder al libro que esta en la parte superior de la pila, para eso lo que haremos es sacar todos los libros que estan encima de el, y asi podremos acceder al libro que queremos."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/media/stacks-and-queues-2.png",
        alt: "Stack example"
      })
    }), "\n", createVNode(_components.p, {
      children: "Si pensamos en la pila como una lista de nodos, asumiento que el ultimo nodo que se agrego se enlaza con el penultimo nodo, y asi sucesivamente, entonces el ultimo nodo que se agrego sera el primero en salir de la pila."
    }), "\n", createVNode(_components.h3, {
      id: "operaciones",
      children: "Operaciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Push"
        }), ": Agregar un elemento a la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pop"
        }), ": Eliminar un elemento de la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Peek"
        }), ": Obtener el elemento que esta en la parte superior de la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "isEmpty"
        }), ": Verificar si la pila esta vacia."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "implementacion-de-pilas-en-diferentes-lenguajes-de-programación",
      children: "Implementacion de pilas en diferentes lenguajes de programación"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Python"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "python",
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
              children: " StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __init__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".value "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".next "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
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
              children: " Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __init__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node.next "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " pop"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "            return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top.next"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node.value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "            return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top.value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " is_empty"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " not"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "            print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(node.value)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node.next"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    "
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __str__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " str"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".top)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "stack "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "stack."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
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
                color: "#ABB2BF"
              },
              children: "stack."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
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
                color: "#ABB2BF"
              },
              children: "stack."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
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
                color: "#56B6C2"
              },
              children: "print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(stack."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()) "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "# 3"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "JavaScript"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "javascript",
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
              children: " StackNode"
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
              children: "value"
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
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Stack"
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
              children: "  constructor"
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  push"
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
              children: "value"
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
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
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
              children: " StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  pop"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  peek"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  isEmpty"
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
                color: "#C678DD"
              },
              children: "    return"
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  print"
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
                color: "#C678DD"
              },
              children: "    let"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "node"
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
              children: "      console"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "      node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  toString"
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
                color: "#C678DD"
              },
              children: "    return"
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
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " stack"
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
              children: " Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "console"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()); "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 3"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Java"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "java",
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
              children: " StackNode"
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
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
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
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Stack"
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
                color: "#E5C07B"
              },
              children: "  StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "    StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
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
              children: " StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value);"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " pop"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "    StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  boolean"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " isEmpty"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "    StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "!="
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
              children: "      System"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "out"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "println"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  @"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Override"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " String"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " toString"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "toString"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "public"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Main"
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
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " static"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " main"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "String"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "[] "
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "args"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "    Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " stack"
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
              children: " Stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    System"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "out"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "println"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()); "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 3"
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
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "C++"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "cpp",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "#include"
            }), createVNode(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " <iostream>"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "#include"
            }), createVNode(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " <string>"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "using"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " namespace"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " std"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
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
              children: " StackNode"
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
                color: "#C678DD"
              },
              children: "  public:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    int"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    StackNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "next;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "    StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "};"
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
              children: " Stack"
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
                color: "#C678DD"
              },
              children: "  public:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "    StackNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "top;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "    Stack"
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
                color: "#E5C07B"
              },
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
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
                color: "#ABB2BF"
              },
              children: "      StackNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " StackNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value);"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "      node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " pop"
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
                color: "#C678DD"
              },
              children: "      if"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      }"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      StackNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
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
                color: "#C678DD"
              },
              children: "      if"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      }"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    bool"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " isEmpty"
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
                color: "#C678DD"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " print"
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
                color: "#ABB2BF"
              },
              children: "      StackNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "      while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "!="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
                color: "#ABB2BF"
              },
              children: "        cout "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " <<"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " endl;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      }"
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
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    string"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " toString"
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
                color: "#C678DD"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " to_string"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "top"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "};"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " main"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "() {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  Stack stack;"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "push"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  cout "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " stack"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "() "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " endl;"
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " // 3"
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
                color: "#D19A66"
              },
              children: " 0"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
      })]
    }), "\n", createVNode(_components.h3, {
      id: "resumen",
      children: "Resumen"
    }), "\n", createVNode(_components.p, {
      children: "Retomando lo que hemos visto hasta ahora, podemos resumir las pilas de la siguiente manera:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Las pilas son estructuras de datos que siguen el principio de LIFO (Last In First Out), es decir, el ultimo elemento que entra es el primero que sale."
      }), "\n", createVNode(_components.li, {
        children: "Las pilas son muy similares a las colas, pero en lugar de que el primer elemento que entra sea el primero en salir, el ultimo elemento que entra es el primero en salir."
      }), "\n", createVNode(_components.li, {
        children: ["Las pilas tienen dos operaciones principales: ", createVNode(_components.strong, {
          children: "push"
        }), " y ", createVNode(_components.strong, {
          children: "pop"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "push"
        }), ": Agrega un elemento al tope de la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "pop"
        }), ": Elimina el elemento que esta en el tope de la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "peek"
        }), ": Devuelve el elemento que esta en el tope de la pila."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "isEmpty"
        }), ": Devuelve true si la pila esta vacia, false en caso contrario."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "colas",
      children: "Colas"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/media/stacks-and-queues-3.png",
        alt: "Queue introduction"
      })
    }), "\n", createVNode(_components.p, {
      children: "Las colas son estructuras de datos que siguen el principio de FIFO (First In First Out), es decir, el primer elemento que entra es el primero que sale. Las colas son muy similares a las pilas, pero en lugar de que el ultimo elemento que entra sea el primero en salir, el primer elemento que entra es el primero en salir."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/media/stacks-and-queues-4.png",
        alt: "Queue example"
      })
    }), "\n", createVNode(_components.h3, {
      id: "operaciones-1",
      children: "Operaciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Enqueue"
        }), ": Agrega un elemento al final de la cola."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dequeue"
        }), ": Elimina el primer elemento de la cola."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Peek"
        }), ": Devuelve el primer elemento de la cola."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "isEmpty"
        }), ": Devuelve true si la cola esta vacia, false en caso contrario."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "implementacion-de-pilas-en-diferentes-lenguajes-de-programación-1",
      children: "Implementacion de pilas en diferentes lenguajes de programación"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Python"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "python",
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
              children: " QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __init__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".value "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".next "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
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
              children: " Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __init__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66",
                fontStyle: "italic"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " not"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "            self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last.next "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "            self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " dequeue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "            return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "        self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first.next"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "            self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".last "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node.value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        if"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "            return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first.value"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " is_empty"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "        node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " not"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " None"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ":"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "            print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(node.value)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "            node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node.next"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    def"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " __str__"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B",
                fontStyle: "italic"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "):"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "        return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " str"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "self"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ".first)"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "queue "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "queue."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
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
                color: "#ABB2BF"
              },
              children: "queue."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
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
                color: "#ABB2BF"
              },
              children: "queue."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
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
                color: "#56B6C2"
              },
              children: "print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(queue."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()) "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "# 1"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "JavaScript"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "javascript",
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
              children: " QueueNode"
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
              children: "value"
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
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Queue"
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
              children: "  constructor"
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  enqueue"
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
              children: "value"
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
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
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
              children: " QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  dequeue"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  peek"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  isEmpty"
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
                color: "#C678DD"
              },
              children: "    return"
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ==="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  print"
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
                color: "#C678DD"
              },
              children: "    let"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "node"
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
              children: "      console"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "      node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  toString"
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
                color: "#C678DD"
              },
              children: "    return"
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
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " queue"
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
              children: " Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "console"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "log"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()); "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 1"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Java"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "java",
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
              children: " QueueNode"
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
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
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
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Queue"
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
                color: "#E5C07B"
              },
              children: "  QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "    QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
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
              children: " QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value);"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " !="
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " dequeue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "    QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  boolean"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " isEmpty"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " print"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "    QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " ="
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "!="
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
              children: "      System"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "out"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "println"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      node "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  @"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "Override"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " String"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " toString"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()"
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
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "toString"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "public"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " Main"
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
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " static"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " main"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "String"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "[] "
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: "args"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ")"
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
                color: "#E5C07B"
              },
              children: "    Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: " queue"
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
              children: " Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "    System"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "out"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "println"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "()); "
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: "// 1"
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
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "C++"
      }), createVNode(_components.pre, {
        class: "astro-code one-dark-pro",
        style: {
          backgroundColor: "#282c34",
          color: "#abb2bf",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "cpp",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "#include"
            }), createVNode(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " <iostream>"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "#include"
            }), createVNode(_components.span, {
              style: {
                color: "#98C379"
              },
              children: " <string>"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "using"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " namespace"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " std"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "struct"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " QueueNode"
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
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "next;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
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
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " value;"
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
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "};"
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
              children: " Queue"
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
              children: "  QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "first;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "last;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "public:"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "  Queue"
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
                color: "#E5C07B"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75",
                fontStyle: "italic"
              },
              children: " value"
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
                color: "#ABB2BF"
              },
              children: "    QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " QueueNode"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "(value);"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " !="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
                color: "#E5C07B"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " node;"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " dequeue"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "    QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "      this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "last"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " peek"
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  bool"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " isEmpty"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " =="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "  void"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " print"
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
                color: "#ABB2BF"
              },
              children: "    QueueNode "
            }), createVNode(_components.span, {
              style: {
                color: "#56B6C2"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " (node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "!="
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: " NULL"
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
                color: "#ABB2BF"
              },
              children: "      cout "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: " <<"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " endl;"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "      node "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " node"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  string"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " toString"
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
                color: "#C678DD"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " to_string"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E06C75"
              },
              children: "first"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
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
              children: "};"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "int"
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " main"
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
                color: "#ABB2BF"
              },
              children: "  Queue queue "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: " Queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: "  queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "enqueue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#D19A66"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "  cout "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#E5C07B"
              },
              children: " queue"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#61AFEF"
              },
              children: "peek"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: "() "
            }), createVNode(_components.span, {
              style: {
                color: "#C678DD"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#ABB2BF"
              },
              children: " endl;"
            }), createVNode(_components.span, {
              style: {
                color: "#7F848E",
                fontStyle: "italic"
              },
              children: " // 1"
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
      })]
    }), "\n", createVNode(_components.h3, {
      id: "resumen-1",
      children: "Resumen"
    }), "\n", createVNode(_components.p, {
      children: ["Para finalizar, una cola es una estructura de datos que permite almacenar elementos en orden de llegada. Los elementos se pueden agregar y eliminar de la cola. La cola tiene dos operaciones básicas: ", createVNode(_components.code, {
        children: "enqueue"
      }), " y ", createVNode(_components.code, {
        children: "dequeue"
      }), ". El ", createVNode(_components.code, {
        children: "enqueue"
      }), " agrega un elemento al final de la cola. El ", createVNode(_components.code, {
        children: "dequeue"
      }), " elimina el elemento del frente de la cola. La cola tiene una operación adicional: ", createVNode(_components.code, {
        children: "peek"
      }), ". El ", createVNode(_components.code, {
        children: "peek"
      }), " devuelve el elemento del frente de la cola sin eliminarlo. La cola tiene una operación adicional: ", createVNode(_components.code, {
        children: "isEmpty"
      }), ". El ", createVNode(_components.code, {
        children: "isEmpty"
      }), " devuelve ", createVNode(_components.code, {
        children: "true"
      }), " si la cola está vacía y ", createVNode(_components.code, {
        children: "false"
      }), " si no lo está."]
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

const url = "src/content/blog/stacks-and-queues.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/stacks-and-queues.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/stacks-and-queues.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
