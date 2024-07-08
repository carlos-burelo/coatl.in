import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './astro/server_KpioYinI.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BaYXsS4H.js"}],"styles":[{"type":"inline","content":":root{--primary: #5c87f6;--bg: #111318;--bg-card: #20242d;--background-navbar: #111318d0;--background-dialog-backdrop: #0a0b0eb1;--background-code-block: #0a0b0eb1;--background-dialog: #111318;--bc: #20242d;--icon-color: #8994ae;--text-color: #8994ae;--text-primary: #e2eafd;--color-link: #acb5c7;--bg-link-hover: #5c88f60c;--bg-emphasis: #5c88f612;--z-index-body: 0;--z-index-navbar: 100;--z-index-dialog: 200;--body-inner-padding: 1rem}@media (width > 430px){:root{--body-inner-padding: 2rem}}@media (width > 900px){:root{--body-inner-padding: 3rem}}@media (width > 1200px){:root{--body-inner-padding: 18rem}}@media (width > 1600px){:root{--body-inner-padding: 30rem}}@font-face{font-family:IBM Plex Sans;src:url(/ibm.woff2) format(\"woff2\");text-rendering:optimizeLegibility}@font-face{font-family:IBM Plex Sans;src:url(/ibm-italic.woff2) format(\"woff2\");text-rendering:optimizeLegibility;font-style:italic}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}::selection{background-color:var(--bg-emphasis);color:var(--primary)}html{color-scheme:dark;accent-color:var(--primary);scroll-behavior:smooth;font-family:IBM Plex Sans,sans-serif,system-ui}body{background-color:var(--bg);z-index:var(--z-index-body)}main,nav{padding-inline:var(--body-inner-padding)}svg{width:1.5em;height:1.5em}a{text-decoration:none}p{color:var(--text-color);line-height:1.8}h1,h2,h3,h4,h5,h6{color:var(--text-primary)}a[data-astro-cid-mpczply3]{padding:.75em;border-radius:.5em;display:grid;grid-auto-flow:column;justify-content:start;gap:1em;color:var(--color-link);transition:background-color .15s ease-in-out,color .15s ease-in-out}i[data-astro-cid-mpczply3]{font-size:.7em;stroke-width:2.5;display:grid;place-content:center}a[data-astro-cid-mpczply3]:hover{background-color:var(--bg-link-hover);color:var(--primary)}dialog[data-astro-cid-msppwylm]{min-width:350px;padding:.5em;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:solid 1px var(--bc);background-color:var(--background-dialog);border-radius:.5em;animation:.3s cubic-bezier(.16,1,.3,1) 0s 1 normal forwards running fadeIn}dialog[data-astro-cid-msppwylm]:not([open]){pointer-events:none;opacity:0}dialog[data-astro-cid-msppwylm]>div[data-astro-cid-msppwylm]{display:grid;gap:1em}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}dialog[data-astro-cid-msppwylm]::backdrop{inset:0;backdrop-filter:blur(4px);background-color:var(--background-dialog-backdrop);transition:background-color .2s ease-in-out}section[data-astro-cid-msppwylm]{display:grid;gap:.5em}h4[data-astro-cid-msppwylm]{padding-left:.5em}section[data-astro-cid-msppwylm]>div[data-astro-cid-msppwylm]{display:grid;gap:.1em}button[data-astro-cid-edh4vpt2]{background-color:var(--bg);border-radius:.5em;border:solid 1px var(--bc);padding:.3em;display:grid;place-content:center;font-size:1.1em;stroke-width:1.5;color:var(--icon-color)}@keyframes scroll-collapse{to{height:60px;border:solid 1px var(--bc)}}nav[data-astro-cid-qccqnvig]{top:0;display:grid;grid-auto-flow:column;justify-content:space-between;align-content:center;background-color:var(--background-navbar);backdrop-filter:blur(5em);position:sticky;animation:scroll-collapse linear both .2s;animation-timeline:scroll();height:100px;animation-range:0px 100px;border:solid 1px transparent;z-index:var(--z-index-navbar)}h1[data-astro-cid-qccqnvig]{display:grid;place-content:center}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\na[data-astro-cid-uecuyro7]{all:unset;cursor:pointer}h4[data-astro-cid-uecuyro7]{letter-spacing:.01em;font-size:1.2em}section[data-astro-cid-y7yyvqag]{display:grid;gap:1em}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BaYXsS4H.js"}],"styles":[{"type":"inline","content":":root{--primary: #5c87f6;--bg: #111318;--bg-card: #20242d;--background-navbar: #111318d0;--background-dialog-backdrop: #0a0b0eb1;--background-code-block: #0a0b0eb1;--background-dialog: #111318;--bc: #20242d;--icon-color: #8994ae;--text-color: #8994ae;--text-primary: #e2eafd;--color-link: #acb5c7;--bg-link-hover: #5c88f60c;--bg-emphasis: #5c88f612;--z-index-body: 0;--z-index-navbar: 100;--z-index-dialog: 200;--body-inner-padding: 1rem}@media (width > 430px){:root{--body-inner-padding: 2rem}}@media (width > 900px){:root{--body-inner-padding: 3rem}}@media (width > 1200px){:root{--body-inner-padding: 18rem}}@media (width > 1600px){:root{--body-inner-padding: 30rem}}@font-face{font-family:IBM Plex Sans;src:url(/ibm.woff2) format(\"woff2\");text-rendering:optimizeLegibility}@font-face{font-family:IBM Plex Sans;src:url(/ibm-italic.woff2) format(\"woff2\");text-rendering:optimizeLegibility;font-style:italic}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}::selection{background-color:var(--bg-emphasis);color:var(--primary)}html{color-scheme:dark;accent-color:var(--primary);scroll-behavior:smooth;font-family:IBM Plex Sans,sans-serif,system-ui}body{background-color:var(--bg);z-index:var(--z-index-body)}main,nav{padding-inline:var(--body-inner-padding)}svg{width:1.5em;height:1.5em}a{text-decoration:none}p{color:var(--text-color);line-height:1.8}h1,h2,h3,h4,h5,h6{color:var(--text-primary)}a[data-astro-cid-mpczply3]{padding:.75em;border-radius:.5em;display:grid;grid-auto-flow:column;justify-content:start;gap:1em;color:var(--color-link);transition:background-color .15s ease-in-out,color .15s ease-in-out}i[data-astro-cid-mpczply3]{font-size:.7em;stroke-width:2.5;display:grid;place-content:center}a[data-astro-cid-mpczply3]:hover{background-color:var(--bg-link-hover);color:var(--primary)}dialog[data-astro-cid-msppwylm]{min-width:350px;padding:.5em;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:solid 1px var(--bc);background-color:var(--background-dialog);border-radius:.5em;animation:.3s cubic-bezier(.16,1,.3,1) 0s 1 normal forwards running fadeIn}dialog[data-astro-cid-msppwylm]:not([open]){pointer-events:none;opacity:0}dialog[data-astro-cid-msppwylm]>div[data-astro-cid-msppwylm]{display:grid;gap:1em}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}dialog[data-astro-cid-msppwylm]::backdrop{inset:0;backdrop-filter:blur(4px);background-color:var(--background-dialog-backdrop);transition:background-color .2s ease-in-out}section[data-astro-cid-msppwylm]{display:grid;gap:.5em}h4[data-astro-cid-msppwylm]{padding-left:.5em}section[data-astro-cid-msppwylm]>div[data-astro-cid-msppwylm]{display:grid;gap:.1em}button[data-astro-cid-edh4vpt2]{background-color:var(--bg);border-radius:.5em;border:solid 1px var(--bc);padding:.3em;display:grid;place-content:center;font-size:1.1em;stroke-width:1.5;color:var(--icon-color)}@keyframes scroll-collapse{to{height:60px;border:solid 1px var(--bc)}}nav[data-astro-cid-qccqnvig]{top:0;display:grid;grid-auto-flow:column;justify-content:space-between;align-content:center;background-color:var(--background-navbar);backdrop-filter:blur(5em);position:sticky;animation:scroll-collapse linear both .2s;animation-timeline:scroll();height:100px;animation-range:0px 100px;border:solid 1px transparent;z-index:var(--z-index-navbar)}h1[data-astro-cid-qccqnvig]{display:grid;place-content:center}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\nsection[data-astro-cid-zqljprqq]{margin-top:2em;display:grid;gap:1em}h1[data-astro-cid-zqljprqq]{font-size:2.3rem}h2[data-astro-cid-zqljprqq]{font-size:2rem}section[data-astro-cid-zswxsdiv]{margin-block:2em;display:grid;gap:1em}section[data-astro-cid-fdaz6qqc]{display:grid;gap:1em;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}img[data-astro-cid-fdaz6qqc]{width:100%;border-radius:.75em;aspect-ratio:2/3;object-fit:cover;background-color:var(--bg-card);filter:grayscale(100%);transition:filter .3s ease-in-out,transform .3s ease-in-out}img[data-astro-cid-fdaz6qqc]:hover{filter:grayscale(0%);transform:scale(1.01)}li[data-astro-cid-fasnnlh6]{list-style:none;position:relative;padding-left:20px;display:grid;gap:.75em}li[data-astro-cid-fasnnlh6]:before{content:\"•\";color:var(--primary);font-size:1.7em;position:absolute;left:0;top:50%;transform:translateY(-50%)}header[data-astro-cid-fasnnlh6]{display:grid;grid-auto-flow:column;justify-content:space-between;align-items:center}time[data-astro-cid-fasnnlh6]{background-color:var(--bg-emphasis);padding:.25em .5em;border-radius:.25em;font-size:.75em;display:grid;align-content:center;color:var(--primary)}h2[data-astro-cid-tspzxw4w]{margin-block:2em}ul[data-astro-cid-tspzxw4w]{gap:1.5em;display:grid}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carlo/dev/coatl.in/src/core/components/sections/posts.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carlo/dev/coatl.in/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carlo/dev/coatl.in/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carlo/dev/coatl.in/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/Carlo/dev/coatl.in/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_BfvLBTOD.mjs","/src/pages/blog/index.astro":"chunks/index_ickPrY44.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__DqijdFzO.mjs","/src/pages/index.astro":"chunks/index_DaTFdlaN.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/designing-a-programing-language.mdx?astroContentCollectionEntry=true":"chunks/designing-a-programing-language_D3nE1sfO.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/learning-js.mdx?astroContentCollectionEntry=true":"chunks/learning-js_C4C4mt7m.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/next-project-architecture.mdx?astroContentCollectionEntry=true":"chunks/next-project-architecture_xVeiJmQJ.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx?astroContentCollectionEntry=true":"chunks/react-snap-slider_DCbZLq-L.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/stacks-and-queues.mdx?astroContentCollectionEntry=true":"chunks/stacks-and-queues_Bw_LU-2P.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/web-framework-proposal.mdx?astroContentCollectionEntry=true":"chunks/web-framework-proposal_XLjE72oB.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/designing-a-programing-language.mdx?astroPropagatedAssets":"chunks/designing-a-programing-language_BvAUpeNH.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/learning-js.mdx?astroPropagatedAssets":"chunks/learning-js_CUeHP-QY.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/next-project-architecture.mdx?astroPropagatedAssets":"chunks/next-project-architecture_CK0eRLfW.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx?astroPropagatedAssets":"chunks/react-snap-slider_NL5VpTrS.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/stacks-and-queues.mdx?astroPropagatedAssets":"chunks/stacks-and-queues_ziCvbjZL.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/web-framework-proposal.mdx?astroPropagatedAssets":"chunks/web-framework-proposal_DAXGb7sO.mjs","C:/Users/Carlo/dev/coatl.in/src/core/icons/arrow-left.svg?raw":"chunks/arrow-left_B4wSaGo_.mjs","C:/Users/Carlo/dev/coatl.in/src/core/icons/command.svg?raw":"chunks/command_GmbVtEQz.mjs","C:/Users/Carlo/dev/coatl.in/src/core/icons/folder.svg?raw":"chunks/folder_Cn1h7PUI.mjs","C:/Users/Carlo/dev/coatl.in/src/core/icons/github.svg?raw":"chunks/github_BKRlQbgr.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/designing-a-programing-language.mdx":"chunks/designing-a-programing-language_iq0Ulx6m.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/learning-js.mdx":"chunks/learning-js_tG9FuTrZ.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/next-project-architecture.mdx":"chunks/next-project-architecture_IhjzVSV7.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/react-snap-slider.mdx":"chunks/react-snap-slider_C5dHWHpq.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/stacks-and-queues.mdx":"chunks/stacks-and-queues_Ok7TNkLw.mjs","C:/Users/Carlo/dev/coatl.in/src/content/blog/web-framework-proposal.mdx":"chunks/web-framework-proposal_BZJ_kGOm.mjs","\u0000@astrojs-manifest":"manifest_CpEmuUS2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BaYXsS4H.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/CV.pdf","/favicon.svg","/ibm-italic.woff2","/ibm.woff2","/img1.jpg","/profile.webp","/_astro/hoisted.BaYXsS4H.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
