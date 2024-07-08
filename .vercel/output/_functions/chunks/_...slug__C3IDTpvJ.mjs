import { m as createComponent, n as renderTemplate, o as maybeRenderHead, t as spreadAttributes, u as renderSlot, q as createAstro, s as renderComponent } from './astro/server_KpioYinI.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_m0qZ2dsB.mjs';
import { $ as $$Root } from './root_fYNzIEdx.mjs';
/* empty css                          */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Pre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pre;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<pre${spreadAttributes(props, void 0, { "class": "astro-5eruibn5" })} data-astro-cid-5eruibn5>    ${renderSlot($$result, $$slots["default"])}
</pre> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/mdx/pre.astro", void 0);

const components = {
  pre: $$Pre
};

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${entry.data.title}</h1> ${renderComponent($$result2, "Content", Content, { "components": components })} ` })}`;
}, "C:/Users/Carlo/dev/coatl.in/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Carlo/dev/coatl.in/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
