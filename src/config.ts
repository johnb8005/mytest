export const version =
  import.meta.env.SNOWPACK_PUBLIC_VERSION || "arandomversion";
export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = import.meta.env.SNOWPACK_PUBLIC_TITLE || "Boilerplate";
export const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const ghUrl = "https://github.com/nexys-system/boilerplate_snowpack_tailwind";

export const github = { sha: `${ghUrl}/commit/${sha}`, url: ghUrl };
