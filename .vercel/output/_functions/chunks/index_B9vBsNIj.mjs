import { m as createComponent, n as renderTemplate, o as maybeRenderHead, p as addAttribute, q as createAstro, s as renderComponent } from './astro/server_KpioYinI.mjs';
import 'kleur/colors';
import { $ as $$Root } from './root_fYNzIEdx.mjs';
import { g as getCollection } from './_astro_content_m0qZ2dsB.mjs';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-uecuyro7> <h4 data-astro-cid-uecuyro7>${post.data.title}</h4> <p data-astro-cid-uecuyro7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod voluptatibus
        sapiente reiciendis eum quibusdam debitis impedit voluptatem voluptates odio?
</p> </a> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/elements/post-card.astro", void 0);

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-y7yyvqag> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post, "data-astro-cid-y7yyvqag": true })}`)} </section> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/sections/posts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Posts", $$Posts, {})} ` })}`;
}, "C:/Users/Carlo/dev/coatl.in/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Carlo/dev/coatl.in/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
