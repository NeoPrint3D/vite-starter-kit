import { offlineFallback } from "workbox-recipes";
import { setDefaultHandler } from "workbox-routing";
import { NetworkOnly } from "workbox-strategies";

// Asset hashes to see if content has changed.
const assetHashes = self.__WB_MANIFEST;

// Sets a default Network Only handler, but consider writing your own handlers, too!
setDefaultHandler(new NetworkOnly());

// HTML to serve when the site is offline
offlineFallback({
  pageFallback: "/offline.html",
});
