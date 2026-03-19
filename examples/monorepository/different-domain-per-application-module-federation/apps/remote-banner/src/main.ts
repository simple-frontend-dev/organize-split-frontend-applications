export const Banner = ({
  text,
  backgroundColor,
}: {
  text: string;
  backgroundColor: string;
}) => {
  const banner = document.createElement("div");
  banner.textContent = text;
  banner.style.backgroundColor = backgroundColor;
  banner.style.padding = "2rem";
  banner.style.display = "flex";
  banner.style.justifyContent = "center";
  banner.style.alignItems = "center";
  banner.style.fontSize = "2rem";
  banner.style.height = "100px";
  return banner;
};

try {
  const { isFeatureEnabled, measureModuleLoadTime } =
    await import("tools-shell");
  measureModuleLoadTime("banner");
  console.log(isFeatureEnabled("feature-1"));
} catch (error) {
  console.error("Unable to load tools-shell module: ", error);
}
