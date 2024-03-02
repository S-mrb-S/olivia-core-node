// English package

import * as modules from '../../../modules/modules'; // Import the necessary functions/types from modules

// ArticleCountries returns the country with its article in front.
function ArticleCountries(name: string): string {
    if (name === "United States") {
        return "the " + name;
    }

    return name;
}

// Initialize the modules for the 'en' locale
modules.registerModules("en", [
    // AREA
    {
        tag: modules.AreaTag,
        patterns: [
            "What is the area of ",
            "Give me the area of ",
        ],
        responses: [
            "The area of %s is %gkm²",
        ],
        replacer: modules.AreaReplacer,
    },

    // CAPITAL
    {
        tag: modules.CapitalTag,
        patterns: [
            "What is the capital of ",
            "What's the capital of ",
            "Give me the capital of ",
        ],
        responses: [
            "The capital of %s is %s",
        ],
        replacer: modules.CapitalReplacer,
    },

    // CURRENCY
    {
        tag: modules.CurrencyTag,
        patterns: [
            "Which currency is used in ",
            "Give me the used currency of ",
            "Give me the currency of ",
            "What is the currency of ",
        ],
        responses: [
            "The currency of %s is %s",
        ],
        replacer: modules.CurrencyReplacer,
    },

    // MATH
    {
        tag: modules.MathTag,
        patterns: [
            "Give me the result of ",
            "Calculate ",
        ],
        responses: [
            "The result is %s",
            "That makes %s",
        ],
        replacer: modules.MathReplacer,
    },

    // MOVIES
    {
        tag: modules.GenresTag,
        patterns: [
            "My favorite movie genres are Comedy, Horror",
            "I like the Comedy, Horror genres",
            "I like movies about War",
            "I like Action movies",
        ],
        responses: [
            "Great choices! I saved this movie genre information to your client.",
            "Understood, I saved this movie genre information to your client.",
        ],
        replacer: modules.GenresReplacer,
    },

    // More module definitions here...

]);

// Set the ArticleCountries function for the 'en' locale
modules.ArticleCountries["en"] = ArticleCountries;
