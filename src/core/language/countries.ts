import * as fs from 'fs'; // Import the file system module

interface Country {
    name: { [locale: string]: string };
    capital: string;
    code: string;
    area: number;
    currency: string;
}

// Define the countries variable
let countries: Country[] = [];

// SerializeCountries returns a list of countries, serialized from `res/datasets/countries.json`
function SerializeCountries(): Country[] {
    try {
        const data = fs.readFileSync('res/datasets/countries.json', 'utf-8');
        return JSON.parse(data) as Country[];
    } catch (err) {
        console.error(err);
        return [];
    }
}

// FindCountry returns the country found in the sentence and if no country is found, returns an empty Country struct
function FindCountry(locale: string, sentence: string): Country {
    for (const country of countries) {
        const name = country.name[locale];

        if (!name) {
            continue;
        }

        // If the actual country isn't contained in the sentence, continue
        if (!sentence.toLowerCase().includes(name.toLowerCase())) {
            continue;
        }

        // Returns the right country
        return country;
    }

    // Returns an empty country if none has been found
    return {} as Country;
}

// Populate the countries variable with serialized data
countries = SerializeCountries();

export { SerializeCountries, FindCountry };
