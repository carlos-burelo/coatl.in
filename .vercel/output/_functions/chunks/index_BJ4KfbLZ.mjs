import { m as createComponent, n as renderTemplate, o as maybeRenderHead, p as addAttribute, q as createAstro, s as renderComponent } from './astro/server_KpioYinI.mjs';
import 'kleur/colors';
import { $ as $$Root } from './root_fYNzIEdx.mjs';
import 'clsx';
/* empty css                         */

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-zqljprqq> <h1 data-astro-cid-zqljprqq>Building My Own Ideas.</h1> <h2 data-astro-cid-zqljprqq>Helping You to Launch Yours.</h2> <p data-astro-cid-zqljprqq>
I'm a Designer who's obsessed with (low)code tech. Creating aesthetic and timeless digital
        products & showing you how to build your own design businesses by yourself.
</p> </section> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/sections/hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-zswxsdiv> <h2 data-astro-cid-zswxsdiv>About me</h2> <p data-astro-cid-zswxsdiv>
Software Engineer with 5 years of experience in the industry. I have worked in different
        projects and technologies, from web development to mobile development. I am passionate about
        learning new things and sharing my knowledge with others.
</p> </section> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/sections/about.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const fotos = ["/img1.jpg", "/profile.webp", "/profile.webp"];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-fdaz6qqc> ${fotos.map((foto) => renderTemplate`<img${addAttribute(foto, "src")} alt="Foto de perfil" data-astro-cid-fdaz6qqc>`)} </section> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/sections/gallery.astro", void 0);

const $$Astro = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { title, summary, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-fasnnlh6> <header data-astro-cid-fasnnlh6> <h3 data-astro-cid-fasnnlh6>${title}</h3> <time data-astro-cid-fasnnlh6>${date}</time> </header> <p data-astro-cid-fasnnlh6> ${summary} </p> </li> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/elements/experience-card.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const events = Array.from({ length: 4 }, () => ({
    title: "Lorem, ipsum dolor.",
    date: Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric"
    }).format(/* @__PURE__ */ new Date()),
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem maiores. Sint doloribus sit provident molestiae hic, laudantium perferendis vero deleniti dolorem illo? Corporis in sit ab. Sapiente, iste dignissimos?"
  }));
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-tspzxw4w> <h2 data-astro-cid-tspzxw4w>Experience</h2> <ul data-astro-cid-tspzxw4w> ${events.map((event, i) => renderTemplate`${renderComponent($$result, "ExperienceCart", $$ExperienceCard, { ...event, "key": i, "data-astro-cid-tspzxw4w": true })}`)} </ul> </section> `;
}, "C:/Users/Carlo/dev/coatl.in/src/core/components/sections/experience.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Root", $$Root, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ` })}`;
}, "C:/Users/Carlo/dev/coatl.in/src/pages/index.astro", void 0);

const $$file = "C:/Users/Carlo/dev/coatl.in/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
