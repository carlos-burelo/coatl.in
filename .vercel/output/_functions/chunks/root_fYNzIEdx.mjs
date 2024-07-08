import { m as createComponent, n as renderTemplate, s as renderComponent, q as createAstro, y as unescapeHTML, F as Fragment, o as maybeRenderHead, p as addAttribute, z as renderHead, u as renderSlot } from './astro/server_KpioYinI.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro$3 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name } = Astro2.props;
  const path = `/src/core/icons/${name}.svg?raw`;
  const { default: src } = await import(path);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(src)}` })}`;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/elements/icon.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navlink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navlink;
  const { href, text, icon, target = "self" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(target, "target")} data-astro-cid-mpczply3> <i data-astro-cid-mpczply3>${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-mpczply3": true })}</i> <span data-astro-cid-mpczply3>${text}</span> </a> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/layout/navlink.astro", void 0);

const $$Command = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<dialog data-astro-cid-msppwylm> <div data-astro-cid-msppwylm> <section data-astro-cid-msppwylm> <h4 data-astro-cid-msppwylm>Navigation</h4> <div data-astro-cid-msppwylm> ${renderComponent($$result, "NavLink", $$Navlink, { "icon": "arrow-left", "text": "Home", "href": "/", "data-astro-cid-msppwylm": true })} ${renderComponent($$result, "NavLink", $$Navlink, { "icon": "arrow-left", "text": "Blog", "href": "/blog", "data-astro-cid-msppwylm": true })} ${renderComponent($$result, "NavLink", $$Navlink, { "icon": "arrow-left", "text": "Snippets", "href": "/snippets", "data-astro-cid-msppwylm": true })} </div> </section> <section data-astro-cid-msppwylm> <h4 data-astro-cid-msppwylm>Links</h4> <div data-astro-cid-msppwylm> ${renderComponent($$result, "NavLink", $$Navlink, { "icon": "folder", "text": "CV", "href": "/CV.pdf", "target": "_blank", "data-astro-cid-msppwylm": true })} ${renderComponent($$result, "NavLink", $$Navlink, { "icon": "github", "text": "GitHub", "href": "//github.com/carlos-burelo", "target": "_blank", "data-astro-cid-msppwylm": true })} </div> </section> </div> </dialog> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/layout/command.astro", void 0);

const $$Menubar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button aria-label="Command" data-astro-cid-edh4vpt2> ${renderComponent($$result, "Icon", $$Icon, { "name": "command", "data-astro-cid-edh4vpt2": true })} </button> ${renderComponent($$result, "Command", $$Command, { "data-astro-cid-edh4vpt2": true })}  `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/layout/menubar.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-qccqnvig> <h1 data-astro-cid-qccqnvig>Carlos Burelo</h1> ${renderComponent($$result, "Menubar", $$Menubar, { "data-astro-cid-qccqnvig": true })} </nav> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/layout/navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Carlo/dev/coatl.in/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Root = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Root;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/layout/root.astro", void 0);

export { $$Root as $ };
