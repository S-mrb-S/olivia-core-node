// Modules package

interface Module {
    Tag: string;
    Patterns: string[];
    Responses: string[];
    replacer: (arg1: string, arg2: string, arg3: string, arg4: string) => [string, string];
    Context: string;
  }
  
  const modules: Record<string, Module[]> = {};

// RegisterModule registers a module into the map
function registerModule(locale: string, module: Module) {
    if (!modules[locale]) {
        modules[locale] = [];
    }
    modules[locale].push(module);
}

// RegisterModules registers an array of modules into the map
function registerModules(locale: string, _modules: Module[]) {
    if (!modules[locale]) {
        modules[locale] = [];
    }
    modules[locale] = [...modules[locale], ..._modules];
}

// GetModules returns all the registered modules
function getModules(locale: string): Module[] {
    return modules[locale] || [];
}

// GetModuleByTag returns a module found by the given tag and locale
function getModuleByTag(tag: string, locale: string): Module | undefined {
    const foundModule = modules[locale]?.find(module => module.Tag === tag);
    return foundModule || undefined;
}

// ReplaceContent applies the Replacer of the matching module to the response and returns it
function replaceContent(locale: string, tag: string, entry: string, response: string, token: string): [string, string] {
    const foundModule = getModuleByTag(tag, locale);
    if (foundModule) {
        return foundModule.replacer(locale, entry, response, token);
    }
    return [tag, response];
}

export {registerModule, registerModules, getModules, getModuleByTag, replaceContent}
