import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Conceptos básicos de javascript para principiantes y no tan principiantes",
  "category": "explain",
  "createdAt": "2022-04-21T00:00:00.000Z",
  "updatedAt": "2023-10-04T00:00:00.000Z",
  "tags": ["javascript", "conceptos", "básicos", "principiantes", "funciones", "objetos", "scope", "mutación", "callbacks", "promesas", "async/await"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introducción",
    "text": "Introducción"
  }, {
    "depth": 2,
    "slug": "características-del-lenguaje",
    "text": "Características del lenguaje"
  }, {
    "depth": 3,
    "slug": "scope",
    "text": "Scope 🟦"
  }, {
    "depth": 2,
    "slug": "mutación-️",
    "text": "Mutación ☢️"
  }, {
    "depth": 2,
    "slug": "funciones",
    "text": "Funciones 🐛➡🦋"
  }, {
    "depth": 3,
    "slug": "nombre-de-la-función",
    "text": "Nombre de la función"
  }, {
    "depth": 3,
    "slug": "parámetros",
    "text": "Parámetros"
  }, {
    "depth": 2,
    "slug": "callbacks-️",
    "text": "Callbacks ◀️"
  }, {
    "depth": 2,
    "slug": "promesas",
    "text": "Promesas 🤝"
  }, {
    "depth": 4,
    "slug": "thenjs",
    "text": ".then(){:js}"
  }, {
    "depth": 4,
    "slug": "catchjs",
    "text": ".catch(){:js}"
  }, {
    "depth": 2,
    "slug": "asyncawait",
    "text": "Async/Await 🕒"
  }, {
    "depth": 2,
    "slug": "notas-finales",
    "text": "Notas finales"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "Personalmente creo que es de vital importancia entender algunos conceptos clave de javascript, como por ejemplo, el scope, la mutación, las funciones y los objetos, etc.\r\nya que estos nos proveen de diversas características y funciones que nos permiten trabajar con el lenguaje de forma mas sencilla y eficiente, por eso me he dado a la tarea de agrupar algunas de estas características de javascript que lo hacen el lenguaje popular que es hoy, y tratare de simplificar lo mas posible el tema para que pueda ser entendido por los demás 😀."
    }), "\n", createVNode(_components.h2, {
      id: "características-del-lenguaje",
      children: "Características del lenguaje"
    }), "\n", createVNode(_components.p, {
      children: "Como cualquier otro lenguaje de programación, javascript esta dotado de diversas características y peculiaridades que son las que definen con que facilidad podremos trabajar al momento de crear nuestras aplicaciones, siendo uno de los lenguajes mas populares actualmente veamos que nos puede ofrecer."
    }), "\n", createVNode(_components.h3, {
      id: "scope",
      children: "Scope 🟦"
    }), "\n", createVNode(_components.p, {
      children: ["El ", createVNode(_components.strong, {
        children: "scope"
      }), " en palabras sencillas lo podemos entender como un ", createVNode(_components.em, {
        children: "ambiente"
      }), " o ", createVNode(_components.em, {
        children: "entorno"
      }), " en el que se encuentra una variable, una función, una clase, etc."]
    }), "\n", createVNode(_components.p, {
      children: "Dentro de este entorno cualquier declaración de variable o función que se haga sera accesible solo dentro del mismo."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'John'"
          })]
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
            children: " age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 23"
          })]
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
            children: " country"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 'US'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// Todas las declaraciones anteriores se encuentran dentro del"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// scope \"global\" por lo que podemos acceder a ellas desde cualquier lugar."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " getAge"
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
              color: "#E06C75"
            },
            children: " age"
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: " // 23"
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
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "age"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 18"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " isOlder"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " true"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // La constante \"isOlder\" solo esta disponible dentro del scope \"if\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // por lo que no podemos acceder a ella desde fuera del scope, por ejemplo."
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
              color: "#E06C75"
            },
            children: "isOlder"
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
            children: "// undefined"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "mutación-️",
      children: "Mutación ☢️"
    }), "\n", createVNode(_components.p, {
      children: ["La ", createVNode(_components.strong, {
        children: "mutación"
      }), " es otro concepto que nos ayuda a entender el ciclo de vida de las variables en javascript, es decir, cuando una variable es mutada, esta puede cambiar de valor y esto puede causar un comportamiento inesperado si no sabemos en que punto de nuestra aplicación hemos mutado su valor, por ejemplo:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " fruits"
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
              color: "#98C379"
            },
            children: "'apple'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'banana'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'orange'"
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " orange"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " fruits"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "pop"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// [\"orange\"]"
          })]
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
              color: "#E06C75"
            },
            children: "fruits"
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
            children: "// [\"apple\", \"banana\"]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Como podemos ver, al utilizar el método ", createVNode(_components.code, {
        children: ".pop(){:js}"
      }), " estamos obteniendo el ultimo valor de el arreglo ", createVNode(_components.code, {
        children: "fruits{:js}"
      }), ", pero a su vez este mismo ha perdido su ultimo valor, por lo que al momento de imprimir el valor de ", createVNode(_components.code, {
        children: "fruits{:js}"
      }), ", el elemento ", createVNode(_components.code, {
        children: "\"orange\"{:.str}"
      }), " ya no esta disponible."]
    }), "\n", createVNode(_components.p, {
      children: "En javascript tenemos métodos que mutan el valor de una variable, en este caso tomaremos de ejemplo los arreglos, como por ejemplo:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".push(){:js}"
        }), ": Agrega un elemento al final del arreglo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".pop(){:js}"
        }), ": Elimina el ultimo elemento del arreglo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".shift(){:js}"
        }), ": Elimina el primer elemento del arreglo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".unshift(){:js}"
        }), ": Agrega un elemento al inicio del arreglo"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Métodos que mutan el valor de un string…"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".concat(){:js}"
        }), ": Concatena un string con otro string"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".slice(){:js}"
        }), ": Extrae una porción del string"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".split(){:js}"
        }), ": Divide un string en un arreglo"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".substr(){:js}"
        }), ": Extrae una porción del string"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".substring(){:js}"
        }), ": Extrae una porción del string"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toLowerCase(){:js}"
        }), ": Convierte el string a minúsculas"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toUpperCase(){:js}"
        }), ": Convierte el string a mayúsculas"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Métodos que mutan el valor de un numero…"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toString(){:js}"
        }), ": Convierte el numero en un string"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toFixed(){:js}"
        }), ": Convierte el numero en un string con una cantidad de decimales"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toExponential(){:js}"
        }), ": Convierte el numero en un string con una cantidad de decimales"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".toPrecision(){:js}"
        }), ": Convierte el numero en un string con una cantidad de decimales"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Y métodos que mutan el valor de un objeto."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".assign(){:js}"
        }), ": Asigna un valor a una propiedad de un objeto"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".deleteProperty(){:js}"
        }), ": Elimina una propiedad de un objeto"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".defineProperty(){:js}"
        }), ": Define una propiedad de un objeto"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".freeze(){:js}"
        }), ": Congela un objeto"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".seal(){:js}"
        }), ": Se cierra un objeto"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".preventExtensions(){:js}"
        }), ": Evita que un objeto sea extensible"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".isFrozen(){:js}"
        }), ": Verifica si un objeto esta congelado"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".isSealed(){:js}"
        }), ": Verifica si un objeto esta cerrado"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: ".isExtensible(){:js}"
        }), ": Verifica si un objeto es extensible"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "funciones",
      children: "Funciones 🐛➡🦋"
    }), "\n", createVNode(_components.p, {
      children: "Una función la podemos entender como una serie de instrucciones agrupadas que puede ser invocada desde casi cualquier lugar, con la finalidad de separar en módulos el código y poder reutilizarlo en diferentes partes de nuestra aplicación, la cual cuenta con una serie de características que nos permiten realizar estas tareas."
    }), "\n", createVNode(_components.p, {
      children: "Si tenemos un bloque de código que realiza alguna operación, podemos crear una función que lo haga, y luego invocarla desde cualquier lugar sin tener que repetir el mismo código, por ejemplo:"
    }), "\n", createVNode(_components.pre, {
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
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " sumNumbers"
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
            children: "num1"
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
            children: "num2"
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
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num1"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " num2"
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "sumNumbers"
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
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "// Retorna 3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Aquí tenemos el ejemplo mas común de como crear una función en javascript, y como invocarla, pero debemos tener ciertos factores en cuenta a la hora de crear una función, por ejemplo:"
    }), "\n", createVNode(_components.h3, {
      id: "nombre-de-la-función",
      children: createVNode(_components.code, {
        children: "Nombre de la función"
      })
    }), "\n", createVNode(_components.p, {
      children: ["El nombre debe ser claro, corto y consistente usando la nomenclatura ", createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "camelCase"
        })
      }), " en ingles, ademas de representar el propósito de la función sin agregados extras.\r\nComúnmente de utilizan ciertos prefijos como ", createVNode(_components.code, {
        children: "get"
      }), " y ", createVNode(_components.code, {
        children: "set"
      }), " para indicar que la función es un ", createVNode(_components.em, {
        children: "getter"
      }), " o ", createVNode(_components.em, {
        children: "setter"
      }), " y sufijos como ", createVNode(_components.em, {
        children: "Handler"
      }), " para indicar que la función es un gestor de eventos."]
    }), "\n", createVNode(_components.p, {
      children: "Por ejemplo:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "sumNumbers{:.fn}"
        }), ": Suma dos números"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "getAge{:.fn}"
        }), ": Retorna la edad de una persona"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "setAge{:.fn}"
        }), ": Cambia la edad de una persona"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "onClickHandler{:.fn}"
        }), ": Maneja el evento click"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "parámetros",
      children: createVNode(_components.code, {
        children: "Parámetros"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cuando creamos una función, podemos definir una serie de parámetros que modificaran el comportamiento de la función en base al valor de estos."
    }), "\n", createVNode(_components.p, {
      children: "Al igual que con las funciones, los parámetros deben ser consistes para identificar el valor que representa y su uso en el código, pero a diferencia de el nombre en las funciones, estos solo deben especificar el uso en su nombre sin agregados innecesarios."
    }), "\n", createVNode(_components.h2, {
      id: "callbacks-️",
      children: "Callbacks ◀️"
    }), "\n", createVNode(_components.p, {
      children: ["Los ", createVNode(_components.strong, {
        children: "callbacks"
      }), " son otras de esas funcionalidades que vale la pena conocer, si bien su uso se ha reducido significativamente en los últimos años, este sigue presente en en lenguaje aunque de forma más sutil en los métodos de un arreglo o en ", createVNode(_components.code, {
        children: "polyfills{:.const}"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "De una manera muy sencilla, un callback no es más que una función que se ejecutará dentro de otra función una vez que la primera se termine de ejecutar, es decir, a una función le estaremos pasando otra una vez que la primera terminé."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " numbers"
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
            children: "]"
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
              color: "#E5C07B"
            },
            children: " doubles"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " numbers"
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
            children: "number"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " number"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " 2"
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
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // el callback es la función que recibe el map()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // en este caso es una función de tipo flecha"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Por ejemplo, la función ", createVNode(_components.code, {
        children: "map(){:js}"
      }), " es un método del ", createVNode(_components.code, {
        children: "Array.prototype{:js}"
      }), ", es decir, un método disponible en todos los arreglos, este recibe un una función que le indique que hacer una vez que la función ", createVNode(_components.code, {
        children: ".map(){:js}"
      }), " ha terminado de ejecutarse y está recibe un argumento que luego usa para hacer las transformaciones correspondientes."]
    }), "\n", createVNode(_components.h2, {
      id: "promesas",
      children: "Promesas 🤝"
    }), "\n", createVNode(_components.p, {
      children: ["Las Promesas las podemos considerar una evolución natural de los Callbacks, ya que un uso común de los Callbacks se encuentran enfocados a operaciones ", createVNode(_components.em, {
        children: "asíncronas"
      }), " ya que su sintaxis es más comprensible que la de los callbacks, por ejemplo:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'https://url/api'"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "then"
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
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "catch"
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
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " console"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "finally"
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
              color: "#E5C07B"
            },
            children: " console"
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
              color: "#98C379"
            },
            children: "'Promise completely'"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Una promesa cuenta con 3 partes, el ", createVNode(_components.code, {
        children: ".then(){:js}"
      }), ", ", createVNode(_components.code, {
        children: ".catch(){:js}"
      }), ", y ", createVNode(_components.code, {
        children: ".finally(){:js}"
      }), " que son métodos que caracterizan a una promesa aunque por el momento solo hablaremos de then y catch que son los más comunes."]
    }), "\n", createVNode(_components.h4, {
      id: "thenjs",
      children: createVNode(_components.code, {
        children: ".then(){:js}"
      })
    }), "\n", createVNode(_components.p, {
      children: "Posiblemente este es el método principal por el cual se distinguen la promesas ya que es el que se encargará de devolver o transformar un valor dependiendo de la implementación."
    }), "\n", createVNode(_components.p, {
      children: ["Mas fácilmente podemos entender a ", createVNode(_components.code, {
        children: "then(){:js}"
      }), " como el método que hace algo una vez que la promesa ha terminado, y dentro de then() escribimos un callback que es el que se encargará de recibir la respuesta que la promesa haya devuelto."]
    }), "\n", createVNode(_components.h4, {
      id: "catchjs",
      children: createVNode(_components.code, {
        children: ".catch(){:js}"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Catch podemos considerarlo como un método auxiliar, es decir, una contra-medida en caso de que la promesa no se resuelva correctamente y está retorne un error, como por ejemplo, Si una petición a una API devuelve un código de estado en el rango de 400 a 500, esto se consideraría como una promesa no resuelta, por lo que el método ", createVNode(_components.em, {
        children: ".then()"
      }), " quedaría anulado y se saltaría directamente al método ", createVNode(_components.code, {
        children: "catch(){:js}"
      }), " y este recibiría un callback para manejar el error, por ejemplo:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'https://invalid.url'"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "/*Esto ya no se ejecutara*/"
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
            children: "  ."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "catch"
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
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " console"
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
              color: "#E06C75"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#7F848E",
              fontStyle: "italic"
            },
            children: "  // muestra el error en consola"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "asyncawait",
      children: "Async/Await 🕒"
    }), "\n", createVNode(_components.p, {
      children: ["Y finalmente ", createVNode(_components.strong, {
        children: "async /await"
      }), " es una forma de escribir una función que sea asíncrona con una sintaxis mas clara y limpia que las promesas en donde ahora contaremos con 2 palabras reservadas para realizar esto, que como pueden imaginar, son ", createVNode(_components.code, {
        children: "async{:js}"
      }), " y ", createVNode(_components.code, {
        children: "await{:js}"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Async"
      }), " es la manera con la cual definimos que la que la función devolverá una promesa, si, una promesa. Aunque la función utiliza las palabra ", createVNode(_components.code, {
        children: "async{:ts}"
      }), ", esta es solo un indicador del tipo de función, en este caso, una función asíncrona, pero el tipo de dato que retorna es una promesa (", createVNode(_components.em, {
        children: "Promise"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Await"
      }), " es la instrucción que indica que la función esperara a que la promesa se resuelva, antes de continuar con las siguientes instrucciones."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "async"
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " getData"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "'https://url/api'"
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
              color: "#E5C07B"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "json"
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
              color: "#C678DD"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: " data"
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
    }), "\n", createVNode(_components.p, {
      children: ["Tanto ", createVNode(_components.code, {
        children: "fetch(){:js}"
      }), " como su método ", createVNode(_components.code, {
        children: ".json(){:js}"
      }), " son funciones asíncronas, es decir, que toman un determinado tiempo antes de devolver un valor, por lo que definimos la palabra ", createVNode(_components.strong, {
        children: "await"
      }), " para indicarle que nos esperaremos a que la promesa nos devuelva el valor que esperamos para poder continuar con las operaciones, en este caso como ambas funciones son asíncronas, definimos 2 veces las palabras await para tener una continuidad correcta en el procesamiento de los datos."]
    }), "\n", createVNode(_components.h2, {
      id: "notas-finales",
      children: "Notas finales"
    }), "\n", createVNode(_components.p, {
      children: "Quisiera hacer mención que algunas de las cosas que mencioné como algunas reglas de escritura de código, son opiniones personales y no deberían tomarse como norma absoluta para el lenguaje, pero si debo mencionar que muchas de estas reglas se usan actualmente ya que permite una mejor colaboración en las aplicaciones que realices."
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

const url = "src/content/blog/learning-js.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/learning-js.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/learning-js.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
