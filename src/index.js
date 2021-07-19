import PrototypePins from "./components/prototype-pins";
import PrototypePin from "./components/prototype-pin";

const LibraryModule = {
  PrototypePins,
  PrototypePin,

  install(Vue) {
    // Register components with vue
    Vue.component("prototype-pins", PrototypePins);
    Vue.component("prototype-pin", PrototypePin);
  }
};

// Export library
export default LibraryModule;

// Export components
export { PrototypePins, PrototypePin };
