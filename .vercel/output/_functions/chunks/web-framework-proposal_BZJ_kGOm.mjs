import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Propuesta de framework para la creación de interfaces web",
  "category": "development",
  "createdAt": "2023-07-20T00:00:00.000Z",
  "updatedAt": "2023-07-20T00:00:00.000Z",
  "tags": ["svelte", "framework", "web", "propuesta"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "motivación",
    "text": "Motivación"
  }, {
    "depth": 2,
    "slug": "propuesta-1-template",
    "text": "Propuesta 1: Template"
  }, {
    "depth": 3,
    "slug": "bucles-o-iteradores",
    "text": "Bucles o iteradores"
  }, {
    "depth": 3,
    "slug": "condicionales",
    "text": "Condicionales"
  }, {
    "depth": 2,
    "slug": "propuesta-2-props",
    "text": "Propuesta 2: Props"
  }, {
    "depth": 3,
    "slug": "propiedades-indeciso",
    "text": "Propiedades (indeciso 🤔)"
  }, {
    "depth": 3,
    "slug": "continuara",
    "text": "Continuara…"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "motivación",
      children: "Motivación"
    }), "\n", createVNode(_components.p, {
      children: "Durante el tiempo que he estado trabajando con el framework Svelte, he sentido que es el framework por excelencia para la creación de interfaces. Por ello, he decidido implementar algunas propuestas que me han resultado muy interesantes ya que si bien el framework trata de mantenerse lo mas cercano a la plataforma y a los estándares de la web, se han tomado algunas decisiones que me han resultado algo extrañas, es por eso que me puse a pensar en algunas soluciones que pueden ser útiles para la implementación de interfaces."
    }), "\n", createVNode(_components.h2, {
      id: "propuesta-1-template",
      children: "Propuesta 1: Template"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#bucles-o-iteradores",
          children: "Bucles o iteradores"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#props",
          children: "Props"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Con esta parte es con la que he tenido más problemas a la hora de implementar interfaces, si bien no es una sintaxis muy complicada, es una parte que me ha resultado muy extraña y que me ha hecho pensar en otras soluciones que probablemente sean más útiles y reduzcan la cantidad de código que se necesita para realizar ciertas funciones."
    }), "\n", createVNode(_components.h3, {
      id: "bucles-o-iteradores",
      children: "Bucles o iteradores"
    }), "\n", createVNode(_components.p, {
      children: "Comenzamos por la primera propuesta para el template, que es la de iteradores, pero primero veamos como es que actualmente se usa en el framework."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "svelte",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  {#"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " list"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " as"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " item"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "item"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "  {/"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Como podemos ver en el ejemplo, el bucle es una estructura de control que itera sobre una lista de elementos, es decir, los va recorriendo y los va renderizando en el template, la característica que mas me ha generado ciertas dificultades es su sintaxis, si bien svelte trata de mantenerse lo mas cercano a los estándares , esto ha sido un paso atrás de lo que que esperaba y me ha hecho cuestionar si seria la forma correcta de implementarlo."
    }), "\n", createVNode(_components.p, {
      children: ["En base a esto he considerado que ", createVNode(_components.strong, {
        children: "React"
      }), " tiene mejor sintaxis para estas estructuras de control ya que utiliza los corchetes para permitir la ejecución de javascript dentro de ellos, lo que en da como beneficio poder usar la sintaxis nativa de javascript para generar un bucle, como en el ejemplo continuación."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  {"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "list"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "item"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " =>"
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
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "item"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "  ))"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["De esta forma se puede entender mucho mas fácil como se estructura el bucle ya que se utilizan directamente los métodos de los arreglos del propio lenguaje, como el ", createVNode(_components.code, {
        children: ".map(){:js}"
      }), ", para iterar sobre la lista de elementos."]
    }), "\n", createVNode(_components.p, {
      children: ["Si bien esta sintaxis nos podría solucionar esa pequeña inconsistencia en la sintaxis de svelte, aun es muy pronto para que podamos decir que es la forma correcta, a pesar de que svelte si puede interpretar código javascript dentro de los ", createVNode(_components.code, {
        children: "{}{:js}"
      }), " como si de ", createVNode(_components.em, {
        children: "JSX"
      }), " se tratara, por eso pasamos a la siguiente propuesta que considero un poco mas acertada para el entorno de svelte."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " *ngFor"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let item of list\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">{item}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Reconociendo a un viejo conocido, algunos tal vez lo odien otros tal vez lo amen y alguno que otro le es indiferente, no hablamos de otro mas que el conocido ", createVNode(_components.strong, {
        children: "Angular"
      }), ", pero se preguntaran, ¿Porque?.\r\nLa respuesta es algo subjetiva, asi que permitan me explicarlo mejor."]
    }), "\n", createVNode(_components.p, {
      children: ["Svelte es un framework que busca generar interfaces web de la forma mas simple posible, reduciendo el ", createVNode(_components.em, {
        children: "boilerplate"
      }), " que se tiene con otros frameworks y utilizar la sintaxis de javascript hasta donde sea posible, pero tiene tiene algunas condiciones en las que se apoya mas del template y las etiquetas html y es aquí donde entra mi propuesta."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [for]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let item of list\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">{item}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Basándome en la propuesta de Angular que utiliza el template para generar estructuras de control y en las directivas que permiten realizar estas estructuras, propuse crear una directiva que use los corchetes ", createVNode(_components.code, {
        children: "[some_directive]{:js}"
      }), " como sintaxis ideal para las estructuras de control de svelte y que permita reducir el código de esta forma:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Iteración simple sobre una lista de numeros -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [for]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let number of numbers\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Numero #{number}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
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
            children: "<!-- Iteración sobre una lista de objetos -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [for]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let item of items\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">{item.name}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
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
            children: "<!-- Ó también usando destructuracion -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [for]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let { name } of items\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">{name}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
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
            children: "<!-- Obteniendo el indice del elemento... -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [for]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"let item of items, index\""
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">{index}. {item}</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
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
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Con esta propuesta busco delegar el proceso de renderizando a el propio template conservando la reactividad de las variables de svelte utilizando el atributo ", createVNode(_components.code, {
        children: "[for]"
      }), " sobre la etiqueta que se busca iterar manteniendo un comportamiento reactivo similar a como se utiliza el atributo ", createVNode(_components.code, {
        children: "bind"
      }), " del propio svelte.\r\nLa sintaxis de la iteración esta basada en la estructura ", createVNode(_components.code, {
        children: "for (let item of items){...}{:js}"
      }), " de javascript lo cual lo hace mas sencillo de implementar y mas fácil de entender."]
    }), "\n", createVNode(_components.h3, {
      id: "condicionales",
      children: "Condicionales"
    }), "\n", createVNode(_components.p, {
      children: ["De igual forma que con la propuesta de los bucles, svelte también tiene una sintaxis para condicionales, pero esta sintaxis sigue el mismo patrón que la de los bucles, es decir, se utiliza el corchete ", createVNode(_components.code, {
        children: "[if]"
      }), " y una pseudo propiedad ", createVNode(_components.code, {
        children: "else{:js}"
      }), " para definir una condición, pero en vez de una lista de elementos, se utiliza una expresión de javascript, por lo que se puede utilizar cualquier expresión de javascript, como en el ejemplo siguiente:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Condicional simple -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [if]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"isVisible\""
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Esta visible</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
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
            children: "</"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Condicional con else -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " [if]"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "\"isVisible; else loading\""
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Esta visible</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
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
            children: "</"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  Esta es la sección que se muestra "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  cuando la condición es falsa.` "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "-->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " #loading"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Cargando...</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
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
            children: "</"
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
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Esta propuesta busca al igual que la anterior, preservar la reactividad de los componentes haciendo que las evaluación de las variables (al menos las mas simples) se interpreten directamente en el template."
    }), "\n", createVNode(_components.p, {
      children: ["El atributo ", createVNode(_components.code, {
        children: "[if]"
      }), " le indica a la etiqueta si esta se debe mostrar o no y en condicionales con un else se define el componente que hace la función de ", createVNode(_components.em, {
        children: "fallback"
      }), " con un identificador que se puede utilizar en el template usando el símbolo ", createVNode(_components.code, {
        children: "#"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "propuesta-2-props",
      children: "Propuesta 2: Props"
    }), "\n", createVNode(_components.h3, {
      id: "propiedades-indeciso",
      children: "Propiedades (indeciso 🤔)"
    }), "\n", createVNode(_components.p, {
      children: "Otros de los conceptos raros de svelte son las props, que son las propiedades que se le pasan a un componente, y que se utilizan para definir el comportamiento del componente, pero en este framework el concepto se ve invertido, ya que en lugar de definir las variables que estaremos recibiendo en el componente, se definen las variables que son expuestas al componente padre."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "svelte",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Componente padre -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "Counter"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Componente hijo -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "script"
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
            children: "  export"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " let"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " value"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
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
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Mi propuesta es que las propiedades que se reciban en le componente hijo puedan provenir de una variable global que puede tener cualquier nombre aunque bien puede ser llamada ", createVNode(_components.code, {
        children: "$props{:js}"
      }), ".\r\nDe esta manera se puede entender el concepto de que las props son algo que se recibe y no algo que se expone a los componentes padre."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "svelte",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Componente padre -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
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
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "Counter"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
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
      "data-language": "svelte",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "<!-- Componente hijo -->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "script"
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
            children: "  let"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "value"
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
              color: "#ABB2BF"
            },
            children: " $"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "props"
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
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Utilizando esta nomenclatura se puede entender de forma mas sencilla que nos referimos a una variable que es reactiva por defecto, y que se actualiza cuando se le pasa una nueva propiedad o pueda ocurrir algún cambio en el componente padre que desencadene un cambio en la variable."
    }), "\n", createVNode(_components.p, {
      children: ["La idea de utilizar ", createVNode(_components.code, {
        children: "$props{:js}"
      }), " como un alternativa a los ", createVNode(_components.code, {
        children: "export{:js}"
      }), " de variables es que sea más fácil de entender y que sea más fácil de mantener. Por ejemplo, las variables que definen el comportamiento del componente son las props, pero estas son fácilmente confundibles con las variables del propio componente, por lo que hacer una ", createVNode(_components.em, {
        children: "destructuración"
      }), " de las props es más fácil de entender, ademas de que implementar una variable “global” dentro de un componente no es tan complicado considerando que la sintaxis de svelte ya hace cosas similares con las variables reactivas usando el símbolo ", createVNode(_components.code, {
        children: "${:js}"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "continuara",
      children: "Continuara…"
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

const url = "src/content/blog/web-framework-proposal.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/web-framework-proposal.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/web-framework-proposal.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
