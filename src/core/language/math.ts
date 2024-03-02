interface MathDecimalsMap {
    [key: string]: string;
}

const MathDecimals: MathDecimalsMap = {
    "en": `(\d+( |-)decimal(s)?)|(number (of )?decimal(s)? (is )?\d+)`,
    "de": `(\d+( |-)decimal(s)?)|(nummer (von )?decimal(s)? (ist )?\d+)`,
    "fr": `(\d+( |-)decimale(s)?)|(nombre (de )?decimale(s)? (est )?\d+)`,
    "es": `(\d+( |-)decimale(s)?)|(numero (de )?decimale(s)? (de )?\d+)`,
    "ca": `(\d+( |-)decimal(s)?)|(nombre (de )?decimal(s)? (de )?\d+)`,
    "it": `(\d+( |-)decimale(s)?)|(numero (di )?decimale(s)? (è )?\d+)`,
    "tr": `(\d+( |-)desimal(s)?)|(numara (dan )?desimal(s)? (mı )?\d+)`,
    "nl": `(\d+( |-)decimal(en)?)|(nummer (van )?decimal(en)? (is )?\d+)`,
    "el": `(\d+( |-)δεκαδικ(ό|ά)?)|(αριθμός (από )?δεκαδικ(ό|ά)? (είναι )?\d+)`,
};

function findMathOperation(entry: string): string {
    const mathRegex = /((\()?(((\d+|pi)(\^\d+|!|.)?)|sqrt|cos|sin|tan|acos|asin|atan|log|ln|abs)( )?[+*\/\-x]?( )?(\))?[+*\/\-]?)+/;
    let operation = entry.match(mathRegex)?.[0] || "";
    // Replace "x" symbol by "*"
    operation = operation.replace("x", "*");
    return operation.trim();
}

function findNumberOfDecimals(locale: string, entry: string): number {
    const decimalsRegex = new RegExp(MathDecimals[locale]);
    const numberRegex = /\d+/;
    
    const decimalsMatch = decimalsRegex.exec(entry)?.[0] || "";
    const decimals = numberRegex.exec(decimalsMatch)?.[0] || "";
    const decimalsInt = parseInt(decimals);

    return decimalsInt;
}
