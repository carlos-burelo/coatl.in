import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_KpioYinI.mjs';
import { $ as $$Image } from './_astro_assets_BT6hgD5V.mjs';
import 'clsx';

const frontmatter = {
  "title": "Arquitectura de carpetas para un proyecto escalable en Next.js 13",
  "createdAt": "2023-04-11T00:00:00.000Z",
  "updatedAt": "2023-04-16T00:00:00.000Z",
  "category": "Proposal",
  "tags": ["next.js", "arquitectura", "carpetas", "proyecto", "escalable"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introducción",
    "text": "Introducción"
  }, {
    "depth": 2,
    "slug": "propuesta-1-arquitectura-de-carpetas",
    "text": "Propuesta 1: Arquitectura de carpetas"
  }, {
    "depth": 3,
    "slug": "carpeta-src",
    "text": "Carpeta src"
  }, {
    "depth": 3,
    "slug": "carpeta-public",
    "text": "Carpeta public"
  }, {
    "depth": 3,
    "slug": "carpeta-srcapp",
    "text": "Carpeta src/app"
  }, {
    "depth": 3,
    "slug": "carpeta-srccore",
    "text": "Carpeta src/core"
  }, {
    "depth": 3,
    "slug": "core",
    "text": "core"
  }, {
    "depth": 3,
    "slug": "ejemplo-de-una-aplicación",
    "text": "Ejemplo de una aplicación"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
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
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Nota:"
        }), " Este post es una propuesta de arquitectura de carpetas para un proyecto en Next.js 13, si tienes alguna sugerencia o comentario puedes dejarlo en los comentarios."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "introducción",
      children: "Introducción"
    }), "\n", createVNode(_components.p, {
      children: ["En este post voy a compartir mi propuesta de arquitectura de carpetas para un proyecto en ", createVNode(_components.a, {
        href: "https://beta.nextjs.org/docs",
        children: "Next.js 13"
      }), ", esta propuesta se basa en la experiencia que he tenido trabajando en proyectos de diferentes tamaños y en diferentes tecnologías, y en mi opinión es una propuesta que se puede adaptar a cualquier proyecto."]
    }), "\n", createVNode(_components.h2, {
      id: "propuesta-1-arquitectura-de-carpetas",
      children: "Propuesta 1: Arquitectura de carpetas"
    }), "\n", createVNode(_components.h3, {
      id: "carpeta-src",
      children: ["Carpeta ", createVNode(_components.code, {
        children: "src"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["La carpeta ", createVNode(_components.code, {
        children: "src"
      }), " es la carpeta principal de nuestro proyecto, en esta carpeta se encuentran todos los archivos que componen nuestro proyecto, esta carpeta es la que se compila y se ejecuta en el servidor de desarrollo de Next.js y es sumamente importante que esta carpeta sea el punto de entrada de nuestro proyecto y no usar el directorio raíz."]
    }), "\n", createVNode(_components.h3, {
      id: "carpeta-public",
      children: ["Carpeta ", createVNode(_components.code, {
        children: "public"
      })]
    }), "\n", createVNode(_components.p, {
      children: "No hace falta explicar mucho sobre esta carpeta, esta carpeta es la que contiene los archivos estáticos que se van a servir en el servidor de producción, por ejemplo, imágenes, fuentes, archivos de audio, etc."
    }), "\n", createVNode(_components.h3, {
      id: "carpeta-srcapp",
      children: ["Carpeta ", createVNode(_components.code, {
        children: "src/app"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Esta carpeta es el equivalente a la carpeta ", createVNode(_components.code, {
        children: "pages"
      }), " de Next.js, en esta carpeta se encuentran todos los archivos que componen las páginas de nuestra aplicación, por ejemplo, ", createVNode(_components.em, {
        children: "/page.tsx"
      }), ", ", createVNode(_components.em, {
        children: "/about/page.tsx"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "carpeta-srccore",
      children: ["Carpeta ", createVNode(_components.code, {
        children: "src/core"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Esta carpeta contiene los archivos que componen el núcleo de la aplicación, en esta carpeta se encuentran los archivos que se compilan y se ejecutan en el servidor de desarrollo de Next.js, por ejemplo, ", createVNode(_components.em, {
        children: "componentes"
      }), ", ", createVNode(_components.em, {
        children: "libs"
      }), ", ", createVNode(_components.em, {
        children: "hooks"
      }), ", etc."]
    }), "\n", createVNode(_components.h3, {
      id: "core",
      children: createVNode(_components.code, {
        children: "core"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "components"
          }), ": Componentes globales de la aplicación (ej. Navbar, Footer, etc.) en esta carpeta se encuentran los componentes que se pueden reutilizar en cualquier parte de la aplicación y no son específicos de una página."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "hooks"
          }), ": Hooks globales de la aplicación (ej. useAuth, useUser, etc.) en esta carpeta se encuentran los hooks que se pueden reutilizar en cualquier parte de la aplicación y no son específicos de una página."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "libs"
          }), ": Librerías globales de la aplicación (ej. api, auth, etc.) en esta carpeta se encuentran las librerías que se utilizan en la aplicacion, por ejemplo, una librería para hacer peticiones a una API, una librería para manejar la autenticación, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "styles|theme"
          }), ": Estilos globales de la aplicación (ej. global.css, theme.ts, etc.) en esta carpeta se encuentran los estilos globales de la aplicación, por ejemplo, estilos globales, estilos de temas, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "utils"
          }), ": Utilidades globales de la aplicación (ej. formatNumber, formatCurrency, etc.) en esta carpeta se encuentran aquellas utilidades que requieren de una lógica mas sencilla y regularmente solo cumplen una función, por ejemplo, formatear un número, formatear una moneda, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "types"
          }), ": Tipos globales de la aplicación (ej. User, Post, etc.) en esta carpeta se encuentran los tipos que se utilizan en la aplicación, por ejemplo, tipos de usuario, tipos de post, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "constants"
          }), ": Constantes globales de la aplicación (ej. API_URL, API_VERSION, etc.) en esta carpeta se encuentran las constantes que se utilizan en la aplicación, por ejemplo, URL de la API, versión de la API, etc."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ejemplo-de-una-aplicación",
      children: "Ejemplo de una aplicación"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " src"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " about"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " page.tsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " styles.module.css"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " components"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " home"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " page.tsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " styles.module.css"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " components"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "|   "
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " core"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " components"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Navbar.tsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Footer.tsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Sidebar.tsx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " hooks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " useAuth.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " useUser.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " usePosts.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " libs"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " api.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " auth.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " posts.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " styles"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " global.css"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " theme.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " mixins.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " utils"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " formatNumber.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " formatCurrency.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " formatTime.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " types"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " User.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Post.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " Comment.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " constants"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " API.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " APP.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " ENV.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📁"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " public"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " favicon.ico"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   ├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " logo.svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "│"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   │"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: "   └──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " robots.txt"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " .gitignore"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " next-env.d.ts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " next.config.js"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " package.json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " README.md"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "├──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " tsconfig.json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "└──"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " 📄"
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: " pnpm-lock.yaml"
          })]
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

const url = "src/content/blog/next-project-architecture.mdx";
const file = "C:/Users/Carlo/dev/coatl.in/src/content/blog/next-project-architecture.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Carlo/dev/coatl.in/src/content/blog/next-project-architecture.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
