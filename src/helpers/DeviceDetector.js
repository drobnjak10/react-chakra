import { BrowserView, MobileView, isMobile, isDesktop, isConsole, isBrowser } from "react-device-detect";

const DeviceDetector = () => (
  <>
    { isMobile && <h3>MOBILE</h3> }
    { isDesktop && <h3>isDesktop</h3> }
    { isConsole && <h3>isConsole</h3> }
    { isBrowser && <h3>isBrowser</h3> }
    <BrowserView>I am rendered on: Desktop</BrowserView>
    <MobileView>I am rendered on: Mobile</MobileView>
  </>
);

export default DeviceDetector