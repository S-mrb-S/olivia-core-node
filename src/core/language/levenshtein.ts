// Language package

// LevenshteinDistance calculates the Levenshtein Distance between two given words and returns it.
// Please see https://en.wikipedia.org/wiki/Levenshtein_distance.
function LevenshteinDistance(first: string, second: string): number {
    // Returns the length if it's empty
    if (first === "") {
        return second.length;
    }
    if (second === "") {
        return first.length;
    }

    if (first[0] === second[0]) {
        return LevenshteinDistance(first.slice(1), second.slice(1));
    }

    let a = LevenshteinDistance(first.slice(1), second.slice(1));
    const b = LevenshteinDistance(first, second.slice(1));
    if (a > b) {
        a = b;
    }

    const c = LevenshteinDistance(first.slice(1), second);
    if (a > c) {
        a = c;
    }

    return a + 1;
}

// LevenshteinContains checks for a given matching string in a given sentence with a minimum rate for Levenshtein.
function LevenshteinContains(sentence: string, matching: string, rate: number): boolean {
    const words = sentence.split(" ");
    for (const word of words) {
        // Returns true if the distance is below the rate
        if (LevenshteinDistance(word, matching) <= rate) {
            return true;
        }
    }

    return false;
}

export { LevenshteinDistance, LevenshteinContains };
